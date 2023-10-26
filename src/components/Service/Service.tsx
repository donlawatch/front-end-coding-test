import './service.css'
import { services } from "../../constants";

export default function Service() {
  return (
    <section id='service' className='pd-top'>
      <h2 className='fs-heading pd-header'>
        Our teams are continuously developing innovative strategies, building
        new technologies, and conducting ongoing research.
      </h2>
    <div className='img-group'>
      {services.map((service, idx) => (
        <div key={idx} className='item'>
          <img src={service.srcImg} />
          <span className='fs-600 fw-bold'>{service.name}</span>
        </div>
      ))}
    </div>
    </section>
  );
}
