import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { getGitHubYears } from "../utils/calculateYears";
import YearButton from "./YearButton";
import EmptyState from "./EmptyState";
import { githubData } from "../constants";

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState(undefined);
  const [colorScheme, setColorScheme] = useState("light");

  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const joinYear = Number(import.meta.env.VITE_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);
  const today = new Date().getFullYear();

  useEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: light)").matches;
    setColorScheme(dark ? "dark" : "light");
  }, []);

  if (!username || !joinYear) {
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="Please set your GitHub username and join year in the .env file."
      />
    );
  }

  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4">
      <div className="flex flex-wrap xl:flex-col gap-2 m-auto">
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(calendarYear === year ? undefined : year)
            }
          />
        ))}
      </div>
      <div className="bg-white  border border-gray-200 dark:border-gray-800 p-6 rounded-lg w-[52.1vw]">
        <GitHubCalendar
          username={username}
          colorScheme={colorScheme}
          blockSize={13}
          year={calendarYear}
          theme={githubData}
        />
      </div>
    </div>
  );
}
