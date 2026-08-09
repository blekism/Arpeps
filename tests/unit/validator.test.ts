import { expect, it, describe } from "vitest";
import { ValidateContent } from "@/backend/actions";
import { markdown } from "@/tests/text";
import { markdownIncomplete } from "@/tests/text";

describe("validatePaper()", () => {
  it("accepts a long paper in markdown format", async () => {
    const result = await ValidateContent(markdown);

    expect(result.code).toBe(1);
  });

  it("rejects short paper", async () => {
    const result = await ValidateContent("this is a short text");

    expect(result.code).toBe(0);
  });

  it("accepts a paper with lacking keywords", async () => {
    const result = await ValidateContent(markdownIncomplete);

    expect(result.code).toBe(1);
  });
});
