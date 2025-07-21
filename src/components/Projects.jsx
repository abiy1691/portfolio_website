"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Eye, X, ChevronLeft, ChevronRight, Upload } from "lucide-react"
import rentalImage1 from '../assets/cvcv.jpg'
import rentalImage2 from '../assets/cvcv.jpg'
import myprofile from '../assets/Screenshot1.png'
// Import your images here - you can drag and drop them into src/assets/ folder
// Then import them like this:
// import rentalImage1 from '../assets/rental-1.jpg'
// import rentalImage2 from '../assets/rental-2.jpg'
// import rentalImage3 from '../assets/rental-3.jpg'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedDescriptions, setExpandedDescriptions] = useState({})

  const projects = [
    {
      title: "Residential house rental management website",
      description:
        "A comprehensive full-stack residential house rental management system built using the MERN stack. This application allows property owners to list their properties, manage tenant applications, track rental payments, and handle maintenance requests. Features include user authentication, property search and filtering, online payment integration, tenant screening, lease management, maintenance tracking, and a responsive dashboard for both landlords and tenants. The system also includes automated rent reminders, document storage, and detailed reporting capabilities.",
      images: [
        // 🎯 DRAG AND DROP YOUR IMAGES HERE:
        // Replace these placeholder paths with your actual imported images
        // Example: rentalImage1, rentalImage2, rentalImage3
      
        rentalImage1,
        rentalImage2,
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/abiy1691/residential-house-rental-management-project-",
      liveUrl: "https://your-rental-demo.com",
      featured: true,
    },
    {
      title: "Health Insurance System Website",
      description:
        "A comprehensive health insurance management system designed to streamline insurance processes for both providers and patients. The platform features patient registration and profile management, insurance plan comparison and enrollment, claims processing and tracking, provider network directory, appointment scheduling, medical history management, and real-time claim status updates. The system includes secure document upload, automated eligibility verification, premium calculation, and detailed analytics for insurance providers.",
      images: [
        // 🎯 DRAG AND DROP YOUR IMAGES HERE:
        "/placeholder.svg?height=300&width=400&text=Health+Image+1",
        "/placeholder.svg?height=300&width=400&text=Health+Image+2",
        "/placeholder.svg?height=300&width=400&text=Health+Image+3",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/abiy1691/health-insurance-system",
      liveUrl: "https://your-health-insurance.com",
      featured: true,
    },
    {
      title: "Swimming Pool Contractor website",
      description:
        "A professional website for swimming pool contractors featuring project showcases, service offerings, and client testimonials. The site includes an interactive project gallery, service request forms, cost estimation tools, maintenance scheduling, before/after project comparisons, and a comprehensive portfolio of completed installations. Features responsive design, contact forms, quote requests, and integration with social media platforms for showcasing recent work.",
      images: [
        // 🎯 DRAG AND DROP YOUR IMAGES HERE:
       myprofile,
       myprofile,
      ],
      technologies: ["React", "Chart.js", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/abiy1691/swimming-pool-contractor",
      liveUrl: "https://your-pool-contractor.com",
      featured: false,
    },
    {
      title: "Traditional Ethiopian Musical Instruments selling website",
      description:
        "An e-commerce platform dedicated to selling traditional Ethiopian musical instruments. The website features detailed instrument catalogs with audio samples, cultural background information, artist profiles, and educational content about Ethiopian music traditions. Includes shopping cart functionality, secure payment processing, instrument care guides, video tutorials, and a blog section featuring Ethiopian music history and contemporary artists.",
      images: [
        // 🎯 DRAG AND DROP YOUR IMAGES HERE:
        "/placeholder.svg?height=300&width=400&text=Music+Image+1",
        "/placeholder.svg?height=300&width=400&text=Music+Image+2",
      ],
      technologies: ["Vue.js", "D3.js", "Express.js", "MySQL"],
      githubUrl: "https://github.com/abiy1691/ethiopian-instruments-store",
      liveUrl: "https://your-instruments-store.com",
      featured: false,
    },
  ]

  const toggleDescription = (projectTitle) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [projectTitle]: !prev[projectTitle],
    }))
  }

  const openImageModal = (project, imageIndex = 0) => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
  }

  const closeImageModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.substr(0, maxLength) + "..."
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative group cursor-pointer" onClick={() => openImageModal(project, 0)}>
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.images[0].includes("placeholder") && (
                    <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                      <div className="text-center text-slate-500 dark:text-slate-400">
                        <Upload size={32} className="mx-auto mb-2" />
                        <p className="text-sm">Drag & Drop Image Here</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <div className="p-2 bg-white rounded-full text-slate-900 hover:bg-slate-100 transition-colors duration-200">
                    <Eye size={20} />
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{project.title}</h3>

                <div className="mb-4">
                  <p className="text-slate-600 dark:text-slate-300">
                    {expandedDescriptions[project.title] ? project.description : truncateText(project.description)}
                  </p>
                  {project.description.length > 150 && (
                    <button
                      onClick={() => toggleDescription(project.title)}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium mt-2 transition-colors duration-200"
                    >
                      {expandedDescriptions[project.title] ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Image Modal with Horizontal Scrolling */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
              onClick={closeImageModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeImageModal}
                  className="absolute top-4 right-4 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
                >
                  <X size={24} />
                </button>

                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />

                  {selectedProject.images.length > 1 && (
                    <>
                      <motion.button
                        onClick={prevImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
                      >
                        <ChevronLeft size={24} />
                      </motion.button>
                      <motion.button
                        onClick={nextImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200 border border-white/20"
                      >
                        <ChevronRight size={24} />
                      </motion.button>
                    </>
                  )}
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject.images.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        whileHover={{ scale: 1.2 }}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                )}

                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
                  <h3 className="text-white text-xl font-semibold mb-1">{selectedProject.title}</h3>
                  <p className="text-white/80 text-sm">
                    Image {currentImageIndex + 1} of {selectedProject.images.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
