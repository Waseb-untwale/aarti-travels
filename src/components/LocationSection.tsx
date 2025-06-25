export default function LocationSection() {
  const locations = [
    {
      icon: '📍',
      title: 'Local Service',
      desc: 'Complete Pune city coverage including all major areas and suburbs'
    },
    {
      icon: '✈️',
      title: 'Airport Transfer',
      desc: 'Reliable pickup and drop services to Pune Airport'
    },
    {
      icon: '🏔️',
      title: 'Outstation',
      desc: 'Maharashtra and nearby states for weekend getaways and business trips'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">Serving Pune & Beyond</h2>
          <p className="text-accent-600 text-lg">We provide cab services across Pune and outstation destinations in Maharashtra</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-lg card-hover">
              <div className="text-4xl mb-4">{location.icon}</div>
              <h4 className="text-xl font-bold text-accent-800 mb-3">{location.title}</h4>
              <p className="text-accent-600">{location.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}