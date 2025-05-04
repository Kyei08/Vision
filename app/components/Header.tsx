import Link from 'next/link';
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-primary-800/90 w-[220px] h-screen pt-[60px] flex flex-col items-start fixed left-0 top-0">
        <Link href="/" className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          Home
        </Link>
        <Link href="/about" className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          About
        </Link>
        <Link href="/projects" className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          Projects
        </Link>
        <Link href="/credits" className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          Credit
        </Link>
        <Link href="/contact" className="text-gray-100 no-underline px-5 py-4 w-full box-border font-semibold transition-colors hover:bg-[rgba(0,255,204,0.2)] hover:text-[#00ffcc]">
          Contact
        </Link>
      </nav>
    </header>
  );
}