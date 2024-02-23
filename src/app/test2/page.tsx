import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import path from "path";

export default async function Test2Page() {
  const dirContents = path.join(
    process.cwd(),
    "src",
    "app",
    "test2",
    "contents"
  );

  const contents = fs.readdirSync(dirContents);
  const data: Array<{ title: string; desc: string; slug: string }> = [];

  for (let a = 0; a < contents.length; a++) {
    const content = contents[a];

    const sourceStr = fs.readFileSync(path.join(dirContents, content), "utf-8");
    const sourceMdx = await serialize(sourceStr, {
      parseFrontmatter: true,
    });

    data.push({
      title: sourceMdx.frontmatter.title as string,
      desc: sourceMdx.frontmatter.desc as string,
      slug: content.replaceAll(".mdx", ""),
    });
  }

  return (
    <>
      <div className="pt-16">
        <p>Test 2 Page (MXD Remote)</p>

        <div className="grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <Card key={"card-item-" + index}>
              <CardHeader>
                <CardTitle>Title: {item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={"/test2/" + item.slug}>
                  <Button>Read more</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
