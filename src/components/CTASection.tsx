import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="gradient-accent text-white section-padding">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Travel with Us?</h2>
        <p className="text-xl opacity-90 mb-8">Book your ride now and experience the best cab service in Pune</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919307579578"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg btn-hover transition-all"
          >
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg btn-hover transition-all"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  )
}