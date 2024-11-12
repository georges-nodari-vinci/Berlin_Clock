export function convertToBerlinClock() {
  // implement the complete code Berlin Clock here
}


export function getSimpleMinutesRowFromTimestamp(timestamp) {
  const minutes = timestamp.getMinutes(); 
  const onLamps = minutes % 5; 

  return "Y".repeat(onLamps).padEnd(4, "O");
}