import Image from 'next/image'
import CTASection from '../../components/CTASection'

export default function Packages() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24 mt-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">Travel Packages</h1>
          <p className="text-xl opacity-90 fade-in">Affordable fixed-rate packages for popular destinations and special tour packages</p>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-800 mb-4">Popular Fixed Routes from Pune</h2>
            <p className="text-accent-600">Transparent pricing for frequently traveled destinations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                route: 'Pune ↔ Mumbai',
                distance: '160 km',
                prices: { hatchback: '₹2,800', sedan: '₹3,200', suv: '₹4,500' },
                features: ['Toll included', 'Driver allowance', 'Return pickup available']
              },
              {
                route: 'Pune ↔ Shirdi',
                distance: '190 km',
                prices: { hatchback: '₹3,200', sedan: '₹3,800', suv: '₹5,200' },
                features: ['Temple darshan time', 'Parking included', 'Local guide available']
              },
              {
                route: 'Pune ↔ Lonavala',
                distance: '65 km',
                prices: { hatchback: '₹1,800', sedan: '₹2,200', suv: '₹3,000' },
                features: ['Scenic route', 'Photo stops', 'Weather advisory']
              },
              {
                route: 'Pune ↔ Nashik',
                distance: '210 km',
                prices: { hatchback: '₹3,600', sedan: '₹4,200', suv: '₹5,800' },
                features: ['Wine tour optional', 'Vineyard visits', 'Local cuisine stops']
              },
              {
                route: 'Pune ↔ Mahabaleshwar',
                distance: '120 km',
                prices: { hatchback: '₹2,600', sedan: '₹3,000', suv: '₹4,200' },
                features: ['Hill station expertise', 'Strawberry season special', 'Multiple viewpoints']
              },
              {
                route: 'Pune ↔ Aurangabad',
                distance: '240 km',
                prices: { hatchback: '₹4,200', sedan: '₹4,800', suv: '₹6,500' },
                features: ['Ajanta Ellora tours', 'Historical guide', 'Multi-day packages']
              }
            ].map((route, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-accent-800 mb-2">{route.route}</h4>
                  <div className="text-accent-500 text-sm">Distance: {route.distance}</div>
                </div>
                
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-accent-100">
                    <span className="font-medium">Hatchback</span>
                    <span className="font-semibold text-primary-600">{route.prices.hatchback}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-accent-100">
                    <span className="font-medium">Sedan</span>
                    <span className="font-semibold text-primary-600">{route.prices.sedan}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">SUV</span>
                    <span className="font-semibold text-primary-600">{route.prices.suv}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  {route.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-accent-600 flex items-center">
                      <span className="text-secondary-500 mr-2">•</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="bg-accent-50 section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-800 mb-4">Special Tour Packages</h2>
            <p className="text-accent-600">Curated experiences for the perfect getaway</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: '/assets/MaharastraHillStation.jpg',
                icon: '🏔️',
                title: 'Maharashtra Hill Stations Tour',
                duration: '3 Days / 2 Nights',
                desc: 'Visit Lonavala, Khandala, and Mahabaleshwar in a comprehensive 3-day package with comfortable accommodation and guided tours.',
                includes: ['All transportation in AC vehicle', 'Professional driver & fuel', 'Toll and parking charges', 'Sightseeing as per itinerary'],
                price: '₹12,000'
              },
              {
                image: '/assets/Spritiual.jpg',
                icon: '🙏',
                title: 'Spiritual Maharashtra Tour',
                duration: '4 Days / 3 Nights',
                desc: 'Divine journey covering Shirdi, Nashik, Trimbakeshwar, and other sacred places with comfortable travel and spiritual guidance.',
                includes: ['Temple darshan arrangements', 'Spiritual guide assistance', 'VIP darshan bookings', 'Prasadam arrangements'],
                price: '₹15,000'
              },
              {
                image: '/assets/MaharastraHeritge.jpg',
                icon: '🏛️',
                title: 'Heritage Maharashtra Tour',
                duration: '5 Days / 4 Nights',
                desc: 'Explore the rich heritage of Maharashtra visiting Ajanta, Ellora, and other UNESCO World Heritage sites with expert guides.',
                includes: ['Expert heritage guide', 'Entry tickets to monuments', 'Photography permissions', 'Cultural experiences'],
                price: '₹20,000'
              },
              {
                image: 'https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: '🌊',
                title: 'Weekend Beach Getaway',
                duration: '2 Days / 1 Night',
                desc: 'Quick escape to Goa beaches with comfortable travel, beach activities, and relaxation time away from city life.',
                includes: ['Pune to Goa transportation', 'Beach location transfers', 'Water sports coordination', 'Local sightseeing'],
                price: '₹18,000'
              }
            ].map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="h-48 relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-accent-800 mb-2 flex items-center">
                    <span className="text-2xl mr-2">{pkg.icon}</span>
                    {pkg.title}
                  </h4>
                  <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-3">
                    {pkg.duration}
                  </div>
                  <p className="text-accent-600 mb-4">{pkg.desc}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-accent-800 mb-2">Package Includes:</h5>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="text-sm text-accent-600 flex items-center">
                          <span className="text-secondary-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-accent-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-primary-600">Starting from {pkg.price}</div>
                    <div className="text-sm text-accent-500">*Per vehicle (up to 4 passengers)</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-accent-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">💰</span>
                Pricing Policy
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Transparent Pricing', desc: 'All prices include driver allowance, fuel, and basic tolls. No hidden charges.' },
                  { title: 'Flexible Payment', desc: 'Pay 25% advance to confirm booking. Balance payment on completion of trip.' },
                  { title: 'Group Discounts', desc: 'Special rates for multiple vehicles and corporate bookings.' },
                  { title: 'Seasonal Offers', desc: 'Special discounts during off-peak seasons and weekday travel.' }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h5 className="font-semibold text-accent-800 mb-1">{item.title}</h5>
                    <p className="text-accent-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">📋</span>
                Terms & Conditions
              </h3>
              <ul className="space-y-3">
                {[
                  'Prices are subject to change based on fuel rates and tolls',
                  'Driver accommodation and meals (outstation) - customer responsibility',
                  'Waiting charges: ₹100/hour after first hour free',
                  'Night charges (11 PM - 6 AM): 25% extra',
                  'Cancellation: 24 hours notice required for full refund',
                  'Vehicle breakdown: Immediate replacement guaranteed',
                  'Insurance coverage included for all passengers'
                ].map((term, index) => (
                  <li key={index} className="flex items-start text-accent-600">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}