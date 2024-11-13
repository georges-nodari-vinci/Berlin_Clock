/**
 * @summary Returns the Berlin Clock 5 hour bloc row as a string of 4 characters.
 * Each 'R' represents 5 hours lamp that is red (on), and 'O' represents a lamp that is off.
 * @param {Date} timestamp - A JavaScript Date object representing the current time.
 * @returns {string} A string representing the 5 hours row in Berlin Clock format.
 */




export function getHighHoursRowFromTimestamp(timestamp) {
  // Extract the hours from the timestamp (0-23)
  const hours = timestamp.getHours();
// Determine how many lamps should be on (from 0 to 4)
  const onLamps = Math.floor(hours / 5); 
// Create a string with 'R' repeated for the number of on lamps, and pad the end with 'O' to ensure the string is 4 characters long
  return "R".repeat(onLamps).padEnd(4, "O");
}
