describe("Berlin Clock", () => {
  // implement the complete test for Berlin Clock here
});

describe("Berlin Clock - Seconds Lamp", () => {
  it('should return "R" when the seconds of the given timestamp are even, indicating the lamp is on', () => {
    const evenTimestamps = [
      new Date("2024-11-13T00:00:00"), // 0 seconds
      new Date("2024-11-13T00:00:02"), // 2 seconds
      new Date("2024-11-13T00:00:04"), // 4 seconds
    ];

    evenTimestamps.forEach((timestamp) => {
      expect(getSecondsLamp(timestamp)).toBe("R");
    });
  });
});
