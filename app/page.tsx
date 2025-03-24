"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, X, ArrowRight, ChevronLeft, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const [expandedNode, setExpandedNode] = useState<string | null>(null)
  const [activePopup, setActivePopup] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const popupRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const isMobile = useMobile()

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setActivePopup(null)
      }
    }

    if (activePopup) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scrolling when popup is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [activePopup])

  // Add subtle background animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      document.documentElement.style.setProperty("--mouse-x", x.toString())
      document.documentElement.style.setProperty("--mouse-y", y.toString())
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const toggleNode = (nodeId: string) => {
    setExpandedNode(expandedNode === nodeId ? null : nodeId)
  }

  const openPopup = (popupId: string) => {
    setActivePopup(popupId)
  }

  const closePopup = () => {
    setActivePopup(null)
  }

  const navigateTo = (path: string) => {
    closePopup()
    router.push(path)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
  }

  const batchTrainingImages = [
    "/user-course.png",
    "/power-user-course.png",
    "/admin-course.png",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x,0)*30%)_calc(50%+var(--mouse-y,0)*30%),rgba(16,185,129,0.1)_0%,transparent_60%)] pointer-events-none"></div>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-green-700">SoftMania</h1>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-sm md:text-base shadow-sm">Contact Us</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 md:py-16 text-center relative z-0">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          I am new to Splunk... where to start??
        </h1>
      </section>

      {/* Mind Map UI */}
      <section className="container mx-auto px-4 py-12 mb-20 relative z-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-6 md:mb-8 text-center">
            Select Your Learning Goal
          </h2>

          {/* Main Mind Map Nodes */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Node 1 */}
            <div
              className={cn(
                "bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
                expandedNode === "admin-expert" && "ring-1 ring-green-500",
              )}
            >
              <button
                onClick={() => toggleNode("admin-expert")}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    1. Become a Real-Time Expert in Splunk Admin
                  </h3>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-green-600 transition-transform duration-300 ${expandedNode === "admin-expert" ? "rotate-180" : ""}`}
                />
              </button>

              {expandedNode === "admin-expert" && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-accordion-down">
                  <div className="grid gap-4">
                    <button
                      onClick={() => openPopup("self-learner")}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex justify-between items-center group"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800">1. I am a <span className="text-gray-500">Self-Learner</span></h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Access pre-recorded Splunk videos with sample previews
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => navigateTo("/SADR-6")}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex justify-between items-center group"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800">2. I Want One-to-One <span className="text-gray-500">Personalized Training</span></h4>
                        <p className="text-gray-600 text-sm mt-1">
                          View 6-month roadmaps for Splunk Admin & Developer paths
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Node 2 */}
            <div
              className={cn(
                "bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
                expandedNode === "interview-prep" && "ring-1 ring-green-500",
              )}
            >
              <button
                onClick={() => toggleNode("interview-prep")}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    2. Clear Interviews & Gain Real-Time Experience
                  </h3>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-green-600 transition-transform duration-300 ${expandedNode === "interview-prep" ? "rotate-180" : ""}`}
                />
              </button>

              {expandedNode === "interview-prep" && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-accordion-down">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">3-Month Splunk <span className="text-gray-500">Admin + Developer</span> Fast-Track</h4>
                    <p className="text-gray-600 text-sm mt-1 mb-4">
                      Accelerated program for interview preparation and hands-on experience
                    </p>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => openPopup("fast-track")}
                        className="bg-green-600 hover:bg-green-700 shadow-sm"
                      >
                        View Roadmap
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                        onClick={() => navigateTo("/SADR-3")}
                      >
                        More Details
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Node 3 */}
            <div
              className={cn(
                "bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
                expandedNode === "intermediate" && "ring-1 ring-green-500",
              )}
            >
              <button
                onClick={() => toggleNode("intermediate")}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    3. Gain Intermediate-Level Splunk Knowledge
                  </h3>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-green-600 transition-transform duration-300 ${expandedNode === "intermediate" ? "rotate-180" : ""}`}
                />
              </button>

              {expandedNode === "intermediate" && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-accordion-down">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-4">On-Demand Pre-Recorded Courses</h4>
                    <ul className="space-y-4">
                      <li className="border-b border-gray-200 pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-gray-800">Splunk <span className="text-gray-500">Admin Roadmap</span> (Day 1-100)</h5>
                            <p className="text-sm text-gray-600 mt-1">
                              Comprehensive admin training from basics to advanced
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2 h-auto"
                            onClick={() => window.open("https://splunk.softmania.in/course/splunk-admin-roadmap-day-1-to-100", "_blank")}
                          >
                            View More Details
                          </Button>
                        </div>
                      </li>
                      <li className="border-b border-gray-200 pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-gray-800">Splunk <span className="text-gray-500">Data Admin</span> Roadmap (Day 1-100)</h5>
                            <p className="text-sm text-gray-600 mt-1">Master data management in Splunk environments</p>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2 h-auto"
                            onClick={() => window.open("https://ramany-tech.trainercentralsite.in/#/allcourses", "_blank")}
                          >
                            View More Details
                          </Button>
                        </div>
                      </li>
                      <li className="border-b border-gray-200 pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-gray-800">Splunk <span className="text-gray-500">Cluster Admin</span> Roadmap (Day 1-100)</h5>
                            <p className="text-sm text-gray-600 mt-1">Learn to manage and optimize Splunk clusters</p>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2 h-auto"
                            onClick={() => window.open("https://splunk.softmania.in", "_blank")}
                          >
                            View More Details
                          </Button>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium">Splunk <span className="text-gray-500">Developer Roadmap</span> (Day 1-100)</h5>
                            <p className="text-sm text-gray-600 mt-1">Build custom apps and dashboards in Splunk</p>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2 h-auto"
                            onClick={() => window.open("https://splunk.softmania.in/course/splunk-enterprise-core-developer-roadmap-day-1-to-day-100", "_blank")}
                          >
                            View More Details
                          </Button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Node 4 */}
            <div
              className={cn(
                "bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
                expandedNode === "certification" && "ring-1 ring-green-500",
              )}
            >
              <button
                onClick={() => toggleNode("certification")}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">4. Get Certified Faster</h3>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-green-600 transition-transform duration-300 ${expandedNode === "certification" ? "rotate-180" : ""}`}
                />
              </button>

              {expandedNode === "certification" && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-accordion-down">
                  <div className="grid gap-4">
                    <button
                      onClick={() => openPopup("batch-training")}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex justify-between items-center group"
                    >
                      <div>
                        <h4 className="font-semibold bg-green-100 p-1 text-gray-800">1. Batch Training (Corporate Training)</h4>
                        <p className="text-gray-600 text-sm mt-1">Group training solutions for organizations</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => navigateTo("/certification")}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex justify-between items-center group"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800">2. Self-Learning Certification Path</h4>
                        <p className="text-gray-600 text-sm mt-1">Structured roadmap for Splunk certification exams</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12 relative z-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold">SoftMania</h2>
              </div>
              <p className="mt-2 text-gray-400">Expert Splunk Training Solutions</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-gray-400">info@softmania.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SoftMania. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Popups */}
      {/* Self-Learner Popup */}
      {activePopup === "self-learner" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            ref={popupRef}
            className={`bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-10 duration-300 ${isMobile ? "h-[90vh]" : ""}`}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold">Self-Learning Splunk Videos</h2>
              <button onClick={closePopup} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="/Soft Mania - Courses-1.png?height=400&width=700"
                  alt="Video Preview"
                  width={800}
                  height={500}
                  className="rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="font-semibold text-green-800 mb-2">Training Website Access</h3>
                <p className="text-gray-700 mb-3">
                  Get access to our comprehensive Splunk training videos library.
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700 shadow-sm"
                  onClick={() => window.open("https://splunk.softmania.in", "_blank")}
                >
                  Visit Training Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fast-Track Popup */}
      {activePopup === "fast-track" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            ref={popupRef}
            className={`bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-10 duration-300 ${isMobile ? "h-[90vh]" : ""}`}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold">3-Month Fast-Track Program</h2>
              <button onClick={closePopup} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="bg-green-100 p-6 rounded-lg mb-6 shadow-sm">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Interview Preparation & Real-Time Project Experience</h3>
                    <p className="text-gray-600">
                      Accelerated program designed to prepare you for Splunk interviews with hands-on project
                      experience.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 whitespace-nowrap"
                    onClick={() => navigateTo("/SADR-3")}
                  >
                    More Details
                  </Button>
                </div>
              </div>

              {/* Tabs */}

              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-4 border-b border-gray-200">
                  <h4 className="font-semibold">Fast-Track Roadmap preview</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-medium text-green-700 text-lg">Splunk Admin (20 Hours)</h5>
                      <div className="mt-3 grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">Requirement gathering</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>Identify data sources, log formats, and ingestion methods.</li>
                            <li>Define access controls, retention policies, and compliance needs.</li>
                            <li>Gather performance, scaling, and monitoring requirements.</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">Capacity Planning</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>Estimate data ingestion volume and indexing needs.</li>
                            <li>Plan hardware resources (CPU, RAM, storage) based on workload.</li>
                            <li>Consider license limits and future scalability.</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">Architecture Planning</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>Design Splunk deployment (Standalone vs. Clustered).</li>
                            <li>Plan search head, indexer, and forwarder distribution.</li>
                            <li>Ensure high availability, load balancing, and fault tolerance.</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">Setup a Splunk Clustered environment</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>How to create an AWS EC2 Linux instance & install Splunk</li>
                            <li>Indexer Cluster - 3 Indexers, 1 Cluster Manager</li>
                            <li>Search Head Cluster - 3 Search Heads, 1 Deployer</li>
                            <li>1 Monitoring Console, 1 License Manager</li>
                            <li>1 Intermediate Forwarder</li>
                            <li>1 UF - To collect Linux server logs</li>
                            <li>1 UF - To collect Windows server logs</li>
                            <li>Troubleshoot Common cluster issues</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">Deploy Apps to Clustered environment</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>How to Split the Apps/Add-ons to Deploy on Distributed environment?</li>
                            <li>How to Deploy Apps to Search Head Cluster?</li>
                            <li>How to Deploy Apps to Indexer Cluster?</li>
                            <li>How to Deploy Apps to Forwarders using Deployment Server?</li>
                            <li>How to create an Index in an Indexer Cluster?</li>
                            <li>How to clean data from Splunk Index?</li>
                            <li>How to delete an Index from Indexer Cluster?</li>
                            <li>Troubleshoot Common App Deployment Issues</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">Onboard the data to Splunk Clustered environment</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>How to Onboard data from Windows Active Directory</li>
                            <li>How to Onboard data from Windows DNS</li>
                            <li>How to Onboard data from Open VPN</li>
                            <li>How to Onboard data from Syslog</li>
                            <li>How to Onboard data from Intrusion Detection - OSSEC</li>
                            <li>Different methods in Data Onboarding</li>
                            <li>Different use-cases in Data Forwarding</li>
                            <li>Parsing - Data Quality check</li>
                            <li>How Splunk Stores the data?</li>
                            <li>How do you estimate/find/calculate License usage?- Standalone</li>
                            <li>What are all the types of Licenses available?</li>
                            <li>The difference between a Universal Forwarder and a Heavy Forwarder</li>
                            <li>How to select a Forwarder?</li>
                            <li>Troubleshoot Common Data Onboarding / Parsing issues</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 text-lg">Splunk Developer (20 Hours)</h5>
                      <div className="mt-3 grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">Field Extraction from data</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>Regular Expression basics</li>
                            <li>How to extract Field from Unstructured data?</li>
                            <li>How to create calculated fields?</li>
                            <li>How to add lookup information into the raw data?</li>
                            <li>Why sourcetype matters in Splunk?</li>
                            <li>Where to deploy the particular property of configuration files?</li>
                            <li>How to create eventtypes & tags?</li>
                            <li>Troubleshoot Common Field extraction issues</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">CIM Mapping</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>What is Common Information Model (CIM)?</li>
                            <li>How CIM is being used?</li>
                            <li>How to use Data Model in Splunk?</li>
                            <li>How to Write queries for common scenarios?</li>
                            <li>Troubleshoot common CIM Mapping issues</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">Dashboard development</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            <li>How to create Different visualizations in Splunk?</li>
                            <li>How to add Different Inputs to Splunk Dashboards?</li>
                            <li>How to provide access for a specific dashboard to specific user?</li>
                            <li>How do you create dependent dropdowns?</li>
                            <li>How do you create a drill-down for panels?</li>
                            <li>How do you handle tokens inside the dashboard?</li>
                            <li>Troubleshoot Common Dashboard issues</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border border-gray-200 hover:border-green-200 transition-colors">
                          <h6 className="font-semibold mb-2">Reports & Alerts creation</h6>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>How to create a Report?</li>
                          <li>How to create an Alert?</li>
                          <li>Troubleshoot common Reporting & Alerting Issues</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-200 flex justify-between flex-wrap gap-4">

                  <Button 
                    variant="outline"
                    onClick={() => window.open("https://drive.softmania.in/external/7b4bfcac344af772b67c4fc443c8d80fc1f78186037091f84874288b6afec737", "_blank")}>
                    Download PDF
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 shadow-sm"
                    onClick={() => window.open("https://www.softmania.in/splunk-training/index", "_blank")}>
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Batch Training Popup */}
      {activePopup === "batch-training" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            ref={popupRef}
            className={`bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-10 duration-300 ${isMobile ? "h-[90vh]" : ""}`}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold">Batch Training (Corporate Training)</h2>
              <button onClick={closePopup} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="text-center py-6 mb-6">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                    <ChevronRight className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                  <p className="text-gray-600 max-w-lg mx-auto">
                    Our corporate training programs are currently being developed. Leave your contact information to be
                    notified when they become available.
                  </p>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative mb-8 bg-gray-100 rounded-lg p-4 shadow-sm">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {batchTrainingImages.map((src, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="aspect-[2/3] relative">
                          <Image
                            src={src || "/placeholder-logo.png"}
                            alt={`Corporate Training Slide ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <p className="text-center mt-2 font-medium">
                          {index === 0 && "Splunk Core Certified User"}
                          {index === 1 && "Splunk Core Certified Power User"}
                          {index === 2 && "Splunk Enterprise Certified Admin"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
                <div className="flex justify-center mt-4 gap-2">
                  {batchTrainingImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-green-600" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-green-600 hover:bg-green-700 shadow-sm">Notify Me When Available</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

