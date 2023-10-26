import './product.css';

import tree from "../../assets/images/tree.png"
import arrow from '../../assets/images/arrow.svg';
import darkGreemArrow from "../../assets/images/dark-green-arrow.svg";

import { products } from '../../constants';


const rows = products.map((product, idx) => (
  <div key={idx} className="list-item">
    <a href="#" className='fs-600'>
      {product.name} <img src={idx === 1 ? darkGreemArrow : arrow} />
    </a>
    <p>{product.description}</p>
  </div>
));

export default function Product() {
  return (
    <section id="product" className="pd-top">
      <h2 className="fs-heading max-header-width z-index-2 pd-header">
        Simple Solutions for Complex Connections. We are Pushing Limits.
      </h2>
      <div className="container">
        <div className="product-list">{rows}</div>
        <img width={359} height={456} src={tree} className="side-img visually-hidden" />
      </div>
    </section>
  );
}
