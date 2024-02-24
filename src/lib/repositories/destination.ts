import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { DestinationDetailItem } from "../types/destination-detail-item";
import { DestinationItem } from "../types/destination-item";

const directoryContents = path.join(process.cwd(), "src", "contents");

// helper
const readMatterDataByFilename = (filename: string) => {
  const fileStr = readFileSync(path.join(directoryContents, filename), "utf-8");
  return matter(fileStr);
};
// end: helper

// fungsi untuk membaca detail destinasi berdasarkan slug, digunakan pada halaman detail secara ssr
const readDestinationDetailBySlug = (
  slug: string
): DestinationDetailItem | undefined => {
  const filePath = path.join(directoryContents, slug + ".mdx");

  if (fs.existsSync(filePath)) {
    const { data, content } = readMatterDataByFilename(slug + ".mdx");
    const { name, description, category } = data;

    return {
      name,
      description,
      slug,
      category: (category as string).toLowerCase(),
      content,
    } as DestinationDetailItem;
  }

  return undefined;
};

// fungsi untuk membaca daftar seluruh destinasi, tidak dengan konten, digunakan pada home page dengan ssr
const readAllDestinations = (): Array<DestinationItem> => {
  const contents = fs.readdirSync(directoryContents);

  const result = contents.map((filename) => {
    const matterData = readMatterDataByFilename(filename);
    const { name, description, category } = matterData.data;

    return {
      name,
      description,
      category: (category as string).toLowerCase(),
      slug: filename.replace(/\.mdx?$/, ""),
    } as DestinationItem;
  });

  return result;
};

export const DestinationRepository = {
  readAllDestinations,
  readDestinationDetailBySlug,
};
