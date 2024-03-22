'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpComingWebinar() {

    const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
    },
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
    },
  ];

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">  
                    <h2 className='text-teal-600 font-semibold tracking-wide'>
                        UPCOMING WEBINARS
                    </h2>
                    <p className='mt-2 text-3xl font-extrabold tracking-tight
                       text-white sm:text-4xl'>Enhance Your Musical Journey
                    </p>
                </div>
                <div className="mt-10">
                    <HoverEffect items={featuredWebinars.map(item => (
                        {
                          title: item.title,
                          description: item.description,
                          link: `/webinars/${item.slug}`,
                        }
                      ))}
                    />
                </div>
                <div className='mt-20 text-center'>
                  <Link href={'/'} className='px-4 py-2 rounded border font-medium
                       border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100'>
                        View All Webinars
                  </Link>
                </div>
            </div>
        </div>
    )
}