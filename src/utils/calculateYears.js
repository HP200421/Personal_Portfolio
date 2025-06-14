export function getGitHubYears(joinYear) {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = currentYear; y >= joinYear; y--) {
    years.push(y);
  }
  return years;
}
