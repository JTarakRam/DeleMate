import { cn } from "@/lib/utlis";
import { Marquee } from "@/components/magicui/marquee"; // Assuming magicui/marquee is a custom component

const reviews = [
  {
    name: "Gopiichand Narasingh",
    username: "@Gopiichand Narasingh",
    body: "Great app! Delemate offers affordable and reliable parcel delivery. I used it once and had a smooth, hassle-free experience. Highly recommended for budget-friendly deliveries.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Venkatesh Nakka",
    username: "@Venkatesh Nakka",
    body: "My friend told me about this app and at first I didn't believe it but today I earned 200 rupees while coming to my room from Lb nagar to Kondapur. I saved all my travel expenses and also left with 89 rupees. Really useful if you are a student and someone who wants to earn money while you are travelling.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Sahdev Markam001",
    username: "@Sahdev Markam001",
    body: "This is a very good idea, I hope its services spread all over India. But right now it has very few features, and the performance is fine. Best of luck 👍👍",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Nasmil",
    username: "@Nasmil",
    body: "loved the concept of this app, please expand your service all over india ASAP.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Bunny David",
    username: "@Bunny David",
    body: "What an incredibly clever and timely idea! This app tackles the often-overlooked challenge of affordable parcel delivery.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Dum My",
    username: "@Dum My",
    body: "Great app man I have used it once and this is the app i have been looking for as it gives you a really affordable price for your parcel.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // Light theme styles: white background, subtle border, shadow, and hover effect
        "bg-white border-gray-200 shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.01]",
        // Dark theme styles (retained for dark mode compatibility)
        "dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={img || "/placeholder.svg"}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-600 dark:text-white/70">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-700 dark:text-white">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="mb-8  text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
            What Our Users Say
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear directly from our satisfied users about their experience with
            our product. Their words speak volumes about our commitment to
            quality and innovation.
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}
