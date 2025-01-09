import Image from 'next/image'
import { Users, Building, Ship } from 'lucide-react'
import Link from 'next/link'

export default function GlobalReachPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Our Global Reach
            </h1>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Users className="mr-2" /> Partners & Investors
                </h2>
                <p className="text-gray-500 mb-6">We're proud to work with leading companies and investors from around the world.</p>
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-gray-100 p-4 rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=80&width=80`}
                        alt={`Partner ${i + 1}`}
                        width={80}
                        height={80}
                        className="mx-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Building className="mr-2" /> Global Shipping
                </h2>
                <p className="text-gray-500 mb-6">We ship to over 100 countries, covering all major trade routes.</p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="World map showing shipping routes"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
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

