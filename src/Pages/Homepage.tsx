import CustomCard from "../Components/CustomCard";
import RecentlyAdded from "../Components/RecientlyAdded";
import { Article } from '../Components/types';

const Homepage = ({ articles }: { articles: Article[] }) => {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="shadow mb-7 mt-10  rounded-lg">
        <h1 className="text-3xl text-white font-bold">TOP PICKS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={24} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={41} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={27} articles={articles} /> {/* Pass the correct types */}
      </div>
      <div className="shadow mb-7 mt-10 rounded-lg">
        <h1 className="text-3xl text-white font-bold">RECIENTLY ADDED</h1>
      </div>
      <RecentlyAdded articles={articles} />

      <section className="mt-14 py-5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
        <div className="p-8 rounded-lg text-white mt-4">
            <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
            <p>Welcome to Codeitos! We're a passionate group of friends united by our love for technology and programming. At Codeitos, we dive into coding tutorials, tech tips, and the latest in the tech world. Our mission is to create a community where tech enthusiasts can learn, share, and grow together. Whether you're a seasoned developer or just starting out, you'll find valuable resources and friendly faces here. Join us on this exciting journey of discovery and innovation.</p>
        </div>
        <img src="/mock.png" alt="About Us" className="rounded-lg mb-5" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
        <div className="p-8 rounded-lg text-white mt-4">
            <h2 className="text-2xl font-bold mb-4">WRITE A BLOG?</h2>
            <p>Do you love sharing your knowledge and insights about programming and technology? At Codeitos, we welcome contributions from tech enthusiasts like you! We're looking for bloggers to join our community and share tutorials, tips, and experiences. While we don't offer monetary compensation, writing for us is a fantastic way to help others, enhance your writing skills, and be part of a vibrant tech community. Interested? Reach out to us and start contributing today!</p>
        </div>
        <img src="/mock4.png" alt="Write a Blog" className="rounded-lg mb-5" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
        <div className="p-8 rounded-lg text-white mt-4">
            <h2 className="text-2xl font-bold mb-4">WHAT TO GAIN!</h2>
            <p>Joining Codeitos offers you the chance to connect with fellow tech enthusiasts, stay updated on the latest trends, and hone your programming skills. By contributing blogs, you'll gain visibility in the tech community, improve your writing, and build a portfolio that showcases your expertise. Plus, you'll be helping others on their tech journey. It's a win-win for everyone involved. Join us today and start making a difference!</p>
        </div>
        <img src="/mock3.png" alt="What to Gain" className="rounded-lg mb-5" />
    </div>
</section>
    </main>
  );
};

export default Homepage;
