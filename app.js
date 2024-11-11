export function convertToBerlinClock() {
  // implement the complete code Berlin Clock here
}

/**
 * @summary Returns the Berlin Clock simple hours row as a string of 4 characters.
 * Each 'R' represents an hour lamp that is red (on), and 'O' represents a lamp that is off.
 * @param {Date} timestamp - A JavaScript Date object representing the current time.
 * @returns {string} A string representing the simple hours row in Berlin Clock format.
 * Example: For 2 hours, it will return 'RROO'; for 3 hours, it will return 'RRRO'.
 */
export function getSimpleHoursRowFromTimestamp(timestamp) {
  const hours = timestamp.getHours(); // Extract the hours from the timestamp (0-23)
  const onLamps = hours % 5; // Determine how many lamps should be on (from 0 to 4)

  return "R".repeat(onLamps).padEnd(4, "O");
}
