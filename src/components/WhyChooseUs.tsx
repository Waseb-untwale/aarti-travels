import Image from 'next/image'

export default function WhyChooseUs() {
  const features = [
    {
      icon: '🕒',
      title: '24/7 Service',
      desc: 'Available round the clock for all your travel needs'
    },
    {
      icon: '👨‍✈️',
      title: 'Professional Drivers',
      desc: 'Experienced and courteous drivers with local knowledge'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      desc: 'No hidden charges, upfront fare calculation'
    },
    {
      icon: '🛡️',
      title: 'Safe & Secure',
      desc: 'Well-maintained vehicles with insurance coverage'
    }
  ]

  return (
    <section className="bg-accent-50 section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-8">Why Choose Aarti Travels?</h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-accent-800 mb-2">{feature.title}</h4>
                    <p className="text-accent-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="slide-in-right">
            <Image
              src="/assets/Cabs.jpg"
              alt="Professional Driver"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}