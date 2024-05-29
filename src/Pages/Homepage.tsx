import React from "react";
import CustomCard from "../Components/CustomCard";
// import { Article } from "../types"; // Import the Article type
// import ArticleCards from "./ArticleCards";
import RecentlyAdded from "../Components/RecientlyAdded";

interface Article {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  modified: string;
  excerpt: string;
  author: string;
  articleUrl: string;
  publishedDate: string;
  publisher: string;
  categories: string;
  tags: string;
  content: string;
}
interface HomepageProps {
  articles: Article[]; 
}

const Homepage: React.FC<HomepageProps> = ({ articles }) => {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="shadow mb-7 mt-10  rounded-lg">
        <h1 className="text-3xl text-white font-bold">TOP PICKS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={24} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={27} articles={articles} /> {/* Pass the correct types */}
      </div>
      <div className="shadow mb-7 mt-10 rounded-lg">
        <h1 className="text-3xl text-white font-bold">RECIENTLY ADDED</h1>
      </div>
      <RecentlyAdded articles={articles} />

      <section className="mt-14 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className=" p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
            <p>The Workplace Educational Placement Agreement (WEPA) Form has been replaced by the Post-secondary Student Unpaid Work Placement Workplace Insurance Claim Form. Placement Employers and Training Agencies facilitating programs are required to complete and sign this form in order to be eligible for WSIB coverage.</p>
          </div>
            <img src="/mock.png" alt="About Us" className="rounded-lg" />
          <div>
            <img src="/mock.png" alt="Write a Blog?" className="rounded-lg" />
          </div>
          <div className=" p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">WRITE A BLOG?</h2>
            <p>The Workplace Educational Placement Agreement (WEPA) Form has been replaced by the Post-secondary Student Unpaid Work Placement Workplace Insurance Claim Form. Placement Employers and Training Agencies facilitating programs are required to complete and sign this form in order to be eligible for WSIB coverage.</p>
          </div>
          <div className=" p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">WHAT TO GAIN?</h2>
            <p>The Workplace Educational Placement Agreement (WEPA) Form has been replaced by the Post-secondary Student Unpaid Work Placement Workplace Insurance Claim Form. Placement Employers and Training Agencies facilitating programs are required to complete and sign this form in order to be eligible for WSIB coverage.</p>
          </div>
          <div>
            <img src="/mock.png" alt="What to Gain?" className="rounded-lg" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
