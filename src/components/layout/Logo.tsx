import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ height = 28 }: { height?: number }) {
  return (
    <Link href="/" aria-label="Suofeiya — home" className="site-header__brand">
      <Image
        src="/logo/suofeiya-logo.png"
        alt="Suofeiya"
        height={height}
        width={Math.round(height * 4.6)}
        priority
        style={{ height, width: 'auto' }}
      />
    </Link>
  );
}
