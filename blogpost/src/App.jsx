import Blogs from "./blogs";

function App (){

  return(

    <>
      <div id="navigation">
        <nav>

        </nav>

      </div>
        
        <Blogs/>

      <div id="footer">
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Fitness Lane, Wellness City</p>
        </div>
        
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        
        <div className="footer-section navigation">
          <h4>Quick Links</h4>
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fitness Blog. All rights reserved.</p>
      </div>
    </footer>
      </div>
    
    </>


  );
}
 export default App