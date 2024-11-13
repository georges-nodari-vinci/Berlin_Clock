import { getSecondsLamp, getHighHoursRowFromTimestamp } from "../app.js";

describe("Complete Berlin Clock", () => {
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

  describe("Berlin Clock - 5 Hours Row from Timestamp", () => {
    it("should display 0 lamps off for 0 hours", () => {
      const timestamp = new Date("2024-11-11T00:00:00"); //00:00
      expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("OOOO");
    });

    it("should display 1 lamp on for 5 hours", () => {
      const timestamp = new Date("2024-11-11T05:00:00"); //05:00
      expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("ROOO");
    });

    it("should display 2 lamps on for 10 hours", () => {
      const timestamp = new Date("2024-11-11T10:00:00"); //10:00
      expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("RROO");
    });

    it("should display 3 lamps on for 15 hours", () => {
      const timestamp = new Date("2024-11-11T15:00:00"); //15:00
      expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("RRRO");
    });

    it("should display 4 lamps on for 20 hours", () => {
      const timestamp = new Date("2024-11-11T20:00:00"); //20:00
      expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("RRRR");
    });

    it("should display 4 lamps on for 22 hours", () => {
      const timestamp = new Date("2024-11-11T22:15:15"); //22:15:15
      expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("RRRR");
    });
  });
});
