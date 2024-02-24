import { readFileSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";
import { serialize } from 'next-mdx-remote/serialize';

export interface MDXContent {
  title: string;
  desc: string;
  slug: string;
}


export async function getMDXContent(slug: string, dirContents: string) {
  // const dirContents = path.join(process.cwd(), path);
  const filename = `${slug}.mdx`;
  const sourceStr = readFileSync(path.join(dirContents, filename), "utf-8");

  const { content, frontmatter } = await compileMDX({
    source: sourceStr,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return { content, frontmatter };
}
