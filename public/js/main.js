const CurrentStreakText = document.querySelector("#current-streak-number");

function createLocalstorageDatabase() {
  const storagedData = localStorage.getItem("database");
  if (storagedData) return;
  const data = {
    todayPoopCount: 0,
    streak: 0,
    lastTimePooped: undefined,
    history: [],
  };
  localStorage.setItem("database", JSON.stringify(data));
}

/**
 * @returns {{ todayPoopCount: number, streak: number, lastTimePooped: string, history: Array<{ dateTime: string, poopCount: number }> }}
 */
function getDatabase() {
  const storagedData = localStorage.getItem("database");
  return JSON.parse(storagedData);
}

function main() {
  createLocalstorageDatabase();
}

main();
