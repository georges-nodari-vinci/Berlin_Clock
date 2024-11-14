function determineLampsOnForSimpleHoursOrMinutes(number) {
  return number % 5;
}

function determineLampsOnForHighHoursOrMinutes(hours) {
  return Math.floor(hours / 5);
}

function generateFiveMinuteLamps(onLamps, row) {
  for (let i = 1; i <= onLamps; i++) {
    // For every third lamp, use 'R' for quarters, otherwise use 'Y'
    if (i % 3 === 0) {
      row += "R"; // Red lamp for quarters
    } else {
      row += "Y"; // Yellow lamp for other five-minute blocks
    }
  }
  return row;
}

function isEvenSecond(seconds) {
  return seconds % 2 === 0;
}


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
  return isEvenSecond(seconds) ? "R" : "O";
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
  const onLamps = determineLampsOnForHighHoursOrMinutes(hours);
  // Create a string with 'R' repeated for the number of on lamps, and pad the end with 'O' to ensure the string is 4 characters long
  return "R".repeat(onLamps).padEnd(4, "O");
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
  const onLamps = determineLampsOnForSimpleHoursOrMinutes(hours); // Determine how many lamps should be on (from 0 to 4)

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
  const onLamps = determineLampsOnForSimpleHoursOrMinutes(minutes);

  // Create a string with 'Y' repeated for the number of on lamps, and pad the end with 'O' to ensure the string is 4 characters long
  return "Y".repeat(onLamps).padEnd(4, "O");
}

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
  const onLamps = determineLampsOnForHighHoursOrMinutes(minutes);

  // Initialize an empty string to build the row
  let row = "";

  // Loop through the number of lamps that should be on
  row = generateFiveMinuteLamps(onLamps, row);

  // Pad the end of the string with 'O' to ensure it is 11 characters long
  return row.padEnd(11, "O");
}


