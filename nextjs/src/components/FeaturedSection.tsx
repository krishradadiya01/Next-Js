'use client';

import Link from 'next/link';
import CourseData from '../data/music_course_data.json';
import { BackgroundGradient } from './ui/background-gradient';

interface musicCourse {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

export default function FeaturedSection() {
    const featuredCourses = CourseData.courses.filter((course: musicCourse) => course.isFeatured)

    return (
       <div className='py-12 bg-gray-900'>
        <div>
            <div className='text-center'>
                <h2 className='text-teal-600 font-semibold tracking-wide'>
                    FEATURED COURSES
                </h2>
                <p className='mt-2 text-3xl font-extrabold tracking-tight
                   text-white sm:text-4xl'>Learn With the Best
                </p>
            </div>
        </div>
        <div className='mt-10 sm:px-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                 gap-8 justify-center'>
                {featuredCourses.map((item: musicCourse) => (
                   <div key={item.id} className='flex justify-center'>
                    <BackgroundGradient className='flex flex-col rounded-[22px] bg-white
                      dark:bg-zinc-900 h-full max-w-sm'>
                      <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                        <p className='text-lg sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200'>{item.title}</p>
                        <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{item.description}</p>
                        <Link className='mt-5 px-3 py-1 rounded border border-neutral-600 text-neutral-700 bg-white
                              hover:bg-gray-100' href={`/courses/${item.slug}`}>
                              Learn More
                        </Link>
                      </div>
                    </BackgroundGradient>
                   </div>
                ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
          <Link href={'/courses'} className='px-4 py-2 rounded border font-medium
               border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100'>
               View All Courses
          </Link>
        </div>
       </div>
    )
}