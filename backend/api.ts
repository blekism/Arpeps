// Mock "API": simulates a parser that extracts concepts from a research paper.

import {
  type Analysis,
  type Connection,
  type ConceptKey,
  type Paper,
  savePaper,
} from "./mockData";

function pick<T>(arr: T[], i: number): T {
  return arr[i % arr.length];
}

const SAMPLE_PROBLEMS = [
  "Undergraduate researchers submit papers with weakly connected sections, causing costly revision cycles.",
  "Clinicians lack lightweight triage tools for pediatric readmission risk in low-resource wards.",
  "Small e-commerce sites struggle to detect coordinated review fraud with limited labeled data.",
];
const SAMPLE_METHODS = [
  "Mixed-methods design combining a 42-item survey (n=210) with semi-structured interviews (n=12), analyzed via thematic coding.",
  "Retrospective cohort analysis of 1,284 admissions using gradient-boosted trees with SHAP explanations.",
  "Self-supervised graph embedding on reviewer–product bipartite graphs, evaluated against a 6-month labeled subset.",
];
const SAMPLE_SOLUTIONS = [
  "A rubric-guided cohesion checker that scores alignment between problem, method, solution, and results before submission.",
  "A bedside dashboard surfacing top-3 risk drivers with a nurse-tunable threshold.",
  "A weakly supervised detector that flags reviewer clusters with anomalous co-purchase timing.",
];
const SAMPLE_LIT = [
  "Builds on Kellogg (2018) on argument scaffolding, and Graham & Perin (2007) on writing interventions.",
  "Extends Rajkomar et al. (2018) on EHR modeling and adds SHAP-based local explanations per Lundberg & Lee (2017).",
  "Draws on Akoglu et al. (2015) for anomaly detection in graphs and Hooi et al. (2016) on dense subgraph fraud.",
];
const SAMPLE_RESULTS = [
  "Pilot with 34 students reduced adviser revision rounds from 3.1 to 1.7 on average (p<0.05); qualitative feedback favored the section-level scores.",
  "Model AUROC 0.82 on held-out data; simulated triage would have caught 71% of readmissions within a 20% alert budget.",
  "Precision@50 of 0.88 vs. 0.61 baseline; identified 3 previously unreported fraud rings.",
];

function makeMockPaper(userId: string, filename: string, seed: number): Paper {
  const fileType: "pdf" | "md" = filename.toLowerCase().endsWith(".md")
    ? "md"
    : "pdf";
  const title = filename.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");

  const concepts: Record<ConceptKey, string> = {
    problem: pick(SAMPLE_PROBLEMS, seed),
    methodology: pick(SAMPLE_METHODS, seed),
    solution: pick(SAMPLE_SOLUTIONS, seed),
    literature: pick(SAMPLE_LIT, seed),
    result: pick(SAMPLE_RESULTS, seed + 1),
  };

  // Actual connections found in the paper.
  const connections: Connection[] = [
    {
      from: "problem",
      to: "methodology",
      kind: "actual",
      strength: 0.82,
      reason:
        "The methodology is scoped to the population and setting named in the problem statement.",
    },
    {
      from: "methodology",
      to: "solution",
      kind: "actual",
      strength: 0.74,
      reason:
        "The proposed solution is derived from findings surfaced by the described method.",
    },
    {
      from: "literature",
      to: "methodology",
      kind: "actual",
      strength: 0.66,
      reason:
        "Cited works justify the chosen instruments and analytic approach.",
    },
    {
      from: "solution",
      to: "result",
      kind: "actual",
      strength: 0.79,
      reason:
        "Results are reported against the mechanism the solution proposes.",
    },
    // A likely-missing edge, surfaced as theoretical.
    {
      from: "problem",
      to: "result",
      kind: "theoretical",
      strength: 0.4,
      reason:
        "Results should be interpreted back against the original problem framing, but the paper does not close this loop explicitly.",
    },
    ...(seed % 2 === 0
      ? [
          {
            from: "literature" as ConceptKey,
            to: "solution" as ConceptKey,
            kind: "theoretical" as const,
            strength: 0.35,
            reason:
              "Related work is not contrasted with the proposed solution — novelty claim is asserted, not shown.",
          },
        ]
      : []),
  ];

  const analysis: Analysis[] = [
    {
      concept: "problem",
      answers: ["methodology"],
      verdict: "cohesive",
      note: "The problem is operationalized by the method's population and measures.",
    },
    {
      concept: "methodology",
      answers: ["solution", "result"],
      verdict: "cohesive",
      note: "Method outputs feed both the design of the solution and the reported results.",
    },
    {
      concept: "solution",
      answers: ["result"],
      verdict: "partial",
      note: "Results validate the mechanism but do not report failure modes.",
    },
    {
      concept: "literature",
      answers: ["methodology"],
      verdict: "partial",
      note: "Cited works justify method choice; comparison to prior solutions is thin.",
    },
    {
      concept: "result",
      answers: [],
      verdict: "gap",
      note: "Results are not tied back to the original problem framing.",
    },
  ];

  const preview = [
    `# ${title}\n`,
    `\n## Abstract\nThis paper investigates ${concepts.problem.toLowerCase()}`,
    `\n\n## 1. Introduction\n${concepts.problem}`,
    `\n\n## 2. Related Work\n${concepts.literature}`,
    `\n\n## 3. Method\n${concepts.methodology}`,
    `\n\n## 4. Proposed Approach\n${concepts.solution}`,
    `\n\n## 5. Results\n${concepts.result}`,
    `\n\n## 6. Discussion\nWe discuss implications and limitations, and outline future work.`,
  ].join("");

  return {
    id: crypto.randomUUID(),
    userId,
    title: title.replace(/\b\w/g, (c) => c.toUpperCase()),
    filename,
    fileType,
    uploadedAt: new Date().toISOString(),
    pages: 8 + (seed % 6),
    concepts,
    connections,
    analysis,
    preview,
  };
}

// Simulate async upload+parse.
export async function uploadAndAnalyze(
  userId: string,
  file: File,
): Promise<Paper> {
  await new Promise((r) => setTimeout(r, 1200));
  const seed = Math.floor(Math.random() * 100);
  const paper = makeMockPaper(userId, file.name, seed);
  savePaper(paper);
  return paper;
}

// Seed a demo paper for a fresh account so the dashboard isn't empty.
export function seedDemoPaper(userId: string) {
  const paper = makeMockPaper(
    userId,
    "Cohesion-Checker-for-Undergrad-Research.pdf",
    0,
  );
  savePaper(paper);
  return paper;
}
