import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export function UpcomingWebinars() {
  return (
    
    <div className="py-12 bg-gray-950">
    <div>
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED WEBINARS
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance your musical journey
        </p>
      </div>
    </div>
    <div className="mt-10">
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect 
        items={featuredWebinars.map((webinar) => (
          {
            title: webinar.title,
            description: webinar.description,
            link: webinar.link,
            isFeatured: webinar.isFeatured
          }
        ))} className={undefined} />
    </div>
    </div>
    <div className="mt-20 text-center">
      <Link
        href={"/courses"}
        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-700 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 hover:from-gray-600 hover:to-blue-500"
      >
        View more webinars
      </Link>
    </div>
  </div>
  );
}

export const featuredWebinars = [
  {
    title: "Harmony Webinars",
    description:
      "An interactive webinar series designed to deepen your understanding of music theory, composition, and arrangement.",
    link: "https://harmonywebinars.com",
    isFeatured: true,
  },
  {
    title: "Rhythm Masters",
    description:
      "A live webinar platform offering masterclasses from top drummers and percussionists worldwide.",
    link: "https://rhythmmasters.com",
    isFeatured: false,
  },
  {
    title: "Vocal Virtuoso",
    description:
      "An online vocal training webinar series that helps singers improve technique, range, and stage presence.",
    link: "https://vocalvirtuoso.com",
    isFeatured: true,
  },
  {
    title: "Melody Makers",
    description:
      "A series of music webinars focused on songwriting, melody structuring, and lyrical storytelling.",
    link: "https://melodymakers.com",
    isFeatured: false,
  },
  {
    title: "Orchestral Insights",
    description:
      "A deep dive into orchestration and arrangement through expert-led music webinars.",
    link: "https://orchestralinsights.com",
    isFeatured: true,
  },
  {
    title: "Jazz Improv Sessions",
    description:
      "Live interactive webinars that teach jazz improvisation techniques from seasoned musicians.",
    link: "https://jazzimprovsessions.com",
    isFeatured: false,
  },
];
