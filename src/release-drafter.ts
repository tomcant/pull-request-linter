import { readFileSync } from "fs";
import yaml from "js-yaml";

type ReleaseDrafterConfig = {
  categories: { labels: string[] }[];
};

const loadReleaseDrafterConfig = (repoPath: string): ReleaseDrafterConfig => {
  const ymlPath = repoPath + "/.github/release-drafter.yml";
  return yaml.load(readFileSync(ymlPath, "utf8")) as ReleaseDrafterConfig;
};

export const getReleaseCategories = (repoPath: string): string[] => {
  const config = loadReleaseDrafterConfig(repoPath);
  return config.categories.flatMap(({ labels }) => labels);
};
