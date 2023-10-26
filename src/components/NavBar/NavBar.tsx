import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.svg';

import './header.css';

export default function NavBar() {
  return (
    <header className="header">
      <div className='header-container'>
        <a href="#">
          <img src={logo} alt="Cyber Devision" />
        </a>
        <nav className="header-nav">
          <a href="#">
            <img src={menu}></img>
          </a>
        </nav>
      </div>
    </header>
  );
}
