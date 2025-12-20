import { motion } from 'framer-motion'
import { contactLinks } from '../data/contact'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const handleResumeDownload = (e, href) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = href
    link.download = 'ResumeKarthik_V3.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Filter out resume from contact links (it's in navigation now)
  const displayLinks = contactLinks.filter(link => link.type !== 'resume')

  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch with Karthik Manda. Email, LinkedIn, GitHub, and Instagram links."
      />
      <div className="min-h-screen bg-primary-black">
        <Navbar />
        <main className="pt-24 md:pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-gothic text-4xl md:text-5xl lg:text-6xl mb-8"
            >
              Contact
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-clash text-base md:text-lg lg:text-xl text-secondary-white mb-12 leading-relaxed"
            >
              Get in touch for collaboration, freelance projects, or just to connect.
            </motion.p>

            {/* Contact Form */}
            <ContactForm />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-12 md:mt-16"
            >
              <p className="font-clash text-sm md:text-base text-secondary-white/70 mb-6">
                Or connect with me directly:
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-4 md:gap-6"
              >
                {displayLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={link.href}
                    target={link.type === 'email' ? undefined : '_blank'}
                    rel={link.type === 'email' ? undefined : 'noopener noreferrer'}
                    className="btn-secondary text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
                    aria-label={link.label}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Contact

