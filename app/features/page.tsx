import { Clock, Globe, Shield, BarChart, Ship } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Why Choose Us
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <Clock className="h-12 w-12 mb-4 text-blue-500" />
                <h2 className="text-xl font-bold mb-2">Timely Delivery</h2>
                <p className="text-gray-500">We understand the importance of punctuality in global shipping and ensure on-time deliveries.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <Globe className="h-12 w-12 mb-4 text-blue-500" />
                <h2 className="text-xl font-bold mb-2">Global Network</h2>
                <p className="text-gray-500">Our extensive network ensures worldwide coverage to over 100 countries, connecting businesses globally.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <Shield className="h-12 w-12 mb-4 text-blue-500" />
                <h2 className="text-xl font-bold mb-2">Cargo Safety</h2>
                <p className="text-gray-500">We prioritize the safety of your cargo with advanced tracking and security measures throughout transit.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <BarChart className="h-12 w-12 mb-4 text-blue-500" />
                <h2 className="text-xl font-bold mb-2">Data-Driven Logistics</h2>
                <p className="text-gray-500">Leverage our advanced analytics for optimized routes and cost-effective shipping solutions.</p>
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

