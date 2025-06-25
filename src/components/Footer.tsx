import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-2 "><img className="rounded-full w-[60px] h-[60px] object-cover" src='/assets/Logo.png' height={60} width={60}></img></span>
              Aarti Travels
            </h3>
            <p className="text-accent-300 mb-4">
              Your trusted cab service partner in Pune, Maharashtra. Safe, reliable, and comfortable rides for all your travel needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/packages', label: 'Packages' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-accent-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Contact Info</h4>
            <div className="space-y-2 text-accent-300">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +91 9307579578
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                aartitravels1987@gmail.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Pune, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Services</h4>
            <ul className="space-y-2 text-accent-300">
              <li>Local Taxi</li>
              <li>Outstation</li>
              <li>Airport Transfer</li>
              <li>Corporate Travel</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-700 mt-8 pt-8 text-center text-accent-400">
          <p>&copy; 2025 Aarti Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}