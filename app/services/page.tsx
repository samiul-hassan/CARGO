import { Ship, Package, Anchor } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Ship className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">OceanCargo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/global-reach">
            Global Reach
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Our Services
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <Ship className="h-12 w-12 mb-4 text-blue-500" />
                <h2 className="text-xl font-bold mb-2">Ocean Freight</h2>
                <p className="text-gray-500">Efficient shipping solutions for all your cargo needs across 100+ countries. We handle containers of all sizes and types.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <Package className="h-12 w-12 mb-4 text-blue-500" />
                <h2 className="text-xl font-bold mb-2">Cargo Handling</h2>
                <p className="text-gray-500">Expert care for your goods from port to port, worldwide. Our team ensures safe loading, unloading, and storage of your cargo.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <Anchor className="h-12 w-12 mb-4 text-blue-500" />
                <h2 className="text-xl font-bold mb-2">Port Operations</h2>
                <p className="text-gray-500">Smooth and efficient port logistics services in major global ports. We manage customs clearance and documentation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 OceanCargo. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

