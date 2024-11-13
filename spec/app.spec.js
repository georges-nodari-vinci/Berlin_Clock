import { getSecondsLamp } from "../app.js";

describe("Berlin Clock - Seconds Lamp", () => {
  it('should return "R" when the seconds of the given timestamp are even, indicating the lamp is on', () => {
    const evenTimestamps = [
      new Date("2024-11-11T00:00:00"), // 0 seconds
      new Date("2024-11-11T00:00:02"), // 2 seconds
      new Date("2024-11-11T00:00:04"), // 4 seconds
    ];

    evenTimestamps.forEach((timestamp) => {
      expect(getSecondsLamp(timestamp)).toBe("R");
    });
  });

  it('should return "O" when the seconds of the given timestamp are odd, indicating the lamp is off', () => {
    const oddTimestamps = [
      new Date("2024-11-11T00:00:01"), // 1 second
      new Date("2024-11-11T00:00:03"), // 3 seconds
      new Date("2024-11-11T00:00:05"), // 5 seconds
    ];

    oddTimestamps.forEach((timestamp) => {
      expect(getSecondsLamp(timestamp)).toBe("O");
    });
  });
});
