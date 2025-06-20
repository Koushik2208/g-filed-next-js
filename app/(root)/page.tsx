import ImageCard from "@/components/ImageCard";
import { cards } from "@/lib/dummyDB";
import React from "react";

const Page = () => {
  return (
    <section className="min-h-screen px-6 py-10">
      {/* <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Browse Categories
      </h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((category) => (
          <ImageCard
            key={category.title}
            title={category.title}
            department={category.department}
            image={category.imgSrc || "https://placehold.co/400x400.png"}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
