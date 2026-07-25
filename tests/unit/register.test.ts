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

import {Register} from "@/backend/actions";
import { AuthError } from "@supabase/supabase-js";

describe("Register", () => {
    it("Check the values", async () => {
        vi.spyOn(auth, "register").mockResolvedValue({
            code: 1,
            data: {} as any,
        });

        const formData = new FormData();

        formData.append("email", "potpotmaganda@gmail.com");
        formData.append("password", "1234Aa7@");
        formData.append("name", "Hannah");

        await expect(Register({}, formData)).rejects.toThrow("NEXT_REDIRECT");
        expect(mockRedirect).toHaveBeenCalledWith("/dashboard");
    });

    it("check value of password", async () => {
        vi.spyOn(auth, "register").mockResolvedValue({
            code: 0,
            data: {} as any,
        });

        const formData = new FormData();

        formData.append("email", "potpotmaganda@gmail.com");
        formData.append("password", "11");
        formData.append("name", "Hannah");

        const result = await Register({}, formData);

        expect(result.success).toBe(false);
        expect(result.message).toBe("Password must at least be 8 characters.");
    });

    it("check value of username", async () => {
        vi.spyOn(auth, "register").mockResolvedValue({
            code: 0,
            data: {} as any,
        });

        const formData = new FormData();

        formData.append("email", "potpotmaganda@gmail.com");
        formData.append("password", "1234Aa7@");
        formData.append("name", "h");

        const result = await Register({}, formData);

        expect(result.success).toBe(false);
        expect(result.message).toBe("Username cannot be shorter than 2 characters.");
    });

    it("rejects empty input", async () => {
        const formData = new FormData();

        formData.append("email", "");
        formData.append("password", "");
        formData.append("name", "");

        const result = await Register({}, formData);

        expect(result.success).toBe(false);
        expect(result.message).toBe("Email, Password, and Username are required.");
    });

    it("runs catch error", async () => {
        vi.spyOn(auth, "register").mockRejectedValue(new Error("Network failure"));
        
        const formData = new FormData();

        formData.append("email", "potpotmaganda@gmail.com");
        formData.append("password", "1234Aa7@");
        formData.append("name", "Hannah");

        const result = await Register({}, formData);

        expect(result).toEqual({
            success: false, 
            message: "An error has occurred, please try again later.",
        });
    });
});
