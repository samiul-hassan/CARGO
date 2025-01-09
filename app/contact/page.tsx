import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Ship, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
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
              Contact Us
            </h1>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-500" />
                  <div>
                    <h2 className="text-xl font-bold">Email</h2>
                    <p className="text-gray-500">info@oceancargo.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-500" />
                  <div>
                    <h2 className="text-xl font-bold">Phone</h2>
                    <p className="text-gray-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-500" />
                  <div>
                    <h2 className="text-xl font-bold">Address</h2>
                    <p className="text-gray-500">123 Shipping Lane, Port City, Ocean State 12345</p>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Subject" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
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

