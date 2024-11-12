import { getFiveMinutesRowFromTimestamp } from "../app.js";

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

  
});
