import { readFileSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";

type Props = {
  params: { slug: string };
};

export default async function Page(props: Props) {
  const dirContents = path.join(
    process.cwd(),
    "src",
    "app",
    "test2",
    "contents"
  );
  const filename = props.params.slug + ".mdx";
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

  return (
    <>
      <div className="pt-16">
        <p>Hehehe</p>
        <p>title: {frontmatter.title as string}</p>
        <p>desc: {frontmatter.desc as string}</p>

        {/* content */}
        <div className="prose">{content}</div>

        {/* comment, etc */}
        <p>Comment section</p>
      </div>
    </>
  );
}
