import Image from 'next/image';
import Link from 'next/link';
import { IMG } from '@/lib/content';

export default function Leading() {
  return (
    <section className="leading">
      <div className="leading__bg">
        <Image src={IMG.team} alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="leading__content">
        <h2>
          <span className="reveal-line-mask">
            <span className="reveal-line-inner is-visible">LEADING</span>
          </span>
          <span className="reveal-line-mask">
            <span className="reveal-line-inner is-visible indent">
              the <em style={{ fontStyle: 'italic' }}>VISION</em>
            </span>
          </span>
        </h2>
        <div className="leading__card">
          <Image src={IMG.servicesHome} alt="Studio leadership" width={420} height={560} style={{ objectFit: 'cover' }} />
        </div>
        <p>
          Suofeiya was founded to redefine luxury design through a seamless integration of architecture, interiors and
          project delivery within one cohesive studio. At the heart of our vision is the studio itself: a team of
          specialists, collaborators and craftspeople who bring each project to life.
        </p>
        <Link href="/studio" className="link-underline">
          View studio
        </Link>
      </div>
    </section>
  );
}
