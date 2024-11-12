import { getFiveMinutesRowFromTimestamp } from "../app.js";

describe("Berlin Clock - Five Minutes Row from Timestamp", () => {
  it("should display 0 lamps on for 0 minutes", () => {
    const timestamp = new Date("2024-11-11T00:00:00");
    expect(getFiveMinutesRowFromTimestamp(timestamp)).toEqual("OOOOOOOOOOO");
  });

});
