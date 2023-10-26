import './benefit.css';
import woman from '../../assets/images/woman.png';

import { benefits } from '../../constants';
import Card from '../UI/Card/Card';

export default function Benefit() {
  return (
    <section id='benefit' className='pd-top'>
      <div className="benefit-container">
        <div className="img-col visually-hidden">
          <img width={436} height={800} src={woman}></img>
        </div>
        <div className="headline-col">
          <h2 className="fs-heading max-header-width pd-header">
            Empowered by Innovation, Commited by Intellect and Driven by Values
          </h2>
        </div>
        <div className="cards">
          {
            benefits.map((benefit, idx) => (<Card key={idx} {...benefit}  />))
          }
        </div>
      </div>
    </section>
  );
}
