import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import useGetBookInfo from './Hooks/useGetBookInfo';


// Main HomeContent component
function HomeContent() {
  const searchIcon = '/images/search-icon.png';
  const mainImage = '/images/image3.png';
  const { fetchBookInfo, data, isLoading, error } = useGetBookInfo();
  const [showForm, setShowForm] = useState(false); // State for form visibility

  // Function to call the API
  const callApi = async (bookTitle) => {
    await fetchBookInfo(bookTitle);
  };

  const handleButtonClick = () => {
    setShowForm(!showForm);
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
        <img src={"/images/image3.png"} className="img-fluid" alt="Reading" />
      </header>
      {showForm && <UserForm callApi={callApi} />}
      {isLoading && <p>Loading...</p>}
      {data && <div>{data}</div>}
      {error && <p>Error: {error.message}</p>}

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

export default HomeContent;
