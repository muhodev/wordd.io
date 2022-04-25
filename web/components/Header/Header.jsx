import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "components/Icons";
import Link from "next/link";

export function Header(props) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Sun
          className="text-2xl text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <Moon
          className="text-2xl text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <header className="bg-main-color h-16 border-b border-zinc-200 dark:border-zinc-800 w-full flex items-center justify-between sticky top-0 z-[9999] gap-8 bg-white dark:bg-zinc-900">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1>
            <Link href="/">
              <a className="font-bold text-xl text-zinc-900 dark:text-zinc-100">
                wordd.io
              </a>
            </Link>
          </h1>
          <span className="font-medium px-2 border text-yellow-500 border-yellow-500 dark:border-yellow-300 dark:text-yellow-300 text-sm rounded-md">
            Beta
          </span>
        </div>
        <div>{renderThemeChanger()}</div>
      </div>
    </header>
  );
}
