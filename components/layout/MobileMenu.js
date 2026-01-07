import Link from "next/link";

export default function MobileMenu({ onClose }) {
  return (
    <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-4 md:hidden z-50 overflow-y-auto max-h-[calc(100vh-5rem)]">
      <Link
        href="/"
        onClick={onClose}
        className="text-base font-medium text-neutral-dark hover:text-primary"
      >
        Home
      </Link>
      
      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Programs</p>
        <Link
          href="/programs"
          onClick={onClose}
          className="block py-2 text-base font-medium text-neutral-dark hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary"
        >
          Learning Paths
        </Link>
        <Link
          href="/techsistars-program"
          onClick={onClose}
          className="block py-2 text-base font-medium text-neutral-dark hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary"
        >
           TechsiStars Mentorship
        </Link>
        <Link
          href="/grow-program"
          onClick={onClose}
          className="block py-2 text-base font-medium text-neutral-dark hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary"
        >
          GROW Program
        </Link>
         <Link
          href="/widei-program"
          onClick={onClose}
          className="block py-2 text-base font-medium text-neutral-dark hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary"
        >
          WiDEI Initiative
        </Link>
      </div>

       <div className="border-t border-gray-100 pt-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">About</p>
        <Link
          href="/about"
          onClick={onClose}
          className="block py-2 text-base font-medium text-neutral-dark hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary"
        >
           Overview
        </Link>
        <Link
          href="/mission"
          onClick={onClose}
          className="block py-2 text-base font-medium text-neutral-dark hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary"
        >
           Mission & Vision
        </Link>
        <Link
          href="/team"
          onClick={onClose}
          className="block py-2 text-base font-medium text-neutral-dark hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary"
        >
           Leadership
        </Link>
        <Link
          href="/philosophy"
          onClick={onClose}
          className="block py-2 text-base font-medium text-neutral-dark hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary"
        >
           Philosophy
        </Link>
      </div>

      <Link
        href="/impact"
        onClick={onClose}
        className="text-base font-medium text-neutral-dark hover:text-primary border-t border-gray-100 pt-4"
      >
        Impact
      </Link>
      <Link
        href="/stories"
        onClick={onClose}
        className="text-base font-medium text-neutral-dark hover:text-primary"
      >
        Stories
      </Link>
      
      <Link href="/involve" onClick={onClose} className="w-full text-center rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-orange-600 transition-all mt-4">
        Join Us
      </Link>
    </div>
  );
}
