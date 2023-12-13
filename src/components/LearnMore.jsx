import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function LearnMore() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Paths to images in the 'public' directory
  const slides = [
    "/images/Highland-park.jpg",
    "/images/Learn-to-seew.png",
    "/images/pick-raspberries.png"
  ];
  const slideTitles = [
    "Highland Park in Autumn",
    "Learn how to sew",
    "Pick Raspberries"
  ];

  const moveSlides = (delta) => {
    const newIndex = (currentSlide + slides.length + delta) % slides.length;
    setCurrentSlide(newIndex);
  };

  const currentSlideIndex = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <header className="navbar bg-dark border-bottom border-bo" data-bs-theme="dark">
        <nav className="navbar-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/learnmore">Learn More</Link>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img src={searchIcon} alt="Search Icon" />
          </button>
        </div>
        <div className="col-6 text-center">
          <p className="navbar-text text-white mb-0">
            Welcome to Read, Connect, Create, a virtual hub for inspiring curious minds
            to discover the power of knowledge, wonders of reading, magic of bonding,
            and the joy of creating! Have you read a good book lately? Get more information about it here!
          </p>
          <button className="btn btn-primary btn-lg" onClick={handleButtonClick}>
            Click here to get info about your favorite books from ChatGPT!
          </button>
        </div>
        <img src={mainImage} className="img-fluid" alt="Reading" />
      </header>
      <main className="container">
        <section>
          <div className="slideshow-container">
            {slides.map((src, index) => (
              <div className={`mySlides fade ${index === currentSlide ? 'active' : ''}`} key={index}>
                <div className="numbertext">{`${index + 1} / ${slides.length}`}</div>
                <img src={src} alt={slideTitles[index]} />
                <div className="text">{slideTitles[index]}</div>
              </div>
            ))}
            <a className="prev" onClick={() => moveSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => moveSlides(1)}>&#10095;</a>
          </div>
          <div style={{ textAlign: 'center' }}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => currentSlideIndex(index)}
                aria-label={`Slide ${index + 1}`}
              ></span>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Have any questions/comments?</h3>
            <p>Send me an email and I will be happy to connect with you!</p>
            <p>faezeh.jahanshiri@gmail.com</p>
          </div>
          <div className="newsletter-subscription">
            <h3>Subscribe to my newsletter:</h3>
            <form>
              <input type="email" placeholder="Type Your Email Here" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Faezeh Jahan 2023</p>
        </div>
      </footer>
    </>
  );
}

export default LearnMore;

