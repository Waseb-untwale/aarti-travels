"use client";
import CTASection from '../../components/CTASection'

export default function Testimonials() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24 mt-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">Customer Testimonials</h1>
          <p className="text-xl opacity-90 fade-in">What our valued customers say about our services</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-accent-50 p-8 rounded-2xl">
            {[
              { number: '4.8/5', label: 'Average Rating' },
              { number: '1000+', label: 'Happy Customers' },
              { number: '5000+', label: 'Successful Trips' },
              { number: '99%', label: 'On-Time Performance' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-accent-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Excellent service! I booked Aarti Travels for my airport transfer and the driver was punctual, professional, and the car was very clean. The ride was comfortable and safe. Highly recommended for anyone looking for reliable cab service in Pune.',
                name: 'Priya Sharma',
                role: 'Business Executive',
                trip: 'Mumbai Airport Transfer'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'We hired Aarti Travels for our family trip to Mahabaleshwar. The driver was very knowledgeable about local places and helped us with sightseeing recommendations. The SUV was spacious and perfect for our family of 6. Great experience!',
                name: 'Rajesh Patil',
                role: 'Family Customer',
                trip: 'Mahabaleshwar Family Trip'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Outstanding service for our corporate team outing. They provided multiple vehicles and all drivers were professional and on time. The booking process was smooth and customer service was excellent. Will definitely use again.',
                name: 'Amit Desai',
                role: 'HR Manager, Tech Company',
                trip: 'Corporate Group Travel'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'I regularly use Aarti Travels for my office commute. The drivers are always polite, vehicles are well-maintained, and the rates are very reasonable. Their 24/7 availability is a huge advantage. Highly satisfied with their service.',
                name: 'Sneha Kulkarni',
                role: 'Software Engineer',
                trip: 'Regular Office Commute'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Booked Aarti Travels for my parents\' visit to Shirdi. The driver was very respectful and helped them throughout the journey. He even waited during their temple visit and ensured their comfort. Excellent service for elderly passengers.',
                name: 'Mahesh Joshi',
                role: 'Working Professional',
                trip: 'Shirdi Religious Trip'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Used their service for a late night emergency hospital visit. They responded immediately and the driver reached within 15 minutes. Professional handling of the situation and very supportive throughout. Grateful for their quick response.',
                name: 'Dr. Kavita Mehta',
                role: 'Medical Professional',
                trip: 'Emergency Hospital Visit'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Fantastic experience for our wedding transportation. They decorated the car beautifully and managed all guest transportation perfectly. All vehicles were on time and the coordination was seamless. Made our special day even more memorable.',
                name: 'Rohit & Pooja',
                role: 'Wedding Couple',
                trip: 'Wedding Transportation'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Best cab service in Pune! I\'ve used many services but Aarti Travels stands out for their reliability and professional approach. Fair pricing, no hidden charges, and excellent customer support. They have become my go-to choice for all travel needs.',
                name: 'Sachin Wagh',
                role: 'Entrepreneur',
                trip: 'Regular Business Travel'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Booked their service for a group trip to Goa. The MUV was perfect for our group and the driver was extremely helpful with local recommendations in Goa. Clean vehicle, safe driving, and great value for money. Highly recommended!',
                name: 'Vikram Patil',
                role: 'Travel Enthusiast',
                trip: 'Goa Group Trip'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className="mb-4">
                  <div className="text-lg mb-3">{testimonial.rating}</div>
                  <p className="text-accent-600 italic leading-relaxed">{testimonial.text}</p>
                </div>
                <div className="border-t border-accent-100 pt-4">
                  <h5 className="font-bold text-accent-800">{testimonial.name}</h5>
                  <div className="text-accent-500 text-sm">{testimonial.role}</div>
                  <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs inline-block mt-2">
                    {testimonial.trip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-accent-50 section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-800 mb-4">What Makes Us Different?</h2>
            <p className="text-accent-600">Here's what our customers love about Aarti Travels</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⏰',
                title: 'Always On Time',
                desc: 'They never make you wait. Always punctual and reliable for important appointments and flights.',
                author: '- Multiple Customer Reviews'
              },
              {
                icon: '🛡️',
                title: 'Safety First',
                desc: 'Feel completely safe traveling with them, especially for late night journeys and solo travel.',
                author: '- Female Passengers'
              },
              {
                icon: '💎',
                title: 'Premium Experience',
                desc: 'Clean cars, professional drivers, and courteous service that makes every trip comfortable.',
                author: '- Corporate Clients'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-lg card-hover">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-accent-800 mb-3">{feature.title}</h4>
                <p className="text-accent-600 mb-4">{feature.desc}</p>
                <div className="text-sm text-accent-500 italic">{feature.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-accent-800 mb-4">Share Your Experience</h3>
              <p className="text-accent-600 mb-6">
                We value your feedback and would love to hear about your journey with Aarti Travels. Your review helps us improve our services and helps other customers make informed decisions.
              </p>
              
              <div>
                <h4 className="font-semibold text-accent-800 mb-4">Leave a Review On:</h4>
                <div className="space-y-3">
                  {[
                    { icon: '📱', name: 'Google Reviews', link: '#' },
                    { icon: '📘', name: 'Facebook', link: '#' },
                    { icon: '💬', name: 'WhatsApp', link: 'https://wa.me/919307579578' }
                  ].map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-accent-50 rounded-xl hover:bg-accent-100 transition-colors"
                    >
                      <span className="text-2xl">{platform.icon}</span>
                      <span className="font-medium text-accent-800">{platform.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-accent-800 mb-4">Quick Review</h4>
                <p className="text-accent-600 mb-6">Rate your recent experience with us:</p>
                <div className="space-y-3">
                  {[
                    '⭐ 1 Star',
                    '⭐⭐ 2 Stars',
                    '⭐⭐⭐ 3 Stars',
                    '⭐⭐⭐⭐ 4 Stars',
                    '⭐⭐⭐⭐⭐ 5 Stars'
                  ].map((rating, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const message = `Hi Aarti Travels! I would like to give you a ${rating} rating. Here's my feedback: `;
                        window.open(`https://wa.me/919307579578?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="w-full p-3 text-left border-2 border-accent-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-colors"
                    >
                      {rating}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-accent-500 italic mt-4">
                  Click on any rating to leave a detailed review via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}