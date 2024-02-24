import { DestinationRepository } from "@/lib/repositories/destination";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import ReviewsSection from "./reviews";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const destinationDetail = DestinationRepository.readDestinationDetailBySlug(
    params.slug
  );

  return (
    <>
      <div className="pt-16 mx-auto max-w-[768px] px-4">
        <p className="text-3xl font-semibold">{destinationDetail?.name}</p>
        <p>{destinationDetail?.description}</p>
        <div className="prose">
          <MDXRemote
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
            source={destinationDetail?.content ?? "Tidak ada konten"}
          />
        </div>

        <hr className="my-4" />

        <ReviewsSection />

        <div className="h-8"></div>
      </div>
    </>
  );
}
