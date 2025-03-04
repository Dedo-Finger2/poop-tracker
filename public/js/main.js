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

function main() {
  createLocalstorageDatabase();
}

main();
