import Image from 'next/image'
import CTASection from '../../components/CTASection'

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24 mt-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">Our Services</h1>
          <p className="text-xl opacity-90 fade-in">Comprehensive cab services tailored to meet all your transportation needs in Pune and beyond</p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-800 mb-4">Service Categories</h2>
            <p className="text-accent-600">Choose from our wide range of transportation services</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/1545321/pexels-photo-1545321.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: '🚖',
                title: 'Local Taxi Service',
                desc: 'Perfect for city rides, shopping trips, medical appointments, and daily commuting within Pune. Available 24/7 with professional drivers who know the city inside out.',
                features: ['Point-to-point transportation', 'Hourly rental packages', 'Multi-stop journeys', 'Emergency rides']
              },
              {
                image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: '🏔️',
                title: 'Outstation Travel',
                desc: 'Comfortable long-distance travel to destinations across Maharashtra and neighboring states. Perfect for weekend getaways, business trips, and family vacations.',
                features: ['One-way and round-trip options', 'Multi-day packages', 'Hill station tours', 'Business travel packages']
              },
              {
                image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: '✈️',
                title: 'Airport Transfer',
                desc: 'Reliable and punctual airport pickup and drop services. We track your flights and ensure you never miss your departure or wait for arrival pickup.',
                features: ['Pune Airport transfers', 'Mumbai Airport connections', 'Flight tracking service', 'Meet & greet service']
              },
              {
                image: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: '💼',
                title: 'Corporate Travel',
                desc: 'Professional transportation solutions for businesses. Regular employee commutes, client meetings, corporate events, and executive travel with priority booking.',
                features: ['Employee transportation', 'Executive car service', 'Event transportation', 'Monthly packages']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-accent-800 mb-3 flex items-center">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    {service.title}
                  </h3>
                  <p className="text-accent-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-accent-600">
                        <span className="text-secondary-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="bg-accent-50 section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-800 mb-4">Our Fleet</h2>
            <p className="text-accent-600">Choose the perfect vehicle for your journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🚗',
                name: 'Hatchback',
                capacity: '4 passengers',
                luggage: '2 small bags',
                bestFor: 'City rides, short trips',
                features: 'AC, Music system',
                price: '₹12/km'
              },
              {
                icon: '🚙',
                name: 'Sedan',
                capacity: '4 passengers',
                luggage: '3 medium bags',
                bestFor: 'Business, comfort rides',
                features: 'AC, Premium interiors',
                price: '₹15/km'
              },
              {
                icon: '🚐',
                name: 'MUV',
                capacity: '6-7 passengers',
                luggage: '4 large bags',
                bestFor: 'Group travel, families',
                features: 'Spacious, AC',
                price: '₹18/km'
              },
              {
                icon: '🛻',
                name: 'SUV',
                capacity: '6-7 passengers',
                luggage: '5 large bags',
                bestFor: 'Luxury travel, outstation',
                features: 'Premium comfort, entertainment',
                price: '₹22/km'
              }
            ].map((vehicle, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-lg card-hover">
                <div className="text-4xl mb-4">{vehicle.icon}</div>
                <h4 className="text-xl font-bold text-accent-800 mb-3">{vehicle.name}</h4>
                <div className="space-y-2 text-sm text-accent-600 mb-4">
                  <p><strong>Capacity:</strong> {vehicle.capacity}</p>
                  <p><strong>Luggage:</strong> {vehicle.luggage}</p>
                  <p><strong>Best For:</strong> {vehicle.bestFor}</p>
                  <p><strong>Features:</strong> {vehicle.features}</p>
                </div>
                <div className="bg-primary-500 text-white py-2 px-4 rounded-full font-semibold">
                  Starting from {vehicle.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-800 mb-4">Special Services</h2>
            <p className="text-accent-600">Additional services to make your journey even better</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎉', title: 'Wedding Transportation', desc: 'Special decorated cars for weddings and ceremonies. Multiple vehicle arrangements for guest transportation.' },
              { icon: '🏥', title: 'Medical Emergency', desc: 'Priority booking for medical emergencies and hospital visits. Trained drivers for patient transportation.' },
              { icon: '🎯', title: 'Tour Packages', desc: 'Customized tour packages to popular destinations around Maharashtra. Experienced local guides available.' },
              { icon: '🌙', title: 'Night Service', desc: 'Safe and reliable transportation during night hours. Special rates for late-night and early morning rides.' },
              { icon: '📅', title: 'Advance Booking', desc: 'Book your rides in advance for important meetings, flights, and events. Guaranteed availability.' },
              { icon: '📱', title: 'Live Tracking', desc: 'Track your ride in real-time. Share your trip details with family and friends for added safety.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-lg card-hover">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-accent-800 mb-3">{service.title}</h4>
                <p className="text-accent-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}