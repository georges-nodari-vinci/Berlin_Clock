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