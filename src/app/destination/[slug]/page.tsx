import { getMDXContent } from "@/lib/utils/mdxUtils";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const { slug } = params;
  const { content, frontmatter } = await getMDXContent(
    slug,
    "src/contents"
  );

  return (
    <>
      <div className="pt-16">
        <p>title: {frontmatter.title as string}</p>
        <p>desc: {frontmatter.desc as string}</p>
        <div className="prose">{content}</div>
        <p>Comment section</p>
      </div>
    </>
  );
}
