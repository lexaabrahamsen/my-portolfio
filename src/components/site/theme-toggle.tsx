import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/lib/theme-provider';

export function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-foreground/70" />
      <Switch checked={darkMode} onCheckedChange={toggleDarkMode} aria-label="Toggle dark mode" />
      <Moon className="h-4 w-4 text-foreground/70" />
    </div>
  );
}
