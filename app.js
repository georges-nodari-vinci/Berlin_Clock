/**
 * @summary
 * Determines the state of the seconds lamp in the Berlin Clock.
 * The lamp is 'R' (red) if the number of seconds is even, and 'O' (off) if it is odd.
 *
 * @param {number} seconds - The current number of seconds.
 * @returns {string} 'R' if the seconds are even, 'O' if odd.
 *
 * @example
 * For 0 seconds, it will return 'R'; for 1 second, it will return 'O'.
 */
export function getSecondsLamp(timestamp) {
  // The lamp is red ('R') for even seconds, and off ('O') for odd seconds.
  const seconds = timestamp.getSeconds(); // Extract the seconds from the timestamp (0-59)
  return seconds % 2 === 0 ? "R" : "O";
}

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
/**
 * @summary Returns the Berlin Clock simple minutes row as a string of 4 characters.
 * Each 'Y' represents a minute lamp that is yellow (on), and 'O' represents a lamp that is off.
 * @param {Date} timestamp - A JavaScript Date object representing the current time.
 * @returns {string} A string representing the simple minutes row in Berlin Clock format.
 * Example: For 2 minutes, it will return 'YYOO'; for 3 minutes, it will return 'YYYO'.
 */
export function getSimpleMinutesRowFromTimestamp(timestamp) {
  // Extract the minutes from the timestamp (0-59)
  const minutes = timestamp.getMinutes(); 
  
  // Determine how many lamps should be on (from 0 to 4)
  const onLamps = minutes % 5; 

  // Create a string with 'Y' repeated for the number of on lamps, and pad the end with 'O' to ensure the string is 4 characters long
  return "Y".repeat(onLamps).padEnd(4, "O");
}
