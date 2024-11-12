import { getSimpleMinutesRowFromTimestamp } from "../app.js";

describe("Berlin Clock - Simple Hours Row from Timestamp", () => {
  it("should display 0 lamps off for 0 minutes", () => {
    const timestamp = new Date("2024-11-11T00:00:00"); 
    expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("OOOO");
  });

  it("should display 1 lamp on for 1 minute", () => {
    const timestamp = new Date("2024-11-11T00:01:00"); // 1:00 AM
    expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("YOOO");
  });

  it("should display 2 lamps on for 2 minutes", () => {
    const timestamp = new Date("2024-11-11T00:02:00"); // 2:00 AM
    expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("YYOO");
  });

  it("should display 3 lamps on for 3 minutes", () => {
    const timestamp = new Date("2024-11-11T00:03:00"); // 3:00 AM
    expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("YYYO");
  });

  it("should display 4 lamps on for 4 minutes", () => {
    const timestamp = new Date("2024-11-11T00:04:00"); // 4:00 AM
    expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("YYYY");
  });

  it("should display 0 lamps on for 5 minutes", () => {
    const timestamp = new Date("2024-11-11T00:05:00"); // 4:00 AM
    expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("OOOO");
  });
});
