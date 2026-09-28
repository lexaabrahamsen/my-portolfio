export const GITHUB_USERNAME = 'lexaabrahamsen';

export interface ContributionDay {
  date: string; // YYYY-MM-DD
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

export interface GitHubActivity {
  profileUrl: string;
  publicRepos: number;
  memberSince: string;
  contributionsLastYear: number;
  days: ContributionDay[];
  repos: GitHubRepo[];
}

const CACHE_KEY = `github-activity:${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 60 * 60 * 1000;

// Unauthenticated GitHub API allows 60 requests/hour per visitor IP, so cache in the browser.
function readCache(): GitHubActivity | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { savedAt, data } = JSON.parse(raw) as { savedAt: number; data: GitHubActivity };
    return Date.now() - savedAt < CACHE_TTL_MS ? data : null;
  } catch {
    return null;
  }
}

function writeCache(data: GitHubActivity) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), data }));
  } catch {
    // Storage can be unavailable (private mode, blocked site data) — caching is optional.
  }
}

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}

export async function fetchGitHubActivity(): Promise<GitHubActivity> {
  const cached = readCache();
  if (cached) return cached;

  const [user, repos, contributions] = await Promise.all([
    getJson<{ html_url: string; public_repos: number; created_at: string }>(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
    ),
    getJson<GitHubRepo[]>(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`),
    // GitHub only serves the contribution calendar via authenticated GraphQL; this public API mirrors it.
    getJson<{ total: { lastYear: number }; contributions: ContributionDay[] }>(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    ),
  ]);

  const data: GitHubActivity = {
    profileUrl: user.html_url,
    publicRepos: user.public_repos,
    memberSince: user.created_at,
    contributionsLastYear: contributions.total.lastYear,
    days: contributions.contributions,
    repos: repos.filter((r) => !r.fork && !r.archived),
  };
  writeCache(data);
  return data;
}

export function topLanguages(repos: GitHubRepo[], limit = 5) {
  const counts = new Map<string, number>();
  for (const { language } of repos) {
    if (language) counts.set(language, (counts.get(language) ?? 0) + 1);
  }
  return [...counts]
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

const relative = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export function timeAgo(iso: string): string {
  const seconds = (new Date(iso).getTime() - Date.now()) / 1000;
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ];
  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size) return relative.format(Math.round(seconds / size), unit);
  }
  return 'just now';
}
