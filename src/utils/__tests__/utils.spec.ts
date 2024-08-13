// src/utils/__tests__/utils.test.ts
import { getFormattedDatetime } from "../utils";

describe("getFormattedDatetime", () => {
  it("returns a formatted date and time string with correct timezone during summer", () => {
    const date = new Date("2024-07-25T14:30:00.000Z");
    const formattedDate = getFormattedDatetime(date);
    expect(formattedDate).toContain("25 Jul 2024 at 16:30");
    expect(formattedDate).toContain("(GMT+2)");
  });
  it("returns a formatted date and time string during with correct timezone during winter", () => {
    const date = new Date("2024-01-25T14:30:00.000Z");
    const formattedDate = getFormattedDatetime(date);
    expect(formattedDate).toContain("25 Jan 2024 at 15:30");
    expect(formattedDate).toContain("(GMT+1)");
  });

  it("uses the default date if no date is provided", () => {
    const formattedDate = getFormattedDatetime();
    expect(formattedDate).toContain("at");
    expect(formattedDate).toContain("(");
    expect(formattedDate).toContain(")");
  });
});
