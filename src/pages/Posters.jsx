import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import LazyImage from '../components/LazyImage'
import { posters } from '../data/posters'

const Posters = () => {
  const [selectedPoster, setSelectedPoster] = useState(null)

  return (
    <>
      <SEO
        title="Posters"
        description="Poster and visual design gallery by Karthik Manda, presented inside the main portfolio navigation shell."
      />
      <div className="page-shell">
        <Navbar />
        <main className="page-main">
          <section className="page-hero">
            <h1>Posters</h1>
            <p>
              Poster work uses Photoshop, Canva, and Figma to test typography, layout, and image-led composition.
            </p>
            <a
              className="text-link"
              href="https://www.instagram.com/kxrthxk.creatives/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View creative archive
            </a>
          </section>

          <section className="poster-gallery" aria-label="Poster gallery">
            {posters.map((poster, index) => (
              <button
                type="button"
                key={`${poster.title}-${poster.image}`}
                className="poster-card surface-card"
                onClick={() => setSelectedPoster(poster)}
              >
                <LazyImage src={poster.image} alt={`${poster.title} poster`} priority={index < 6} />
                <span>
                  <strong>{poster.title}</strong>
                  <small>{poster.description}</small>
                </span>
              </button>
            ))}
          </section>
        </main>
        <Footer />
      </div>

      {selectedPoster && (
        <>
          <div className="modal-backdrop" onClick={() => setSelectedPoster(null)} />
          <div
            className="poster-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="poster-lightbox-title"
            onClick={() => setSelectedPoster(null)}
          >
            <div className="poster-lightbox__inner surface-card" onClick={(event) => event.stopPropagation()}>
              <button type="button" className="modal-close" onClick={() => setSelectedPoster(null)} aria-label="Close poster preview">
                x
              </button>
              <img src={selectedPoster.image} alt={`${selectedPoster.title} poster full preview`} />
              <div>
                <h2 id="poster-lightbox-title">{selectedPoster.title}</h2>
                <p>{selectedPoster.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Posters
