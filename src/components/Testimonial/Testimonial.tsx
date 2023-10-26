import apple from '../../assets/images/apple.svg';
import google from '../../assets/images/google.svg';
import microsoft from '../../assets/images/microsoft.svg';

import './testimonial.css';

export default function Testimonial() {
  return (
    <div className="testimonial">
      <p>Some of our clients</p>
      <ul>
        <li>
          <img src={apple}></img>
        </li>
        <li>
          <img src={google} />
        </li>
        <li>
          <img src={microsoft} />
        </li>
      </ul>
    </div>
  );
}
