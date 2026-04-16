import React from 'react'
import { motion } from 'framer-motion'
import { HiCode, HiPencilAlt, HiTrendingUp, HiDeviceMobile } from 'react-icons/hi'

const Services = () => {
  const services = [
    {
      icon: <HiCode className="text-5xl" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    },
    {
      icon: <HiPencilAlt className="text-5xl" />,
      title: 'Branding & Design',
      description: 'Creating memorable brand identities that resonate with your target audience.',
    },
    {
      icon: <HiTrendingUp className="text-5xl" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and drive conversions.',
    },
    {
      icon: <HiDeviceMobile className="text-5xl" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage and delight users.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services