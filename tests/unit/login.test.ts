import { expect, it, describe, vi } from "vitest";
import * as auth from "@/services/auth_server";

const { mockRedirect, redirectError } = vi.hoisted(() => {
  const redirectError = new Error("NEXT_REDIRECT");
  return {
    redirectError,
    mockRedirect: vi.fn(() => {
      throw redirectError;
    }),
  };
});

vi.mock("next/navigation", () => ({
  redirect: mockRedirect,
}));

import { Login } from "@/backend/actions";
import { AuthError } from "@supabase/supabase-js";

describe("Login()", () => {
  it("Allows correct and existing credentials", async () => {
    vi.spyOn(auth, "login").mockResolvedValue({
      code: 1,
      data: {} as any,
    });

    const formdata = new FormData();
    formdata.append("email", "cristianlaviano@gmail.com");
    formdata.append("password", "1234Aa7@");

    await expect(Login({}, formdata)).rejects.toThrow("NEXT_REDIRECT");
    expect(mockRedirect).toHaveBeenCalledWith("/dashboard");
  });

  it("rejects nonexisting or wrong credentials", async () => {
    vi.spyOn(auth, "login").mockResolvedValue({
      code: 0,
      error: new AuthError("Invalid Login credentials"),
    });

    const formdata = new FormData();
    formdata.append("email", "test@gmail.com");
    formdata.append("password", "@@@@@@@@@@");

    const result = await Login({}, formdata);

    expect(result.success).toBe(false);
  });

  it("rejects empty input", async () => {
    const formdata = new FormData();

    formdata.append("email", "");
    formdata.append("password", "");

    const result = await Login({}, formdata);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Email and Password are required.");
  });

  it("runs catch error", async () => {
    vi.spyOn(auth, "login").mockRejectedValue(new Error("Network failure"));

    const formdata = new FormData();
    formdata.append("email", "test@test.com");
    formdata.append("password", "123331231");

    const result = await Login({}, formdata);

    expect(result).toEqual({
      success: false,
      message: "An error has occured, please try again later.",
    });
  });
});
