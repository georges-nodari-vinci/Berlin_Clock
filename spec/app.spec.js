import { getSimpleHoursRowFromTimestamp } from "../app.js";

describe("Berlin Clock - Simple Hours Row from Timestamp", () => {
  it("should display 4 lamps off for 0 hours", () => {
    const timestamp = new Date("2024-11-11T00:00:00"); // Midnight
    expect(getSimpleHoursRowFromTimestamp(timestamp)).toEqual("OOOO");
  });

  it("should display 1 lamp on for 1 hour", () => {
    const timestamp = new Date("2024-11-11T01:00:00"); // 1:00 AM
    expect(getSimpleHoursRowFromTimestamp(timestamp)).toEqual("ROOO");
  });

  it("should display 2 lamps on for 2 hours", () => {
    const timestamp = new Date("2024-11-11T02:00:00"); // 2:00 AM
    expect(getSimpleHoursRowFromTimestamp(timestamp)).toEqual("RROO");
  });

  it("should display 3 lamps on for 3 hours", () => {
    const timestamp = new Date("2024-11-11T03:00:00"); // 3:00 AM
    expect(getSimpleHoursRowFromTimestamp(timestamp)).toEqual("RRRO");
  });

  it("should display 4 lamps on for 4 hours", () => {
    const timestamp = new Date("2024-11-11T04:00:00"); // 4:00 AM
    expect(getSimpleHoursRowFromTimestamp(timestamp)).toEqual("RRRR");
  });
});
