import Link from "next/link";

export default function MobileMenu({ onClose }) {
  return (
    <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-4 md:hidden">
      <Link
        href="/programs"
        onClick={onClose}
        className="text-base font-medium text-neutral-dark hover:text-primary"
      >
        Programs
      </Link>
      <Link
        href="/about"
        onClick={onClose}
        className="text-base font-medium text-neutral-dark hover:text-primary"
      >
        About
      </Link>
      <Link
        href="/impact"
        onClick={onClose}
        className="text-base font-medium text-neutral-dark hover:text-primary"
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
      <button className="w-full rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-orange-600 transition-all mt-2">
        Join Us
      </button>
    </div>
  );
}
