export function convertToBerlinClock() {
  // implement the complete code Berlin Clock here
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
  return seconds % 2 === 0 ? "R" : "O";
}
