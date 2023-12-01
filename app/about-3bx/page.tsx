import React from 'react'
import Nav from '../components/global/Nav'
import Link from 'next/link'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <>
      <Nav />
      <p className='mt-16'>AboutPage</p>
      <section className="flex flex-col lg:flex-row items-center lg:items-start mt-6 ml-4 lg:ml-16  w-[90%]">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-2xl lg:text-5xl font-bold py-2 mb-4 text-highlight">The 3BX Vision</h2>
          <p className="mb-4">3BX was founded by William Thompson and Tapasya
              Cheulkar with one vision: to achieve independence
              for independents. 3BX, or Books Beats Box, was built
              from the ground up by a bold team of indie creators
              who were sick and tired of living the {'"'}starving
              artist{'"'} trope, united by a vision of
              democratizing the indie artist presence online. Our
              goal is to make 3BX artists connected, successful,
              and in control of their work.
            </p>
            <Link 
              href="https://blog.booksbeatsbox.com/3bxcorporate/what-is-books-beats-box-3bx-newsroom/" 
              className="font-bold lg:text-lg xl:text-2xl underline hover:text-orangeheaders">
              What is Independence for Independents?
            </Link>
        </div>
        <div className="lg:w-1/2 text-center mt-8 lg:mt-0">
          <Image
            src={"/Will-Headshot-2.png"}
            width={850}
            height={850}
            alt="Will Headshot"
          />
        </div>
      </section>
      <section>
      <div className="lg:mx-36 flex flex-col lg:flex-row items-center justify-center lg:space-x-12 py-12 sm:pb-12 lg:py-12">
                    <Image
                        //rotate the image upside down and flip it horizontally
                        className="transform rotate-180 scale-x-[-1] hidden md:block"
                        src="/quote.png"
                        width={250}
                        height={100}
                        alt="Quote Illustration"
                    />
                    <div className="space-y-8 text-center lg:text-right">
                        <h2 className="font-bold py-4 text-3xl lg:text-4xl xl:text-5xl drop-shadow-md">
                            Creating Independence for Independents
                        </h2>
                        <p className=" text-lg lg:text-xl xl:text-2xl ">
                            This is the place to build with like minded
                            individuals and further your unique style as an
                            INDIE creative. Respond to your calling by making
                            your passion your day Job
                        </p>
                    </div>
                </div>
      </section>

    </>
  )
}

export default AboutPage