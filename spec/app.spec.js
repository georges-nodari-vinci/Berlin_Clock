import {
  getSecondsLamp,
  getHighHoursRowFromTimestamp,
  getSimpleMinutesRowFromTimestamp,
  getFiveMinutesRowFromTimestamp,
} from "../app.js";

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
  describe("Berlin Clock - Simple minutes Row from Timestamp", () => {
    it("should display 0 lamps off for 0 minutes", () => {
      const timestamp = new Date("2024-11-11T00:00:00");
      expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("OOOO");
    });

    it("should display 1 lamp on for 1 minute", () => {
      const timestamp = new Date("2024-11-11T00:01:00"); // 0:01 AM
      expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("YOOO");
    });

    it("should display 2 lamps on for 2 minutes", () => {
      const timestamp = new Date("2024-11-11T00:02:00"); // 0:02 AM
      expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("YYOO");
    });

    it("should display 3 lamps on for 3 minutes", () => {
      const timestamp = new Date("2024-11-11T00:03:00"); // 0:03 AM
      expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("YYYO");
    });

    it("should display 4 lamps on for 4 minutes", () => {
      const timestamp = new Date("2024-11-11T00:04:00"); // 0:04 AM
      expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("YYYY");
    });

    it("should display 0 lamps on for 5 minutes", () => {
      const timestamp = new Date("2024-11-11T00:05:00"); // 0:05 AM
      expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("OOOO");
    });
  });

  describe("Berlin Clock - Five Minutes Row from Timestamp", () => {
    it("should display 0 lamps on for 0 minutes", () => {
      const timestamp = new Date("2024-11-11T00:00:00");
      expect(getFiveMinutesRowFromTimestamp(timestamp)).toEqual("OOOOOOOOOOO");
    });

    it("should display 1 lamp on for 5 minutes", () => {
      const timestamp = new Date("2024-11-11T00:05:00");
      expect(getFiveMinutesRowFromTimestamp(timestamp)).toEqual("YOOOOOOOOOO");
    });

    it("should display 2 lamps on for 10 minutes", () => {
      const timestamp = new Date("2024-11-11T00:10:00");
      expect(getFiveMinutesRowFromTimestamp(timestamp)).toEqual("YYOOOOOOOOO");
    });

    it("should display 3 lamps with one red lamp on for 15 minutes", () => {
      const timestamp = new Date("2024-11-11T00:15:00");
      expect(getFiveMinutesRowFromTimestamp(timestamp)).toEqual("YYROOOOOOOO");
    });

    it("should display 4 lamps with one red lamp on for 20 minutes", () => {
      const timestamp = new Date("2024-11-11T00:20:00");
      expect(getFiveMinutesRowFromTimestamp(timestamp)).toEqual("YYRYOOOOOOO");
    });

    it("should display 9 lamps with 3 red lamps on for 45 minutes", () => {
      const timestamp = new Date("2024-11-11T00:45:00");
      expect(getFiveMinutesRowFromTimestamp(timestamp)).toEqual("YYRYYRYYROO");
    });

    it("should display 11 lamps with 3 red lamps on for 55 minutes", () => {
      const timestamp = new Date("2024-11-11T00:55:00");
      expect(getFiveMinutesRowFromTimestamp(timestamp)).toEqual("YYRYYRYYRYY");
    });
  });
});
