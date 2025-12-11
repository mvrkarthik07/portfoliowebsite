import { Helmet } from 'react-helmet-async'
import { APP_CONFIG } from '../utils/constants'

const SEO = ({ title, description, image, url }) => {
  const fullTitle = title ? `${title} | ${APP_CONFIG.name}` : APP_CONFIG.name
  const fullDescription = description || 'Portfolio showcasing web development, UI/UX design, and creative digital art. Streetwear aesthetics meet futuristic tech.'
  const fullImage = image || '/Images/portfolio.png'
  const fullUrl = url || 'https://karthikmanda.netlify.app'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content="Karthik Manda, portfolio, web developer, UI/UX designer, frontend developer, graphic designer, Singapore, NTU, computer engineering, streetwear design, futuristic design, React, TailwindCSS" />
      <meta name="author" content="Karthik Manda" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Karthik Manda Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@karthxk.mvr" />
      
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  )
}

export default SEO

