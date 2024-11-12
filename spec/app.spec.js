import { getSimpleMinutesRowFromTimestamp } from "../app.js";

describe("Berlin Clock - Simple Hours Row from Timestamp", () => {
  it("should display 0 lamps off for 0 minutes", () => {
    const timestamp = new Date("2024-11-11T00:00:00").getMinutes(); 
    expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("OOOO");
  });

  it("should display 1 lamp on for 1 minute", () => {
    const timestamp = new Date("2024-11-11T00:01:00").getMinutes(); // 1:00 AM
    expect(getSimpleMinutesRowFromTimestamp(timestamp)).toEqual("YOOO");
  });
});
