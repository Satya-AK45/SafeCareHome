import React from 'react';
import { Shield, Phone, Clock, CheckCircle2, SprayCan, MousePointer2, MapPin, Mail, Bug } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1626289535731-49daee3c53a4?auto=format&fit=crop&q=80"
            alt="Professional Pest Control"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <img 
                src="/images/logo.jpeg"
                alt="Safe Care Home"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-2xl font-bold">KP Pest Control</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-white">
              <a href="#services" className="hover:text-yellow-400 transition">Services</a>
              <a href="#about" className="hover:text-yellow-400 transition">About</a>
              <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
              <a href="tel:+918830073659" className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
                Call Now
              </a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional Pest Control Services
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Protecting your home and business from unwanted pests with safe, effective, and eco-friendly solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+918830073659" className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition">
              Get Free Quote
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition">
              Our Services
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">Fully certified professionals you can trust with your property</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Service</h3>
              <p className="text-gray-600">Emergency pest control services available around the clock</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Guaranteed Results</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all our services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bug, title: 'Termite Control', desc: 'Complete protection against destructive termites' },
              { icon: MousePointer2, title: 'Rodent Control', desc: 'Effective solutions for mice and rat infestations' },
              { icon: Bug, title: 'Bed Bug Treatment', desc: 'Thorough elimination of bed bug infestations' },
              { icon: SprayCan, title: 'Cockroach Control', desc: 'Professional cockroach elimination services' },
              { icon: Bug, title: 'Ant Control', desc: 'Targeted treatments for ant problems' },
              { icon: SprayCan, title: 'Mosquito Control', desc: 'Comprehensive mosquito prevention and control' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <service.icon className="text-yellow-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              KP Pest Control Services is a leading pest control company based in Pune, dedicated to providing top-notch pest management solutions to residential and commercial clients. Our mission is to ensure a pest-free environment using the most effective and environmentally friendly methods.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:+918830073659" className="text-gray-600 hover:text-yellow-500">+91 8830073659</a>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@kppestcontrolservices.com" className="text-gray-600 hover:text-yellow-500">info@kppestcontrolservices.com</a>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">S.No.46/3/78/2, Bhairavnath Nagar, Near Manisha Floormill, Pimple Gurav, Haveli, Pune 61</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://kppestcontrolservices.com/wp-content/uploads/2024/07/cropped-cropped-logo-1-150x150-1-150x150.jpeg"
                  alt="KP Pest Control Logo"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-bold">KP Pest Control</span>
              </div>
              <p className="text-gray-400">Professional pest control services for residential and commercial properties.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <p className="text-gray-400">Monday - Sunday: 24/7</p>
              <p className="text-gray-400">Emergency Service Available</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} KP Pest Control Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;