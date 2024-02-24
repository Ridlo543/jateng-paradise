import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckCheck, Star } from "lucide-react";

export default function ReviewsSection() {
  const sampleRating = 4.9;
  const sampleReviewsCount = 1234;

  return (
    <>
      <section>
        {/* rating */}
        <div className="flex items-end gap-2">
          <p className="text-3xl font-bold text-foreground">
            {Intl.NumberFormat(undefined, {
              minimumSignificantDigits: 2,
            }).format(sampleRating)}
          </p>
          <p className="text-muted-foreground">
            {Intl.NumberFormat().format(sampleReviewsCount)} reviews
          </p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={"star-item-" + index}
              className={cn(
                "text-muted-foreground",
                index < Math.floor(sampleRating) && "text-amber-500"
              )}
            />
          ))}
        </div>

        {/* leave a review */}
        <div className="mt-4">
          <p className="text-2xl font-semibold">Leave a review</p>
          <p className="text-muted-foreground mt-1">
            Help others recognize this place with your reviews
          </p>
          <Textarea
            placeholder="Write a review..."
            className="resize-none min-h-32 mt-4"
          />
          <div className="flex justify-end mt-4">
            <Button>
              <CheckCheck className="w-4 h-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>

        {/* comments */}
        <div className="mt-8 grid grid-cols-1 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={"review-item-" + index} className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                {/* rating bar */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, index2) => (
                    <Star
                      key={"star-item-" + index2}
                      className={cn(
                        "text-muted-foreground w-4 h-4",
                        index2 < (index % 5) + 1 && "text-amber-500"
                      )}
                    />
                  ))}
                </div>

                {/* name */}
                <p className="text-sm font-semibold mt-2">Rizal Dwi Anggoro</p>

                {/* date */}
                <p className="text-xs text-muted-foreground">
                  {Intl.DateTimeFormat(undefined, {
                    weekday: "short",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date().getTime())}
                </p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">
                  Review title {index}
                </p>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium consequatur dolor non repellendus, cum, quod in
                  officia ad doloribus neque provident, obcaecati facere. Eaque
                  harum in nemo! Omnis, eum corrupti! {index}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
