import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("dark");

  const changeFavicon = (isDark: boolean) => {
    const faviconPath = isDark
      ? "/dark-mode-favicon.ico"
      : "/light-mode-favicon.ico";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = faviconPath;
    document.head.appendChild(link);
  };
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
    changeFavicon(isDarkMode);
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    changeFavicon(isDark);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-border">
        <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
