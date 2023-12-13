import React from 'react';
import { Link } from 'react-router-dom';



function About() {
  return (
    <>
      <header className="navbar bg-dark border-bottom border-bo" data-bs-theme="dark">
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img src="./images/search-icon.png" alt="Search Icon" />
          </button>
        </div>
        <nav className="navbar-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/learnmore">Learn More</Link>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <img src={searchIcon} alt="Search Icon" />
            </button>
          </div>
        </nav>
      </header>
      <main className="container">
        <section className="features row my-3 p-1 rounded-3">
          <div className="col-sm-4">
            <div className="card">
              <a href="https://search.worldcat.org/title/1399967988" target="_blank" rel="noopener noreferrer">
                <img src="/images/dune.png" className="card-img-bottom" alt="Dune Book Cover" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Reading Recommendations</h5>
                <a href="https://search.worldcat.org/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View more</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <a href="https://www.goodreads.com/book/show/36064445-skin-in-the-game?ac=1&from_search=true&qid=Mjm7jIFGoD&rank=1" target="_blank" rel="noopener noreferrer">
                <img src="/images/skin-in-the-game.jpg" className="card-img-bottom" alt="Skin in the Game Book Cover" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Reading Recommendations</h5>
                <a href="https://www.goodreads.com/?ref=nav_hom" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View more</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <a href="https://search.worldcat.org/search?q=facing+codependence" target="_blank" rel="noopener noreferrer">
                <img src="/images/facing-codependence.png" className="card-img-bottom" alt="Facing Codependence Book Cover" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Reading Recommendations</h5>
                <a href="https://search.worldcat.org/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View more</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p>
            <strong>
              In my humble opinion, just like trees that connect and communicate through their root system
              everywhere on earth, we - humans, connect to each other beyond geographical,
              cultural, and many more boundaries through books and reading. Just as trees
              intertwine and communicate through their root systems, connecting each other
              beyond the geographical barriers, reading links humans across borders of culture,
              language, time, and space. While trees trade nutrients, water, and support through
              their roots, readers exchange ideas, feelings, and knowledge through the pages of
              books. Both systems have a unifying quality, stitching together diverse entities
              into a larger, more complex whole.
            </strong>
          </p>
          <p>
            <strong>
              The universality of printed words, transcending the specifics of the human experience, mirrors
              the universality of the tree root system, overcoming the peculiarities of each individual tree.
              The intimacy of this process fosters a unique kind of empathy, one that stems from understanding
              and sharing the joys, sorrows, dreams, and fears of individuals whom we've never met, located
              in places we've never visited.
            </strong>
          </p>
        </section>
        <section className="row my-5">
          <div className="ratio ratio-16x9 video m-auto">
            <iframe src="https://www.youtube.com/embed/muuWRKYi09s" title="Video Title" allowFullScreen></iframe>
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

export default About;

