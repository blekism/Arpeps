import { expect, it, describe } from "vitest";
import { generateAnalysis } from "@/backend/actions";
import { markdown } from "@/tests/EditoriallyAPA";

describe("generateAnalysis()", () => {
    it("returns valid JSON", async () => {
        const result = await generateAnalysis(markdown);

        expect(result.code).toBe(1);
    });

    it("returns the expected structure", async () => {
        const result = await generateAnalysis(markdown);

        expect(result).toHaveProperty("each_concepts");
        expect(result).toHaveProperty("concept_connections");
        expect(result).toHaveProperty("cohesion_analysis");

        expect(result.each_concepts).toMatchObject({
            problem: expect.any(String),
            methodology: expect.any(String),
            solution: expect.any(String),
            literature: expect.any(String),
            result: expect.any(String),
        });

        expect(Object.keys(result.concept_connections)).toHaveLength(6);

        for (let i = 1; i <= 6; i++) {
        expect(result.concept_connections).toHaveProperty(`connection${i}`);

            expect(result.concept_connections[`connection${i}`]).toMatchObject({
                from: expect.any(Number),
                to: expect.any(Number),
                type: expect.any(String),
                strength: expect.any(Number),
                reason: expect.any(String),
            });
        }

        expect(result.cohesion_analysis).toHaveProperty("overall_cohesion_score");

        for (let i = 1; i <= 6; i++) {
        expect(result.cohesion_analysis).toHaveProperty(`connection${i}`);

            expect(result.cohesion_analysis[`connection${i}`]).toMatchObject({
                problem: expect.any(String),
                cohesion_score: expect.any(String),
                reason: expect.any(String),
            });
        }

        expect(result.cohesion_analysis.overall_cohesion_score).toEqual(
            expect.any(String)
        );
    });

    it("return valid value types", async () => {
        const result = await generateAnalysis(markdown);

        expect(typeof result.problem).toBe("string");
        expect(typeof result.methodology).toBe("string");
        expect(typeof result.solution).toBe("string");
        expect(typeof result.literature).toBe("string");
        expect(typeof result.result).toBe("string");

        expect(typeof result.from).toBe("number");
        expect(typeof result.to).toBe("number");
        expect(typeof result.type).toBe("string");
        expect(typeof result.strength).toBe("number");
        expect(typeof result.reason).toBe("string");

        expect(typeof result.strength).toBe("number");
        
        expect(result.strength).toBeGreaterThanOrEqual(0);
        expect(result.strength).toBeLessThanOrEqual(10);

        expect(typeof result.concept).toBe("string");
        expect(typeof result.cohesion_score).toBe("string");
        expect(typeof result.reason).toBe("string");

        expect(typeof result.overall_cohesion_score).toBe("string");
    });

    it("throws on malformed JSON", async () => {
    await expect(
        generateAnalysis(markdown)
    ).rejects.toThrow();
    });


});