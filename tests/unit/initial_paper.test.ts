import { expect, it, describe } from "vitest";

import { markdown } from "../text";
import { createPaperRecord } from "@/backend/actions";

describe("write paper record", () => {
  it("blocks no id input", async () => {
    await expect(createPaperRecord("", markdown)).rejects.toThrow(
      "An error has occurred. Please try again later",
    );
  });

  it("blocks no content input", async () => {
    const userId = "f2dcbc0e-f2ed-413d-b4a7-cad26fc469ac";

    await expect(createPaperRecord(userId, "")).rejects.toThrow(
      "An error has occurred. Please try again later",
    );
  });
});
