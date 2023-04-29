import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Hero from '@/app/components/Home/Hero'
import AboutSection from '@/app/components/Home/AboutSection'
import GenericLayout from '@/app/layout/GenericLayout'
import HomeFeature from '@/app/components/Home/HomeFeature'
import Testimonials from '@/app/components/Home/Testimonials'
import EmailSubscription from '@/app/components/Home/EmailSubscription'
import PopularWork from '@/app/components/Home/PopularWork'

// import the facebook icon

export default function Home() {
    return (
        <>
            <Head>
                <title>Creader | Home</title>
                <meta name="deScription" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GenericLayout>
                <Hero />
                <main className="w-3/4 mx-auto">
                    {/* About Section */}
                    <AboutSection />
                    {/* Feature Highlights */}
                    <HomeFeature />
                    {/* Testimonials */}
                    <Testimonials />
                    {/* Popular Works */}
                    <PopularWork />
                    {/* Get Started */}
                    <EmailSubscription />
                </main>
            </GenericLayout>
        </>
    )
}
