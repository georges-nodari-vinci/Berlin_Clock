describe("Berlin Clock", () => {
  // implement the complete test for Berlin Clock here
});


import { getHighHoursRowFromTimestamp } from "../app.js";

describe("Berlin Clock - Simple Hours Row from Timestamp", () => {
  it("should display 0 lamps off for 0 hours", () => {
    const timestamp = new Date("2024-11-11T00:00:00"); 
    expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("OOOO");
  });

  it("should display 1 lamp on for 5 minute", () => {
    const timestamp = new Date("2024-11-11T05:00:00"); 
    expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("YOOO");
  });

  it("should display 2 lamps on for 10 hours", () => {
    const timestamp = new Date("2024-11-11T10:00:00"); 
    expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("YYOO");
  });

  it("should display 3 lamps on for 15 hours", () => {
    const timestamp = new Date("2024-11-11T15:00:00"); 
    expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("YYYO");
  });

  it("should display 4 lamps on for 20 hours", () => {
    const timestamp = new Date("2024-11-11T20:00:00");
    expect(getHighHoursRowFromTimestamp(timestamp)).toEqual("YYYY");
  });
});