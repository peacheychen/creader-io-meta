import Head from "next/head";
import Link from "next/link";
import ConnectButton from "@/app/components/ConnectButton";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// import the facebook icon

export default function Home() {
  return (
    <>
      <Head>
        <title>Creader | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-blue-500 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">
            Decentralized Publishing
          </h1>
          <div className="flex space-x-4">
            <ConnectButton></ConnectButton>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero text-center py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Decentralized Publishing Platform
          </h1>
          <p className="text-lg mb-6">
            Support your favorite authors and discover amazing stories.
          </p>
          <Link
            className="bg-white text-blue-500 px-6 py-2 rounded font-semibold"
            href="/discover"
          >
            Discover Now
          </Link>
        </section>

        <section className="about py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg">
              Our platform empowers authors and readers by leveraging blockchain
              technology for copyright protection, transparent revenue sharing,
              and decentralized content distribution.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-blue-500 py-4 text-center text-white">
        <p>&copy; Creader.io 2023</p>
      </footer>
    </>
  );
}
