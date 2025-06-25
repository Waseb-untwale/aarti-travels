import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative text-white py-24 mt-20 min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/unnamed.jpg"
          alt="Mumbai Airport"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Aarti Travels
            </h1>
            <p className="text-xl mb-4 opacity-90">
              Your Trusted Cab Service Partner in Pune, Maharashtra
            </p>
            <p className="text-lg mb-8 opacity-80">
              Safe • Reliable • Comfortable • Affordable
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg btn-hover transition-all"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}