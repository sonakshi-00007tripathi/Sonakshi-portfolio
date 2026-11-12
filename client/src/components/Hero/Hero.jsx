import Reveal from '../common/Reveal';
import Polaroid from '../common/Polaroid';
import { hero, profile } from '../../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <header id="top" className="hero wrap">
      <Reveal>
        <p className="eyebrow">Order #SDE-INTERN-2027 · <span className="status-dot">● ready to ship</span></p>
        <h1 className="hero-title">Hi, I'm <span className="hl">{profile.firstName}</span>.</h1>
        <p className="hero-p">I've spent 8 months finding out exactly how software breaks. Now I want to build the software that doesn't.</p>
        <p className="hero-p2">
          QA Engineer Intern at <b>GoComet</b> (B2B logistics SaaS) · CS undergrad at LPU, class of 2027 · the first girl in my family to leave home to study.
        </p>
        <div className="hero-btns">
          <a className="btn orange" href="#track">Track my journey ↓</a>
          <a className="btn ghost" href="#principles">See my receipts</a>
        </div>
      </Reveal>

      <Reveal className="hero-photos">
        {hero.photos.map((p) => <Polaroid key={p.src} {...p} eager />)}
        <div className="sticker">{hero.sticker}</div>
      </Reveal>
    </header>
  );
}
