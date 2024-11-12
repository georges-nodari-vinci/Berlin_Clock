export function convertToBerlinClock() {
  // implement the complete code Berlin Clock here
}


export function getSimpleMinutesRowFromTimestamp(timestamp) {
  const minutes = timestamp.getMinutes(); // Extract the minutes from the timestamp (0-59)
  const onLamps = minutes % 5; // Determine how many lamps should be on (from 0 to 4)

  return "Y".repeat(onLamps).padEnd(4, "O");
}