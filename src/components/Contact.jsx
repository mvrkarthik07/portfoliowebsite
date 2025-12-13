import { motion } from 'framer-motion'
import { contactLinks } from '../data/contact'
import ContactForm from './ContactForm'

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
    link.download = 'ResumeKarthik_V2.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto w-full text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-heading"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-clash text-sm sm:text-base md:text-lg lg:text-xl text-secondary-white mb-8 sm:mb-12 md:mb-16 leading-relaxed"
        >
          Hit me up — Whether it's collaboration, freelance projects, or just to talk design, streetwear, and innovation. Always down to connect and create something fresh.
        </motion.p>

        {/* Contact Form */}
        <ContactForm />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 md:mt-16"
        >
          <p className="font-clash text-sm md:text-base text-secondary-white/70 mb-6">
            Or connect with me directly:
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target={link.type === 'email' ? undefined : '_blank'}
                rel={link.type === 'email' ? undefined : 'noopener noreferrer'}
                download={link.download ? 'ResumeKarthik_V2.pdf' : undefined}
                onClick={link.download ? (e) => handleResumeDownload(e, link.href) : undefined}
                className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                aria-label={link.label}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

