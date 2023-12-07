import React from "react"
import "./Footer.css"


const Footer = () => {
  return (
    <>
    <body className="bodyBox">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>VJCSE PUBLICATION</li>
                <li>+91-9555269393</li>
                <li>+91-9555269393</li>
                <li className="ulLi">info@ijrst.com</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href='/about'>Current Issue</a></li>
                <li><a href='/about'>Submission Process</a></li>
                <li><a href='/about'>FAQs</a></li>
                <li className="ulLi"><a href='/about'>Our Journals</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Get help</h4>
              <ul>
                <li><a href='/about'>Reviewers</a></li>
                <li><a href='/about'>Plagiarism Policy</a></li>
                <li><a href='/about'>Services</a></li>
                <li className="ulLi"><a href='/contact'>Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Indexing</h4>
              <div className="social-links">
                <li></li>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>Copyright ©2022,IJSR - All Rights Reserved</p>
        </div>
      </div>
      </body>
    </>
  )
}

export default Footer