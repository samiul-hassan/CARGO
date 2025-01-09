import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Anchor, Ship, Package, Clock, Globe, Users, Building } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Global Shipping Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Reliable, efficient, and secure cargo shipping services across 100+ countries worldwide.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Add more sections as needed for the landing page */}
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

