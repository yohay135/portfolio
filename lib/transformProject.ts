import type { RawProjectInput, Project, ProjectCategory } from "@/types";

function slugify(text: string): string {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function toTitleCase(text: string): string {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
}

function sentenceCase(text: string): string {
  const t = text.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function parseTechnologies(raw: string): string[] {
  return raw
    .split(/[,;\n]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0)
    .map((t) => (t === t.toUpperCase() && t.length <= 6 ? t : toTitleCase(t)));
}

function toShortDescription(summary: string): string {
  const clean = summary.trim();
  if (clean.length <= 120) return clean;
  const cut = clean.slice(0, 120);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

function parseBulletPoints(achievementsText: string): string[] {
  const ACTION_VERBS = [
    "Built", "Developed", "Designed", "Implemented", "Created",
    "Engineered", "Optimized", "Automated", "Reduced", "Improved",
    "Delivered", "Analyzed", "Integrated", "Deployed", "Streamlined",
  ] as const;

  const lines = achievementsText
    .split(/[\n•\-*]+/)
    .map((l) => l.trim())
    .filter((l) => l.length > 8);

  return lines.slice(0, 5).map((line, i) => {
    const clean = sentenceCase(line);
    const startsWithVerb = ACTION_VERBS.some((v) =>
      clean.toLowerCase().startsWith(v.toLowerCase())
    );
    if (startsWithVerb) return clean;
    const verb = ACTION_VERBS[i % ACTION_VERBS.length];
    return `${verb} ${clean.charAt(0).toLowerCase() + clean.slice(1)}`;
  });
}

function buildFullDescription(raw: RawProjectInput): string {
  const parts: string[] = [];
  if (raw.problemItSolves?.trim()) parts.push(`Problem: ${raw.problemItSolves.trim()}`);
  if (raw.whatIBuilt?.trim()) parts.push(`Solution: ${raw.whatIBuilt.trim()}`);
  if (raw.futurePlans?.trim()) parts.push(`Future Plans: ${raw.futurePlans.trim()}`);
  return parts.join("\n\n");
}

export function transformProject(raw: RawProjectInput): Project {
  return {
    id: slugify(raw.projectName),
    title: toTitleCase(raw.projectName.trim()),
    shortDescription: toShortDescription(raw.summary),
    fullDescription: buildFullDescription(raw),
    bulletPoints: parseBulletPoints(raw.keyAchievements),
    technologies: parseTechnologies(raw.technologies),
    category: raw.category ?? "past",
    featured: raw.featured ?? false,
    githubUrl: raw.githubLink?.trim() || undefined,
    liveUrl: undefined,
  };
}
