import './card.css';

type Item = {
  count: string;
  cardHeader: string;
  description: string;
};

export default function Card(item: Item) {
  return (
    <div className="card">
      <div className="count fs-700">{item.count}</div>
      <div className="card-body">
        <h3 className='fs-600'>{item.cardHeader}</h3>
        <p className='fw-semi-bold'>{item.description}</p>
      </div>
    </div>
  );
}
