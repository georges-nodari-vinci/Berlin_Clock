


import { getHighHoursRowFromTimestamp } from "../app.js";

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
    const timestamp = new Date("2024-11-11T20:00:00");//20:00
    expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("RRRR");
  });
});