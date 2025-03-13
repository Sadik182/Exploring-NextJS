import Image from "next/image";
import Team from "./team/page";



export default function Home() {
  return (
    <div>
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h1 className="text-4xl font-bold">Welcome to my Next App</h1>
            <p className="mt-4 text-lg">We porvide amazing solutions for your needs.</p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-gray-200">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
            src="/banner.png"
            alt="hero image"
            width={500}
            height={500}
            />
          </div>
        </div>
      </section>
      <Team />
    </div>
  );
}
