"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            NextApp
          </Link>

          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contactdetails" className="hover:text-gray-300">
                Contact List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
