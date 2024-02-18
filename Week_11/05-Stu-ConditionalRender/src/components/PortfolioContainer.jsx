import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function renderPage() {
    if (currentPage === 'Home') {
      return <Home />
    }
    else if (currentPage === 'About') {
      return <About />
    }
    else if (currentPage === 'Blog') {
      return <Blog />
    }
    else {
      return <Contact />
    }
  }

return (
  <>
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
  </>
);

}

export default PortfolioContainer;
