export function convertToBerlinClock() {
  // implement the complete code Berlin Clock here
}




export function getHighHoursRowFromTimestamp(timestamp) {
  const hours = timestamp.getHours();
  const onLamps = Math.floor(hours / 5); 

  return "R".repeat(onLamps).padEnd(4, "O");
}
