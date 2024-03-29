"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Web Development Fundamentals",
      description:
        "Dive deep into the fundamentals of web development and enhance your coding skills.",
      slug: "understanding-web-development-fundamentals",
      isFeatured: true,
    },
    {
      title: "The Art of Web Design",
      description:
        "Learn the craft of web design from experienced designers and developers.",
      slug: "the-art-of-web-design",
      isFeatured: true,
    },
    {
      title: "Mastering Full-Stack Development",
      description:
        "Advanced techniques to master both front-end and back-end development.",
      slug: "mastering-full-stack-development",
      isFeatured: true,
    },
    {
      title: "Web Development Essentials",
      description:
        "Get started with web development with this comprehensive overview.",
      slug: "web-development-essentials",
      isFeatured: true,
    },
    {
      title: "Advanced Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "advanced-live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Marketing for Web Developers",
      description:
        "Learn how to promote your web projects effectively in the digital age.",
      slug: "digital-marketing-for-web-developers",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Development Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
