import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentPath = "src/contents";

// Helper untuk membaca file
const readFile = (filePath: string) => {
  return fs.readFileSync(filePath, "utf-8");
};

// Helper untuk mengubah frontmatter menjadi object
const parseFrontmatter = (frontmatter: any) => {
  const frontmatterString = JSON.stringify(frontmatter);
  return JSON.parse(frontmatterString);
};

// Helper untuk mendapatkan list page
export const getListPage = (filePath: string) => {
  const pageDataPath = path.join(contentPath, filePath);

  if (!fs.existsSync(pageDataPath)) {
    throw new Error("Page not found");
  }

  const pageData = readFile(pageDataPath);
  const { content, data: frontmatter } = matter(pageData);

  return {
    frontmatter: parseFrontmatter(frontmatter),
    content,
  };
};

// Helper untuk mendapatkan single page
export const getSinglePage = (folder: string) => {
  const folderPath = path.join(contentPath, folder);

  if (!fs.existsSync(folderPath) || !fs.lstatSync(folderPath).isDirectory()) {
    throw new Error("Folder not found");
  }

  const filesPath = fs.readdirSync(folderPath);

  const sanitizeFiles = filesPath.filter(
    (file) => file.endsWith(".md") || file.endsWith(".mdx")
  );
  const filterSingleFiles = sanitizeFiles.filter(
    (file) => !file.startsWith("_")
  );

  let singlePages = filterSingleFiles.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const filePath = path.join(folderPath, filename);
    const pageData = readFile(filePath);
    const { content, data: frontmatter } = matter(pageData);
    const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;

    return {
      frontmatter: parseFrontmatter(frontmatter),
      slug: url,
      content,
    };
  });

  const publishedPages = singlePages.filter((page) => !page.frontmatter.draft);

  const sortedPages = publishedPages.sort((a, b) => {
    const titleA = a.frontmatter.name.toUpperCase();
    const titleB = b.frontmatter.name.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }

    return 0;
  });

  return sortedPages;
};
