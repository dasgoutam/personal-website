import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert date to string (YYYY-MM-DD) if it's a Date object
    let ObsidianDate = data.date;
    if (typeof ObsidianDate != "string") {
        ObsidianDate = ObsidianDate.toISOString().split("T")[0];
    }
    data.date = ObsidianDate;

    return {
        slug: realSlug,
        metadata: data,
        content,
    };
}

export function getAllPosts() {
    const slugs = getPostSlugs();
  
    return slugs
      .map((slug) => getPostBySlug(slug))
      .sort((a, b) =>
        new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
      );
  }