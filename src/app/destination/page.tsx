import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSinglePage } from "@/lib/utils/contentParser";

import Link from "next/link";

export default async function Test2Page() {
  const data = getSinglePage("/");

  return (
    <>
      <div className="pt-16">
        <p>Test 2 Page (MDX Content)</p>
        <div className="grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <Card key={"card-item-" + index}>
              <CardHeader>
                <CardTitle>Title: {item.frontmatter.title}</CardTitle>
                <CardDescription>{item.frontmatter.desc}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={"/destination/" + item.slug}>
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
