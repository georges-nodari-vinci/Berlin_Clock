/**
 * @summary Returns the Berlin Clock five minutes row as a string of 11 characters.
 * Each 'Y' represents a yellow lamp that is on, 'R' represents a red lamp that is on (for quarters), and 'O' represents a lamp that is off.
 * @param {Date} timestamp - A JavaScript Date object representing the current time.
 * @returns {string} A string representing the five minutes row in Berlin Clock format.
 * Example: For 17 minutes, it will return 'YYROOOOOOOO'; for 30 minutes, it will return 'YYRYYROOOOO'.
 */
export function getFiveMinutesRowFromTimestamp(timestamp) {
  // Extract the minutes from the timestamp (0-59)
  const minutes = timestamp.getMinutes();
  
  // Determine how many lamps should be on (from 0 to 11)
  const onLamps = Math.floor(minutes / 5);
  
  // Initialize an empty string to build the row
  let row = "";

  // Loop through the number of lamps that should be on
  for (let i = 1; i <= onLamps; i++) {
    // For every third lamp, use 'R' for quarters, otherwise use 'Y'
    if (i % 3 === 0) {
      row += "R"; // Red lamp for quarters
    } else {
      row += "Y"; // Yellow lamp for other five-minute blocks
    }
  }

  // Pad the end of the string with 'O' to ensure it is 11 characters long
  return row.padEnd(11, "O");
}