/**
 * @summary Returns the Berlin Clock simple minutes row as a string of 4 characters.
 * Each 'Y' represents a minute lamp that is yellow (on), and 'O' represents a lamp that is off.
 * @param {Date} timestamp - A JavaScript Date object representing the current time.
 * @returns {string} A string representing the simple minutes row in Berlin Clock format.
 * Example: For 2 minutes, it will return 'YYOO'; for 3 minutes, it will return 'YYYO'.
 */
export function getSimpleMinutesRowFromTimestamp(timestamp) {
  const minutes = timestamp.getMinutes(); 
  const onLamps = minutes % 5; 

  return "Y".repeat(onLamps).padEnd(4, "O");
}