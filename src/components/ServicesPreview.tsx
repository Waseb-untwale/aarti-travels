export default function ServicesPreview() {
  const services = [
    {
      icon: '🚗',
      title: 'Hatchback',
      desc: 'Perfect for city rides and short distances. Economic and fuel-efficient option.'
    },
    {
      icon: '🚙',
      title: 'Sedan',
      desc: 'Comfortable and spacious for business trips and family outings.'
    },
    {
      icon: '🚐',
      title: 'MUV',
      desc: 'Ideal for group travel with extra luggage space and seating capacity.'
    },
    {
      icon: '🛻',
      title: 'SUV',
      desc: 'Premium comfort for long journeys and special occasions.'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">Our Cab Services</h2>
          <p className="text-accent-600 text-lg">Choose from our wide range of vehicles for your travel needs</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-lg card-hover">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-accent-800 mb-3">{service.title}</h3>
              <p className="text-accent-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}