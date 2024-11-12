export function convertToBerlinClock() {
  // implement the complete code Berlin Clock here
}


export function getSimpleMinutesRowFromTimestamp(minutesTimestamp) {
  const minute = minutesTimestamp % 5; // Determine how many lamps should be on (from 0 to 4)
  return "Y".repeat(minute).padEnd(4, "O");
}