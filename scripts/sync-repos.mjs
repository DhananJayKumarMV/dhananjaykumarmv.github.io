#!/usr/bin/env node
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const GITHUB_USERNAME = "DhananJayKumarMV";
const OUTPUT_PATH = fileURLToPath(new URL("../src/data/repos.json", import.meta.url));

// Repos to never show on the portfolio, regardless of description/activity
const EXCLUDED_REPOS = new Set([
  "Customer_Segmentation",
  "Customized-Resume-Generator",
  "cursor-boston-sports-hack-dhananjaykumarmv",
]);

const prettifyName = (name) =>
  name.replace(/[-_]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

async function fetchAllRepos() {
  const repos = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&page=${page}`,
      { headers: { Accept: "application/vnd.github+json" } }
    );

    if (!res.ok) {
      throw new Error(`GitHub API request failed: ${res.status} ${res.statusText}`);
    }

    const batch = await res.json();
    repos.push(...batch);

    if (batch.length < 100) break;
    page += 1;
  }

  return repos;
}

async function main() {
  const repos = await fetchAllRepos();

  const projects = repos
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.name.includes(".github.io") &&
        repo.name !== GITHUB_USERNAME &&
        !EXCLUDED_REPOS.has(repo.name)
    )
    .sort(
      (a, b) =>
        b.stargazers_count - a.stargazers_count ||
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .map((repo) => ({
      title: prettifyName(repo.name),
      description:
        repo.description || "GitHub repository with source code and documentation",
      metrics: `${repo.stargazers_count} stars • ${repo.forks_count} forks • Updated ${new Date(
        repo.updated_at
      ).toLocaleDateString()}`,
      tags: [...(repo.language ? [repo.language] : []), ...repo.topics.slice(0, 4)].filter(
        Boolean
      ),
      github: repo.html_url,
    }));

  await writeFile(OUTPUT_PATH, `${JSON.stringify(projects, null, 2)}\n`);
  console.log(`Wrote ${projects.length} repos to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
