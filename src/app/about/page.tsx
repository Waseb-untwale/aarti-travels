import Image from 'next/image'
import CTASection from '../../components/CTASection'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24 mt-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">About Aarti Travels</h1>
          <p className="text-xl opacity-90 fade-in">Your trusted partner for safe and reliable transportation in Pune, Maharashtra</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold text-accent-800 mb-6">Our Story</h2>
              <p className="text-accent-600 mb-4">
                Aarti Travels has been serving the people of Pune, Maharashtra with dedication and commitment for several years. What started as a small cab service has grown into a trusted transportation partner for thousands of customers across the region.
              </p>
              
              <p className="text-accent-600 mb-4">
                We understand that transportation is not just about getting from point A to point B - it's about comfort, safety, reliability, and peace of mind. That's why we've built our entire business around these core values.
              </p>

              <p className="text-accent-600">
                Our journey began with a simple mission: to provide the best cab service experience in Pune. Today, we're proud to be one of the most trusted names in the transportation industry in Maharashtra.
              </p>
            </div>
            <div className="slide-in-right">
              <img
                src="/assets/Story.jpg"
                alt="About Aarti Travels"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-accent-50 section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Our Mission
              </h3>
              <p className="text-accent-600">
                To provide safe, reliable, and comfortable transportation services to our customers while maintaining the highest standards of professionalism and customer satisfaction. We strive to make every journey memorable and stress-free.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <h3 className="text-2xl font-bold text-secondary-600 mb-4 flex items-center">
                <span className="text-3xl mr-3">🔮</span>
                Our Vision
              </h3>
              <p className="text-accent-600">
                To become the leading cab service provider in Maharashtra, known for our exceptional service quality, innovative solutions, and unwavering commitment to customer satisfaction and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Stats */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-800 mb-4">Our Experience & Achievements</h2>
            <p className="text-accent-600">Numbers that speak for our commitment and dedication</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '5+', label: 'Years of Service' },
              { number: '1000+', label: 'Happy Customers' },
              { number: '24/7', label: 'Service Availability' },
              { number: '50+', label: 'Destinations Covered' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-lg card-hover">
                <div className="text-3xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-accent-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-accent-50 section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent-800 mb-4">Our Core Values</h2>
            <p className="text-accent-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🛡️', title: 'Safety First', desc: 'We prioritize the safety of our passengers above everything else. All our vehicles are regularly maintained and our drivers are well-trained professionals.' },
              { icon: '⭐', title: 'Quality Service', desc: 'We are committed to providing the highest quality of service. From booking to drop-off, we ensure every aspect meets our high standards.' },
              { icon: '💯', title: 'Reliability', desc: 'When you book with us, you can count on us. We understand the importance of punctuality and make sure you reach your destination on time.' },
              { icon: '💰', title: 'Fair Pricing', desc: 'We believe in transparent and fair pricing. No hidden charges, no surprises - just honest pricing for quality service.' },
              { icon: '🤝', title: 'Customer Focus', desc: 'Our customers are at the heart of everything we do. We listen, understand, and strive to exceed expectations in every interaction.' },
              { icon: '🌱', title: 'Continuous Improvement', desc: 'We constantly work to improve our services, adopt new technologies, and enhance the overall customer experience.' }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-lg card-hover">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-accent-800 mb-3">{value.title}</h4>
                <p className="text-accent-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}