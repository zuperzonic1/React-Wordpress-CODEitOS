import CustomCard from "../Components/CustomCard";
import RecentlyAdded from "../Components/RecientlyAdded";
import { Article } from '../Components/types';

const Homepage = ({ articles }: { articles: Article[] }) => {
  return (
    <main className="p-4 m-4 mx-auto max-w-7xl bg-gray-900 bg-opacity-60 text-white rounded-lg mt-14" >
      <header className="py-4">
        <h1 className="text-4xl font-bold">TOP PICKS</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CustomCard articleId={77} articles={articles} />
        <CustomCard articleId={64} articles={articles} />
        <CustomCard articleId={52} articles={articles} />
        <CustomCard articleId={27} articles={articles} />
      </div>
      <div className="shadow mb-7 mt-10 rounded-lg">
        <h1 className="text-3xl text-white font-bold">RECENTLY ADDED</h1>
      </div>
      <RecentlyAdded articles={articles} />

      <section className="mt-14 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
          <div className="p-8 rounded-lg text-white mt-4">
            <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
            <p>Welcome to Codeitos! We're a passionate group of friends united by our love for technology and programming. At Codeitos, we dive into coding tutorials, tech tips, and the latest in the tech world. Our mission is to create a community where tech enthusiasts can learn, share, and grow together. Whether you're a seasoned developer or just starting out, you'll find valuable resources and friendly faces here. Join us on this exciting journey of discovery and innovation.</p>
          </div>
          <img src="/mock.png" alt="About Us" className="rounded-lg mb-5 w-full object-cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
          <div className="p-8 rounded-lg text-white mt-4">
            <h2 className="text-2xl font-bold mb-4">WRITE A BLOG?</h2>
            <p>Do you love sharing your knowledge and insights about programming and technology? At Codeitos, we welcome contributions from tech enthusiasts like you! We're looking for bloggers to join our community and share tutorials, tips, and experiences. While we don't offer monetary compensation, writing for us is a fantastic way to help others, enhance your writing skills, and be part of a vibrant tech community. Interested? Reach out to us and start contributing today!</p>
          </div>
          <img src="/mock4.png" alt="Write a Blog" className="rounded-lg mb-5 w-full object-cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
          <div className="p-8 rounded-lg text-white mt-4">
            <h2 className="text-2xl font-bold mb-4">WHAT TO GAIN!</h2>
            <p>Joining Codeitos offers you the chance to connect with fellow tech enthusiasts, stay updated on the latest trends, and hone your programming skills. By contributing blogs, you'll gain visibility in the tech community, improve your writing, and build a portfolio that showcases your expertise. Plus, you'll be helping others on their tech journey. It's a win-win for everyone involved. Join us today and start making a difference!</p>
          </div>
          <img src="/mock3.png" alt="What to Gain" className="rounded-lg mb-5 w-full object-cover" />
        </div>
      </section>

      <section className="text-white text-center p-4 py-10">
    <h2 className="text-2xl font-bold mb-4">GET IN TOUCH!</h2>
    <p>We'd love to hear from you! Whether you have questions, suggestions, or just want to say hi, feel free to reach out. Join our community, contribute your ideas, and help us make Codeitos even better. Connect with us at <a href="mailto:Micheal@mfelobes.ca" className="text-Orange">Micheal@mfelobes.ca</a>. Let's build something amazing together!</p>
</section>

    </main>
  );
};

export default Homepage;
