const PoopButton = document.querySelector("#poop-button");
const TodayPoopCount = document.querySelector("#today-poop-count");

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

function registerNewPoop() {
  const database = getDatabase();
  database.lastTimePooped = new Date().toLocaleString();
  const todayPoopNumber = Number(TodayPoopCount.textContent);
  const newValue = todayPoopNumber + 1;
  database.history = {
    ...database.history,
    dateTime: new Date(),
    poopCount: newValue,
  };
  TodayPoopCount.textContent = newValue;
  database.todayPoopCount = newValue;
  updateDatabase(database);
}

function updateDatabase(database) {
  localStorage.setItem("database", JSON.stringify(database));
}

function main() {
  createLocalstorageDatabase();
  PoopButton.addEventListener("click", registerNewPoop);
}

main();
