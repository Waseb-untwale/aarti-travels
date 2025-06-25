'use client'

import { useState } from 'react'
import CTASection from '../../components/CTASection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    returnDate: '',
    returnTime: '',
    vehicle: '',
    tripType: '',
    tripMode: 'oneWay', // New field for One Way / Round Trip
    passengers: '1',
    requirements: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    let message = `🚕 *New Booking Request - Aarti Travels*\n\n`
    message += `👤 *Name:* ${formData.name}\n`
    message += `📞 *Phone:* ${formData.phone}\n`
    if (formData.email) message += `📧 *Email:* ${formData.email}\n`
    message += `🛣️ *Trip Mode:* ${formData.tripMode === 'oneWay' ? 'One Way' : 'Round Trip'}\n`
    message += `📍 *Pickup:* ${formData.pickup}\n`
    message += `🎯 *Destination:* ${formData.destination}\n`
    message += `📅 *Date:* ${formData.date}\n`
    message += `🕐 *Time:* ${formData.time}\n`
    if (formData.tripMode === 'roundTrip') {
      message += `📅 *Return Date:* ${formData.returnDate}\n`
      message += `🕐 *Return Time:* ${formData.returnTime}\n`
    }
    message += `🚗 *Vehicle:* ${formData.vehicle}\n`
    message += `🛣️ *Trip Type:* ${formData.tripType}\n`
    message += `👥 *Passengers:* ${formData.passengers}\n`
    if (formData.requirements) message += `📝 *Special Requirements:* ${formData.requirements}\n`
    message += `\nPlease confirm availability and provide quote. Thank you!`
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/919307579578?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Show success message
    alert('Your booking request has been sent via WhatsApp. We will contact you shortly with confirmation and quote!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24 mt-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">Contact Us</h1>
          <p className="text-xl opacity-90 fade-in">Get in touch for bookings, inquiries, and all your transportation needs</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📞',
                title: 'Call Us',
                desc: 'Available 24/7 for bookings and support',
                contact: '+91 9307579578',
                link: 'tel:+919307579578',
                note: 'Immediate response guaranteed'
              },
              {
                icon: '💬',
                title: 'WhatsApp',
                desc: 'Quick booking and instant quotes',
                contact: '+91 9307579578',
                link: 'https://wa.me/919307579578',
                note: 'Chat with us anytime'
              },
              {
                icon: '📧',
                title: 'Email',
                desc: 'For detailed inquiries and bookings',
                contact: 'aartitravels1987@gmail.com',
                link: 'mailto:aartitravels1987@gmail.com',
                note: 'We reply within 2 hours'
              }
            ].map((contact, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-lg card-hover">
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h4 className="text-xl font-bold text-accent-800 mb-3">{contact.title}</h4>
                <p className="text-accent-600 mb-4">{contact.desc}</p>
                <div className="mb-4">
                  <a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-xl font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {contact.contact}
                  </a>
                </div>
                <div className="text-sm text-accent-500 italic">{contact.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-accent-50 section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-accent-800 mb-6">Quick Booking Form</h2>
              <p className="text-accent-600 mb-6">
                Fill out this form and we'll get back to you with the best quote for your travel needs. Our team will contact you within 30 minutes to confirm your booking.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-accent-800 mb-4">Why Book With Us?</h4>
                <ul className="space-y-3">
                  {[
                    'Instant quote via WhatsApp or call',
                    'No advance payment required for local trips',
                    'Professional and verified drivers',
                    'Clean and well-maintained vehicles',
                    '24/7 customer support',
                    'Transparent pricing with no hidden costs'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-accent-600">
                      <span className="text-secondary-500 mr-3">✅</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              {/* Trip Mode Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-accent-800 mb-4">Select Trip Mode</h3>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="tripMode"
                      value="oneWay"
                      checked={formData.tripMode === 'oneWay'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600 border-accent-300 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-accent-700 font-medium">One Way</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="tripMode"
                      value="roundTrip"
                      checked={formData.tripMode === 'roundTrip'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600 border-accent-300 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-accent-700 font-medium">Round Trip</span>
                  </label>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-accent-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-accent-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pickup" className="block text-sm font-medium text-accent-700 mb-2">
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      id="pickup"
                      name="pickup"
                      required
                      value={formData.pickup}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-accent-700 mb-2">
                      Destination *
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-accent-700 mb-2">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-accent-700 mb-2">
                      Pickup Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Return Date/Time fields - only show for round trip */}
                {formData.tripMode === 'roundTrip' && (
                  <div className="grid md:grid-cols-2 gap-4 p-4 bg-accent-50 rounded-xl">
                    <div>
                      <label htmlFor="returnDate" className="block text-sm font-medium text-accent-700 mb-2">
                        Return Date *
                      </label>
                      <input
                        type="date"
                        id="returnDate"
                        name="returnDate"
                        required={formData.tripMode === 'roundTrip'}
                        min={formData.date || new Date().toISOString().split('T')[0]}
                        value={formData.returnDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="returnTime" className="block text-sm font-medium text-accent-700 mb-2">
                        Return Time *
                      </label>
                      <input
                        type="time"
                        id="returnTime"
                        name="returnTime"
                        required={formData.tripMode === 'roundTrip'}
                        value={formData.returnTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-accent-700 mb-2">
                    Vehicle Type *
                  </label>
                  <select
                    id="vehicle"
                    name="vehicle"
                    required
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="hatchback">Hatchback (4 passengers)</option>
                    <option value="sedan">Sedan (4 passengers)</option>
                    <option value="muv">MUV (6-7 passengers)</option>
                    <option value="suv">SUV (6-7 passengers)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="tripType" className="block text-sm font-medium text-accent-700 mb-2">
                    Trip Type *
                  </label>
                  <select
                    id="tripType"
                    name="tripType"
                    required
                    value={formData.tripType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select Trip Type</option>
                    <option value="local">Local (Within Pune)</option>
                    <option value="outstation">Outstation (Outside Pune)</option>
                    <option value="airport">Airport Transfer</option>
                    <option value="hourly">Hourly Rental</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="passengers" className="block text-sm font-medium text-accent-700 mb-2">
                    Number of Passengers
                  </label>
                  <select
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map(num => (
                      <option key={num} value={num.toString()}>
                        {num} Passenger{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-accent-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={3}
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Any special requirements, stops, or instructions..."
                    className="w-full px-4 py-3 border-2 border-accent-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-4 px-6 rounded-xl font-semibold text-lg btn-hover transition-all"
                >
                  Get Instant Quote via WhatsApp
                </button>

                <p className="text-center text-sm text-accent-500">
                  By submitting this form, you agree to receive booking confirmations and updates via WhatsApp and SMS.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}