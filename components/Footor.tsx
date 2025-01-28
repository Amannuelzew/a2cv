import { Facebook, Heart, Instagram, Twitter } from "lucide-react"



export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
           {/* Contact Section */}
           <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                 Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Partner with us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Ride with us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Refund & Cancelation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">FOLLOW US</h3>
            <div className="mb-6 flex gap-4">
              <a href="#" className="rounded-full bg-zinc-800 p-2 hover:bg-orange-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-zinc-800 p-2 hover:bg-orange-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-zinc-800 p-2 hover:bg-orange-400">
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            <h3 className="mb-4 text-lg font-semibold">Receive exclusive offers in your mailbox</h3>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter Your email" className="bg-zinc-800 p-1" />
              <button className="p-1 rounded-md  bg-orange-500 hover:bg-orange-600 text-primary-foreground shadow hover:bg-primary/90">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-400 md:flex-row">
          <p>© Your Company, 2021</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 fill-current text-red-500" /> by Themewagon
          </p>
        </div>
      </div>
    </footer>
  )
}

