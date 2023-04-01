import Head from "next/head";
import Link from "next/link";
import ConnectButton from "@/app/components/ConnectButton";
import NextLink from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from "@/app/components/Common/Header";
import Footer from "@/app/components/Common/Footer";

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
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Creader</h1>
        <p className="text-xl mb-4">
          A decentralized platform for publishing and protecting your literary
          works
        </p>
        <ConnectButton></ConnectButton>
      </div>
      <main className="w-3/4 mx-auto">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-8">
          <div className="bg-gray-100 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4">For Authors</h2>
            <p>
              Create, manage, and protect your literary works using blockchain
              technology. Get rewarded for your creative efforts and maintain
              full control over your work.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded">
            <h2 className="text-2xl font-bold mb-4">For Readers</h2>
            <p>
              Discover unique and engaging content created by talented authors.
              Support your favorite creators and enjoy a seamless reading
              experience on our platform.
            </p>
          </div>
        </div>
        {/* Feature Highlights */}
        <div className="py-16 px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white p-6 rounded mb-4">
                Icon
              </div>
              <h3 className="text-xl font-bold mb-2">Copyright Protection</h3>
              <p>
                Secure your work with blockchain-based copyright protection and
                NFTs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white p-6 rounded mb-4">
                Icon
              </div>
              <h3 className="text-xl font-bold mb-2">Revenue Sharing</h3>
              <p>
                Earn a fair share of revenue from your work through our token
                system.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white p-6 rounded mb-4">
                Icon
              </div>
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p>
                Connect with readers and other authors in a decentralized
                community.
              </p>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="bg-gray-100 py-16 px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded">
              <p className="italic mb-4">
                "Creader has revolutionized the way I publish and protect my
                work. I have full control over my content and receive fair
                compensation."
              </p>
              <p className="font-bold">- Author Name</p>
            </div>
            <div className="p-8 bg-white rounded">
              <p className="italic mb-4">
                "I love discovering new authors and supporting their work on
                Creader. The platform offers a great reading experience and a
                strong sense of community."
              </p>
              <p className="font-bold">- Reader Name</p>
            </div>
          </div>
        </div>
        {/* Popular Works */}
        <div className="py-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Works</h2>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            stopOnHover={true}
            swipeable={true}
            dynamicHeight={false}
            emulateTouch={false}
          >
            {/* Replace with actual popular works data */}
            {Array.from({ length: 6 }).map((_, i) => (
              <figure
                className="p-4 bg-gray-100 rounded shadow flex flex-col md:flex-row text-center"
                key={i}
              >
                <div className="bg-gray-300 rounded-none w-full md:w-1/2 h-40 md:h-auto mb-4 md:mb-0">
                  ss
                </div>
                <div className="md:ml-4 text-center md:text-left space-y-2 flex-1">
                  <h3 className="text-xl font-bold mb-2">Book Title {i + 1}</h3>
                  <p className="text-sm">Rating: 4.5/5</p>
                  <p className="m-0 text-slate-700 dark:text-slate-500">
                    Fiction
                  </p>
                  <blockquote>
                    <p className="text-lg font-medium">
                      Short description of the book goes here. This is just a
                      placeholder text.
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                      Sarah Dayan
                    </div>
                  </figcaption>
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    <NextLink href="/bookdetail">View Work</NextLink>
                  </button>
                </div>
              </figure>
            ))}
          </Carousel>
        </div>
        {/* Get Started */}
        <div className="text-center py-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-500">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6  mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-1/3 flex-auto mr-5 rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
