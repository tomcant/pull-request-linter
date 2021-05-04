import { getInput, setFailed } from "@actions/core";
import { context } from "@actions/github";
import { lintBodyLength, lintBodyMustNotContain } from "./lint/body";
import { lintMustHaveReleaseCategory } from "./lint/labels";
import { getReleaseCategories } from "./release-drafter";

async function run(): Promise<void> {
  const pr = context.payload.pull_request;

  if (pr === undefined) {
    return;
  }

  try {
    if (pr.body !== undefined) {
      const minBodyLength = parseInt(getInput("minBodyLength"));
      if (minBodyLength > 0) lintBodyLength(pr.body, minBodyLength);

      const bodyMustNotContain = getInput("bodyMustNotContain");
      if (bodyMustNotContain.length > 0) lintBodyMustNotContain(pr.body, bodyMustNotContain);

      if (getInput("mustHaveReleaseCategory")) {
        const repoPath = process.env.GITHUB_WORKSPACE as string;
        const labels = pr.labels.map((l: { name: string }) => l.name);
        lintMustHaveReleaseCategory(labels, getReleaseCategories(repoPath));
      }
    }
  } catch (error) {
    setFailed(error.message);
  }
}

run();
