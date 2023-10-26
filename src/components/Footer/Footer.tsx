import logo from '../../assets/images/logo.png';
import './footer.css'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="columns">
          <div className='footer-logo'>
            <a href="#">
              <img src={logo} alt="Cyber Devision" width={159} height={19} />
            </a>
          </div>
          <div className="footer-nav">
            <p>Information</p>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Origins</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
            </ul>
          </div>
          <div className='contact'>
            <p>Contact Us</p>
            <ul>
              <li>contact@cyberdivisino.tn</li>
              <li>+216 29 065 054</li>
              <li>Susah, Imm Ibrahim, 6th Floor</li>
            </ul>
          </div>
          <div>
            <p>Follow us On Social Media</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
