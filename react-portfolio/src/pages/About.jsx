import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import LazyImage from '../components/LazyImage'

const About = () => {
  return (
    <>
      <SEO 
        title="About"
        description="Karthik Manda - Computer Engineering undergraduate at NTU working at the intersection of engineering and design."
      />
      <div className="min-h-screen bg-primary-black">
        <Navbar />
        <main className="pt-24 md:pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="mb-12 md:mb-16">
              <h1 className="font-gothic text-4xl md:text-5xl lg:text-6xl mb-12">
                About
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 sm:gap-12 md:gap-16">
                <div className="max-w-[450px] space-y-4 sm:space-y-6 w-full">
                  <p className="font-clash text-sm sm:text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed break-words">
                    Computer Engineering undergraduate at Nanyang Technological University, Singapore.
                  </p>
                  <p className="font-clash text-sm sm:text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed break-words">
                    I work at the intersection of engineering and design, moving comfortably between code, UX, and visual design.
                  </p>
                  <p className="font-clash text-sm sm:text-base md:text-lg lg:text-xl text-secondary-white leading-relaxed break-words">
                    I'm drawn to building products that solve real problems, creating interfaces that feel intuitive, and exploring visual design as a tool for clear communication.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                  <LazyImage
                    src="/Images/PP.jpg"
                    alt="Karthik Manda"
                    className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[290px] border border-primary-white/15"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default About

