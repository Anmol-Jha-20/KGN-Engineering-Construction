import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  Building,
  Wrench,
  Award,
  ArrowRight,
  Filter,
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("completed");

  const completedProjects = [
    {
      id: 1,
      title: "Chip Silo 20 m ID",
      category: "Industrial",
      location: "Bhadrachalam, Telangana",
      completionDate: "December 2024",
      duration: "18 months",
      projectValue: "₹45 Crores",
      description:
        "Complete construction of a state-of-the-art steel manufacturing facility with advanced refractory installations for high-temperature operations.",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&h=300&fit=crop",
      features: [
        "Refractory Installation",
        "Structural Steel Work",
        "Industrial Flooring",
        "Safety Systems",
      ],
      clientTestimonial:
        "Exceptional quality and timely delivery. The team exceeded our expectations.",
      status: "completed",
    },
    {
      id: 2,
      title: "Thermal Power Plant Boiler Installation",
      category: "Energy",
      location: "Pune, Maharashtra",
      completionDate: "October 2024",
      duration: "24 months",
      projectValue: "₹78 Crores",
      description:
        "Installation of high-efficiency boilers with specialized refractory lining for a 500MW thermal power plant.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
      features: [
        "Boiler Installation",
        "Refractory Lining",
        "Insulation Work",
        "Quality Testing",
      ],
      clientTestimonial:
        "Professional team with deep expertise in thermal installations.",
      status: "completed",
    },
    {
      id: 3,
      title: "Cement Plant Kiln Renovation",
      category: "Industrial",
      location: "Rajasthan",
      completionDate: "August 2024",
      duration: "12 months",
      projectValue: "₹32 Crores",
      description:
        "Complete renovation of cement kiln with advanced refractory materials and improved thermal efficiency systems.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
      features: [
        "Kiln Renovation",
        "Refractory Replacement",
        "Thermal Optimization",
        "Maintenance Training",
      ],
      clientTestimonial:
        "Outstanding results with significant improvement in operational efficiency.",
      status: "completed",
    },
    {
      id: 4,
      title: "Commercial Complex Construction",
      category: "Commercial",
      location: "Bangalore, Karnataka",
      completionDate: "June 2024",
      duration: "20 months",
      projectValue: "₹56 Crores",
      description:
        "Modern commercial complex with sustainable construction practices and energy-efficient systems.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      features: [
        "Green Building",
        "Modern Architecture",
        "Energy Systems",
        "Landscape Design",
      ],
      clientTestimonial:
        "Impressive attention to detail and sustainable construction practices.",
      status: "completed",
    },
  ];

  const ongoingProjects = [
    {
      id: 5,
      title: "Petrochemical Plant Expansion",
      category: "Petrochemical",
      location: "Gujarat",
      expectedCompletion: "March 2026",
      duration: "30 months",
      projectValue: "₹125 Crores",
      description:
        "Large-scale expansion of petrochemical processing facility with specialized refractory installations for chemical resistance.",
      image:
        "https://images.unsplash.com/photo-1613346945084-35cccc812dd4?w=500&h=300&fit=crop",
      features: [
        "Chemical Resistant Refractories",
        "Process Equipment",
        "Safety Systems",
        "Environmental Controls",
      ],
      progress: 65,
      milestones: [
        "Foundation Complete",
        "Structural Work 80%",
        "Refractory Installation 40%",
      ],
      status: "ongoing",
    },
    {
      id: 6,
      title: "High-Rise Residential Tower",
      category: "Residential",
      location: "Noida, UP",
      expectedCompletion: "December 2025",
      duration: "24 months",
      projectValue: "₹89 Crores",
      description:
        "Luxury residential tower with modern amenities and advanced construction techniques.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
      features: [
        "High-Rise Construction",
        "Luxury Finishes",
        "Smart Home Integration",
        "Recreation Facilities",
      ],
      progress: 75,
      milestones: ["Structure Complete", "MEP Work 60%", "Interior Work 30%"],
      status: "ongoing",
    },
    {
      id: 7,
      title: "Steel Mill Furnace Upgrade",
      category: "Industrial",
      location: "Odisha",
      expectedCompletion: "September 2025",
      duration: "15 months",
      projectValue: "₹42 Crores",
      description:
        "Upgrading existing furnace systems with advanced refractory materials for improved efficiency and longevity.",
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop",
      features: [
        "Furnace Upgrade",
        "Advanced Refractories",
        "Automation Systems",
        "Performance Optimization",
      ],
      progress: 45,
      milestones: [
        "Design Complete",
        "Equipment Procurement 70%",
        "Installation 20%",
      ],
      status: "ongoing",
    },
  ];

  const allProjects = [...completedProjects, ...ongoingProjects];
  const currentProjects =
    activeTab === "completed" ? completedProjects : ongoingProjects;

  const filteredProjects =
    activeFilter === "all"
      ? currentProjects
      : currentProjects.filter((project) => project.category === activeFilter);

  const categories = [
    "all",
    "Industrial",
    "Energy",
    "Commercial",
    "Residential",
    "Petrochemical",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100">
              Delivering exceptional construction and refractory installation
              services that exceed client expectations
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-yellow-100">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold">13+</div>
                <div className="text-yellow-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-yellow-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-2 rounded-lg">
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "completed"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              <CheckCircle className="inline-block w-5 h-5 mr-2" />
              Completed Projects
            </button>
            <button
              onClick={() => setActiveTab("ongoing")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "ongoing"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              <Clock className="inline-block w-5 h-5 mr-2" />
              Ongoing Projects
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === category
                  ? "bg-yellow-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-yellow-100"
              }`}
            >
              <Filter className="inline-block w-4 h-4 mr-2" />
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === "completed"
                        ? "bg-green-500 text-white"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {project.status === "completed"
                      ? "Completed"
                      : "In Progress"}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                {project.progress && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 rounded-full p-2">
                      <div className="flex justify-between text-white text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                    <span className="text-sm">
                      {project.completionDate || project.expectedCompletion}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building className="w-4 h-4 mr-2 text-orange-500" />
                    <span className="text-sm font-semibold">
                      {project.projectValue}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {project.milestones && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Recent Milestones:
                    </h4>
                    <div className="space-y-1">
                      {project.milestones.map((milestone, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {milestone}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.clientTestimonial && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-600 italic">
                      "{project.clientTestimonial}"
                    </p>
                  </div>
                )}

                <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters to see more projects.
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how we can bring your vision to life with our
            expertise in construction and refractory installations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
              <Wrench className="w-5 h-5 mr-2" />
              Get Quote
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
              <Award className="w-5 h-5 mr-2" />
              Our Services
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
