import Reveal from '../common/Reveal';
import { whySde } from '../../data/content';
import './WhySde.css';

export default function WhySde() {
  const [lead, punch] = whySde.quote;
  return (
    <section id="why">
      <div className="wrap">
        <p className="eyebrow">Why QA → SDE?</p>
        <Reveal as="p" className="quote">"{lead}<em>{punch}</em>"</Reveal>
        <div className="why-grid">
          {whySde.points.map((pt) => (
            <Reveal key={pt.title}><h3>{pt.title}</h3><p>{pt.body}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
