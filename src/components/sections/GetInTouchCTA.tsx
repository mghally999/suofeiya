import Link from 'next/link';

export default function GetInTouchCTA() {
  return (
    <section className="cta-touch">
      <h2>
        GET IN TOUCH TO START
        <br />
        YOUR <em style={{ fontStyle: 'italic' }}>CREATIVE</em> ADVENTURE
      </h2>
      <Link href="/contact" className="link-underline">
        Contact
      </Link>
    </section>
  );
}
