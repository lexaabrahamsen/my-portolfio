import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { TitleHeader } from '@/components/site/title-header';
import { ArrowRightIcon, GithubIcon } from '@/components/site/icons';
import {
  fetchGitHubActivity,
  timeAgo,
  topLanguages,
  type ContributionDay,
  type GitHubActivity,
  type GitHubRepo,
} from '@/lib/github';

const ACCENT = '#5df4cc';

// One hue, dim → bright: level 0 sits just off the black surface, level 4 is the full accent.
const LEVEL_COLORS = [
  'rgb(255 255 255 / 0.07)',
  'rgb(93 244 204 / 0.28)',
  'rgb(93 244 204 / 0.5)',
  'rgb(93 244 204 / 0.75)',
  ACCENT,
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatDay = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });

function useGitHubActivity() {
  const [state, setState] = useState<
    { status: 'loading' } | { status: 'error' } | { status: 'ready'; data: GitHubActivity }
  >({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;
    fetchGitHubActivity()
      .then((data) => !cancelled && setState({ status: 'ready', data }))
      .catch(() => !cancelled && setState({ status: 'error' }));
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

/** Group days into Sunday-first week columns, padding the first week so weekdays line up. */
function toWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  if (days.length === 0) return [];
  const firstWeekday = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  const cells: (ContributionDay | null)[] = [...Array(firstWeekday).fill(null), ...days];
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

function StatTile({ label, value, hero }: { label: string; value: string | number; hero?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className={`mt-2 font-sans font-bold leading-none tracking-tight ${hero ? 'text-5xl' : 'text-2xl sm:text-3xl'}`}>
        {value}
      </p>
    </div>
  );
}

function ContributionCalendar({ days, total }: { days: ContributionDay[]; total: number }) {
  const weeks = useMemo(() => toWeeks(days), [days]);
  const figureRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<{ day: ContributionDay; left: number; top: number } | null>(null);

  // On narrow screens the calendar scrolls sideways; start at the most recent weeks.
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [weeks]);

  // Label only the week where each month starts, so labels never overlap.
  const monthLabels = weeks.map((week) => {
    const first = week.find((d) => d?.date.endsWith('-01'));
    return first ? MONTHS[Number(first.date.slice(5, 7)) - 1] : '';
  });

  const busiest = days.reduce<ContributionDay | null>((max, d) => (!max || d.count > max.count ? d : max), null);

  return (
    <figure ref={figureRef} className="relative rounded-lg border border-border bg-card p-5">
      <figcaption className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-sans text-sm font-semibold">Contributions in the last year</span>
        <span className="font-sans text-xs text-muted-foreground">
          {busiest && busiest.count > 0 && `Busiest day: ${formatDay(busiest.date)} (${busiest.count})`}
        </span>
      </figcaption>

      <div
        ref={scrollRef}
        className="overflow-x-auto pb-2"
        onMouseLeave={() => setHover(null)}
        onScroll={() => setHover(null)}
      >
        <div
          role="img"
          aria-label={`${total} contributions in the last year${
            busiest && busiest.count > 0 ? `; busiest day ${formatDay(busiest.date)} with ${busiest.count}` : ''
          }.`}
          className="grid gap-[3px]"
          style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(11px, 1fr))` }}
        >
          {monthLabels.map((label, i) => (
            <span
              key={`m${i}`}
              aria-hidden="true"
              className="h-4 overflow-visible whitespace-nowrap font-sans text-[10px] text-muted-foreground"
              style={{ gridColumn: i + 1, gridRow: 1 }}
            >
              {label}
            </span>
          ))}
          {Array.from({ length: 7 }, (_, weekday) =>
            weeks.map((week, w) => {
              const day = week[weekday];
              return (
                <span
                  key={`${w}-${weekday}`}
                  aria-hidden="true"
                  className="aspect-square max-h-4 min-h-[11px] rounded-[2px]"
                  style={{ gridColumn: w + 1, gridRow: weekday + 2, background: day ? LEVEL_COLORS[day.level] : 'transparent' }}
                  onMouseEnter={(e) => {
                    if (!day) return setHover(null);
                    // Position against the figure, outside the scroll box, so the tooltip is never clipped.
                    const box = figureRef.current!.getBoundingClientRect();
                    const cell = e.currentTarget.getBoundingClientRect();
                    const center = cell.left - box.left + cell.width / 2;
                    // Keep the ~200px-wide tooltip inside the card near its edges.
                    const left = Math.min(Math.max(center, 104), box.width - 104);
                    setHover({ day, left, top: cell.top - box.top });
                  }}
                />
              );
            }),
          )}
        </div>
      </div>

      {hover && (
        <div
          role="tooltip"
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1.5 font-sans text-xs text-popover-foreground shadow-lg"
          style={{ left: hover.left, top: hover.top - 6 }}
        >
          <strong className="font-semibold">
            {hover.day.count === 0 ? 'No' : hover.day.count} contribution{hover.day.count === 1 ? '' : 's'}
          </strong>{' '}
          <span className="text-muted-foreground">on {formatDay(hover.day.date)}</span>
        </div>
      )}

      <div aria-hidden="true" className="mt-3 flex items-center justify-end gap-1.5 font-sans text-[11px] text-muted-foreground">
        Less
        {LEVEL_COLORS.map((color) => (
          <span key={color} className="h-[11px] w-[11px] rounded-[2px]" style={{ background: color }} />
        ))}
        More
      </div>
    </figure>
  );
}

function LanguageBars({ repos }: { repos: GitHubRepo[] }) {
  const languages = topLanguages(repos);
  const max = languages[0]?.count ?? 1;

  return (
    <figure className="rounded-lg border border-border bg-card p-5">
      <figcaption className="mb-5 font-sans text-sm font-semibold">Top languages by repository</figcaption>
      <ul className="space-y-4">
        {languages.map(({ language, count }) => (
          <li key={language} className="font-sans">
            <div className="mb-1.5 flex justify-between text-sm">
              <span>{language}</span>
              <span className="tabular-nums text-muted-foreground">
                {count} {count === 1 ? 'repo' : 'repos'}
              </span>
            </div>
            <div className="h-2.5 rounded-r bg-white/[0.07]">
              <div className="h-full rounded-r" style={{ width: `${(count / max) * 100}%`, background: ACCENT }} />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}

function RecentRepos({ repos }: { repos: GitHubRepo[] }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="mb-4 font-sans text-sm font-semibold">Recently updated</h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {repos.slice(0, 4).map((repo) => (
          <li key={repo.name}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-md border border-border p-4 transition-colors hover:border-foreground/40"
            >
              <span className="flex items-center gap-1.5 font-sans text-sm font-semibold">
                <span className="truncate">{repo.name}</span>
                <ArrowRightIcon className="h-3 w-3 shrink-0 -rotate-45 opacity-50 transition-opacity group-hover:opacity-100" />
              </span>
              {repo.description && (
                <span className="mt-1 line-clamp-2 font-sans text-sm text-muted-foreground">{repo.description}</span>
              )}
              <span className="mt-auto flex gap-3 pt-3 font-sans text-xs text-muted-foreground">
                {repo.language && <span>{repo.language}</span>}
                <span>Updated {timeAgo(repo.pushed_at)}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="grid grid-cols-1 gap-4" aria-busy="true" aria-label="Loading GitHub activity">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="h-24 animate-pulse rounded-lg bg-card" />
        ))}
      </div>
      <div className="h-48 animate-pulse rounded-lg bg-card" />
    </div>
  );
}

export function GitHubActivitySection() {
  const state = useGitHubActivity();

  return (
    <section id="github">
      <TitleHeader title="GitHub" accent="recent activity" />
      <div className="mx-auto max-w-screen-xl px-4 pb-24 sm:px-12 lg:px-16">
        {state.status === 'loading' && <LoadingState />}

        {state.status === 'error' && (
          <p className="font-sans text-muted-foreground">
            GitHub activity couldn't load right now.{' '}
            <a href="https://github.com/lexaabrahamsen" className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
              See my profile on GitHub
            </a>
            .
          </p>
        )}

        {/* grid-cols-1 = minmax(0, 1fr): lets the wide calendar scroll instead of widening the page. */}
        {state.status === 'ready' && (
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatTile hero label="Contributions, past year" value={state.data.contributionsLastYear} />
              <StatTile label="Public repos" value={state.data.publicRepos} />
              <StatTile label="Last push" value={state.data.repos[0] ? timeAgo(state.data.repos[0].pushed_at) : '—'} />
              <StatTile label="On GitHub since" value={new Date(state.data.memberSince).getFullYear()} />
            </div>

            <ContributionCalendar days={state.data.days} total={state.data.contributionsLastYear} />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <LanguageBars repos={state.data.repos} />
              <div className="lg:col-span-2">
                <RecentRepos repos={state.data.repos} />
              </div>
            </div>

            <a
              href={state.data.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-80"
            >
              <GithubIcon className="h-4 w-4" />
              View GitHub profile
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
