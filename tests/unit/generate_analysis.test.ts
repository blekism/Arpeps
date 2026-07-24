import { expect, it, describe } from "vitest";
import { generateAnalysis } from "@/backend/actions";
import { markdown } from "@/tests/EditoriallyAPA";

describe("generateAnalysis()", () => {
  it("returns valid JSON", async () => {
    const result = await generateAnalysis(markdown);

    expect(result).toBeDefined();
    expect(typeof result).toBe("object");
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

        for (let i = 1; i <= Object.keys(result.concept_connections).length; i++) {
        expect(result.concept_connections).toHaveProperty(`connection${i}`);

      expect(result.concept_connections[`connection${i}`]).toMatchObject({
        from: expect.any(Number),
        to: expect.any(Number),
        type: expect.any(Number),
        strength: expect.any(Number),
        reason: expect.any(String),
      });
    }

    expect(result.cohesion_analysis).toHaveProperty("overall_cohesion_score");

        for (let i = 1; i <= Object.keys(result.cohesion_analysis).length -1; i++) {
        expect(result.cohesion_analysis).toHaveProperty(`cohesion_analysis${i}`);

      expect(result.cohesion_analysis[`cohesion_analysis${i}`]).toMatchObject({
        concept: expect.any(String),
        cohesion_score: expect.any(String),
        reason: expect.any(String),
      });
    }

        expect(result.cohesion_analysis.overall_cohesion_score).toEqual(
            expect.any(String),
        );
    });

  it("return valid value types", async () => {
    const result = await generateAnalysis(markdown);

    expect(typeof result.each_concepts.problem).toBe("string");
    expect(typeof result.each_concepts.methodology).toBe("string");
    expect(typeof result.each_concepts.solution).toBe("string");
    expect(typeof result.each_concepts.literature).toBe("string");
    expect(typeof result.each_concepts.result).toBe("string");

    for (
      let i = 1;
      i <= Object.keys(result.cohesion_analysis).length - 1;
      i++
    ) {
      expect(result.cohesion_analysis).toHaveProperty(`cohesion_analysis${i}`);

      const analysis = result.cohesion_analysis[`cohesion_analysis${i}`];

      expect(typeof analysis.concept).toBe("string");
      expect(typeof analysis.cohesion_score).toBe("string");
      expect(typeof analysis.reason).toBe("string");
    }

    for (let i = 1; i <= Object.keys(result.concept_connections).length; i++) {
      expect(result.concept_connections).toHaveProperty(`connection${i}`);

      const connection = result.concept_connections[`connection${i}`];

      expect(typeof connection.from).toBe("number");
      expect(typeof connection.to).toBe("number");
      expect(typeof connection.type).toBe("number");
      expect(typeof connection.strength).toBe("number");
      expect(typeof connection.reason).toBe("string");

      expect(connection.strength).toBeGreaterThanOrEqual(0);
      expect(connection.strength).toBeLessThanOrEqual(10);
    }

    expect(typeof result.cohesion_analysis.overall_cohesion_score).toBe(
      "string",
    );
  });

  //   it("throws on malformed JSON", async () => {
  //     await expect(generateAnalysis("this is a text")).rejects.toThrow();
  //   });
});
