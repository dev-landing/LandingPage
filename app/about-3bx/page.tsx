import React from 'react'
import Nav from '../components/global/Nav'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/global/Footer'

const AboutPage = () => {
  return (
    <div className='flex flex-col justify-center'>
      <Nav />
      <p className='mt-20'></p>
      
      <section className="flex flex-col lg:flex-row items-center lg:items-start mt-6 ml-4 lg:ml-16  w-[90%]">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 ">
          <h2 className="text-2xl lg:text-5xl font-bold py-2 mb-4 text-highlight">The 3BX Vision</h2>
          <p className="lg:text-xl xl:text-2xl ">3BX was founded by William Thompson and Tapasya
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
          <Image src={"/Will-Headshot-2.png"} width={850} height={850} alt="Will Headshot" />
        </div>
      </section>

      <section>
      <div className="lg:mx-36 flex flex-col lg:flex-row items-center justify-center lg:space-x-12 py-12 sm:pb-12 lg:py-12">
                    <Image className="transform rotate-180 scale-x-[-1] hidden lg:block" src="/quote.png"
                        width={250}  height={100} alt="Quote Illustration" />
                    <div className="space-y-8 text-center lg:text-right">
                        <h2 className="font-bold py-4 text-3xl lg:text-4xl xl:text-5xl drop-shadow-md">
                            Creating Independence for Independents
                        </h2>
                        <p className="lg:text-xl xl:text-2xl px-4">
                            This is the place to build with like minded
                            individuals and further your unique style as an
                            INDIE creative. Respond to your calling by making
                            your passion your day Job
                        </p>
                    </div>
                </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center lg:items-start mt-6 ml-4 lg:ml-16 w-[90%]">
        <div className="lg:flex-1 text-center mb-8 ">
          <Image src={"/Tappy-Headshot-2.png"} width={850} height={850} alt="Tappy Headshot" />
        </div>
        <div className="flex-1 space-y-8 mt-8">
          <div className="text-right">
            <h2 className="text-2xl lg:text-5xl font-bold py-2 mb-4 text-highlight">A Social Media Platform for All Creators</h2>
            <p className="lg:text-xl xl:text-2xl">Authors, musicians, artists — indie creators of all types — can dominate in the digital space with 3BX&apos;s easy-to-use interface and diverse opportunities to shine.</p>
          </div>
          
          <div className="text-right">
            <h2 className="text-2xl lg:text-5xl font-bold py-2 mb-4 text-highlight">A Marketing Ecosystem for Indies</h2>
            <p className="lg:text-xl xl:text-2xl">Become your own marketing team with ease on 3BX. We provide not only KPI tracking on your creations, but also advertising tools to help you gain a real following.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 lg:px-0 lg:py-0">
        <div className="lg:mx-36 flex flex-col lg:flex-row items-center justify-center lg:space-x-12 py-12 sm:pb-12 lg:py-12">
          <div>
            <h2 className="text-2xl lg:text-5xl font-bold py-2 mb-4">
              Market Your Work and Get Fans Like a Pro
            </h2>
            <p className="lg:text-xl xl:text-2xl">
              We made sure you don&apos;t lose any audience along the way with our incredible and user-friendly system where you can sync your data, fans, and more from other platforms.
            </p>
          </div>
          <Image className="scale-x-[-1] hidden lg:block" src="/quote.png" width={250} height={100} alt="Quote Illustration" />
        </div>
      </section>

      <section className="px-4 py-6 lg:px-0 lg:py-0  w-[90%]">
        <div className="flex flex-col-reverse lg:flex-row items-center text-center justify-between ">
          <div className="space-y-12 py-4 lg:ml-36 w-full lg:w-4/5 lg:my-12">
            <h3 className="text-highlight py-2 font-bold text-3xl lg:text-4xl xl:text-5xl">
              3BX is a Fully Integrated Ecosystem for Creatives and Fans
            </h3>

            <p className="lg:text-xl xl:text-2xl my-6">
              We offer a full-featured digital marketplace, an advanced digital advertising system, collaboration and bartering centers, and so much more. We&apos;re your one-stop shop for indie creation discovery and indie creative success.
            </p>

            <a
              href="https://account.booksbeatsbox.com/signup"
              className="mx-auto w-fit hover:scale-110 transition-all button-custom block font-bold text-lg md:text-lg lg:text-xl text-original-dark bg-highlight px-6 lg:px-6 py-3 lg:py-3">
              Ready to Get on 3BX? Get it Now.
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 lg:px-0 lg:py-0  w-[90%]">
        <div className="lg:mx-36 flex flex-col lg:flex-row items-center justify-center lg:space-x-12 py-12 sm:pb-12 lg:py-12">
          <Image className="transform rotate-180 scale-x-[-1] hidden lg:block" src="/quote.png" width={250} height={100} alt="Quote Illustration" />
          <div className="space-y-8 text-center lg:text-right">
            <h2 className="font-bold py-2 text-3xl lg:text-4xl xl:text-5xl drop-shadow-md">
              The Skies Were The Limit, but now We&apos;re Taking This To The Moon
            </h2>
            <p className="lg:text-xl xl:text-2xl">
              In the past, many creators&apos; growth was limited by other platform&apos;s focus, limited human community, and steep learning curves. As independent creators ourselves, we have recognized these setbacks and used them to jump-start THE DIGITAL RENAISSANCE.
            </p>
            <p className="lg:text-xl xl:text-2xl">Time to ascend to the next level of media and entertainment with 3BX!!!</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 lg:px-0 lg:py-0  w-[90%]">
        <div className="lg:mx-36 flex flex-col lg:flex-row items-center justify-center lg:space-x-8 py-12 sm:pb-12 lg:py-12 gap-4">
          <Image src="/blog.svg" width={500}  height={500} alt="3BX Logo" className="w-1/4" />
          <div className="space-y-8 text-center lg:text-left md:w-3/4">
            <h3 className="font-bold py-2 text-3xl lg:text-4xl xl:text-5xl drop-shadow-md text-highlight">
              How-To with 3BX
            </h3>
            <p className="lg:text-xl xl:text-2xl">
              Want to read our latest blog articles in our How-To/Indie Education series? We hoped so!
            </p>
            <Link
              href="https://blog.booksbeatsbox.com/category/how-to-indie-education/"
              className="block font-semibold text-lg lg:text-xl xl:text-2xl underline hover:text-orangeheaders">
              Go to The 3BX Newsroom for How-To Content for Indie Musicians, Indie Authors and Indie Artists.
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default AboutPage