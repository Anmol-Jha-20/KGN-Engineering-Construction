import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

export default function ContactTestimonialsUI() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      name: "Ravi Mehta",
      text: "KGN Engineering Construction Delivered Exceptional Quality In Their Construction Services. The Team Was Highly Professional And Ensured That Every Detail Was Meticulously Handled. I Am Thoroughly Impressed With Their Dedication And Workmanship.",
      avatar: "RM",
    },
    {
      name: "Priya Sharma",
      text: "Outstanding service and attention to detail. The construction team exceeded our expectations in every way. Their commitment to quality and timely delivery is commendable.",
      avatar: "PS",
    },
    {
      name: "Amit Kumar",
      text: "Professional approach and excellent craftsmanship. The project was completed on time and within budget. Highly recommend their services for any construction needs.",
      avatar: "AK",
    },
    {
      name: "Sunita Gupta",
      text: "Exceptional quality and reliable service. The team was responsive to all our requirements and delivered beyond our expectations. Great experience working with them.",
      avatar: "SG",
    },
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Form Section */}
          <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-3xl p-6 lg:p-8 shadow-2xl">
            <div className="mb-6">
              <p className="text-white/80 text-sm font-medium tracking-wider uppercase mb-2">
                GET IN TOUCH
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                How May We Help You!
              </h2>
            </div>

            <div className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Subject and Phone Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Subject*
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="construction">Construction Services</option>
                    <option value="consultation">Consultation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1253 457 7840"
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                Send Message
              </button>
            </div>

            {/* Help Button */}
            {/* <div className="fixed bottom-6 left-6 z-50">
              <div className="relative">
                <button className="bg-white text-orange-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <MessageCircle size={24} />
                </button>
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                  Need Help ?
                </div>
              </div>
            </div> */}
          </div>

          {/* Testimonials Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-2">
                OUR TESTIMONIALS
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                What They Say About Our
              </h2>
            </div>

            {/* Testimonial Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 shadow-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                  </div>
                  <div className="ml-auto">
                    <div className="text-orange-400 text-4xl">"</div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-orange-500 w-8"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <div className="transform rotate-90">
            <ChevronLeft size={20} />
          </div>
        </button>
        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-orange-400 text-xs font-medium tracking-wider">
          BACK TO TOP
        </div>
      </div> */}
    </div>
  );
}
