import Image from "next/image";
import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`logo ${inverse ? "logo-inverse" : ""}`} href="/" aria-label="SWOT home">
      <Image src="/brand/swot-mark.svg" alt="" width={32} height={32} priority />
      <span>SWOT</span>
    </Link>
  );
}
