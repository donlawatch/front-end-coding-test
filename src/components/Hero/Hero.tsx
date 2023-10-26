import Button from "../UI/Button/Button";
import hero from "../../assets/images/hero.svg"
import Testimonial from "../Testimonial/Testimonial";

import './hero.css';

export default function Hero() {
  return (
    <section id="hero" className="pd-top">
      <div className="hero-container">
        <div className="even-columns">
          <div>
            <h2 className="fs-heading">
              Closen the technology of the future to help you{' '}
              <span className="text-hight-light">Inovate</span>
            </h2>
            <p className="sub-headline visually-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
              arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus
              quam a sollicitudin convallis purus. Sed sed quam risus laoreet
              viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet
              neque. Sed est malesuada lobortis aliquam dolor eget donec
            </p>
            <Button className="visually-hidden">Get Started</Button>
          </div>
          <div className="hero-image">
            <img src={hero} width={557} height={693}/>
          </div>
        </div>
        <Testimonial />
      </div>
    </section>
  );
}
