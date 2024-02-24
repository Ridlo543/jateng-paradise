// List Content
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSinglePage } from "@/lib/repositories/contentParser";

import Link from "next/link";

export default async function ListContent() {
  const data = getSinglePage("/");

  return (
    <div className="container max-w-5xl pt-16">
      <div className="grid grid-cols-1 gap-4">
        {data.map((item, index) => (
          <div key={"card-item-" + index} className="flex justify-center items-center">
            {/* placeholder image */}
            <div className=" w-1/2 h-[66vh] bg-gray-200 rounded-lg"></div>
            <div className="flex-1 ml-4">
              <Card>
                <CardHeader>
                  <CardTitle>{item.frontmatter.title}</CardTitle>
                  <CardDescription>{item.frontmatter.desc}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={"/destination/" + item.slug}>
                    <Button>Read more</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
