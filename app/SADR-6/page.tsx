"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Server, Code, Award } from "lucide-react"
import { ExpandableSection } from "@/components/expandable-section"
import { LearningTrackCard } from "@/components/learning-track-card"
import { ResourceCard } from "@/components/resource-card"
import { CourseCard } from "@/components/course-card"
import { CustomTrackForm } from "@/components/custom-track-form"
import { SecondaryCoursesSection } from "@/components/secondary-courses-section"
import { ProgressRoadmap } from "@/components/progress-roadmap"
import { MindmapVisualization } from "@/components/mindmap-visualization"
import { StickyNav } from "@/components/sticky-nav"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const whyTrainingRef = useRef<HTMLElement>(null)
  const learningTrackRef = useRef<HTMLElement>(null)
  const resourcesRef = useRef<HTMLElement>(null)
  const coursesRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)

  const [customTracks, setCustomTracks] = useState<
    Array<{ id: string; title: string; description: string; link?: string; isCustom?: boolean }>
  >([])
  const [isVisible, setIsVisible] = useState(false)
  const [showMindmap, setShowMindmap] = useState(true)

  useEffect(() => {
    // Add fade-in animation for page elements
    setIsVisible(true)

    // Add scroll event listener for animations
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // You could add scroll-based animations here
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addCustomTrack = (track: { title: string; description: string; link?: string }) => {
    const newTrack = {
      id: `custom-${Date.now()}`,
      ...track,
      isCustom: true,
    }
    setCustomTracks([...customTracks, newTrack])
  }

  // Sample course progress data (in a real app, this would come from a database)
  const courseProgress = {
    admin: {
      installation: 100,
      userManagement: 75,
      dataOnboarding: 30,
      performance: 0,
    },
    developer: {
      searchQueries: 100,
      dashboards: 60,
      appDevelopment: 20,
      apiIntegration: 0,
    },
  }

  // Mindmap data structure
  const learningTrackData = {
    id: "root",
    title: "Splunk Learning Path",
    description: "Complete learning journey for Splunk mastery",
    children: [
      {
        id: "basics",
        title: "Splunk Basics",
        description: "Learn the fundamentals of Splunk architecture, components, and basic search functionality.",
        link: "https://example.com/splunk-basics",
        children: [
          {
            id: "installation",
            title: "Installation & Setup",
            description: "Learn how to install and configure Splunk in various environments",
            link: "https://example.com/splunk-installation",
          },
          {
            id: "ui",
            title: "UI Navigation",
            description: "Master the Splunk user interface and basic navigation",
            link: "https://example.com/splunk-ui",
          },
        ],
      },
      {
        id: "labs",
        title: "Hands-on Labs",
        description: "Apply your knowledge with guided labs and exercises to reinforce your understanding.",
        link: "https://example.com/splunk-labs",
        children: [
          {
            id: "search",
            title: "Search Exercises",
            description: "Practice creating and optimizing Splunk searches",
            link: "https://example.com/splunk-search-exercises",
          },
          {
            id: "dashboards",
            title: "Dashboard Creation",
            description: "Build your first Splunk dashboards with guided examples",
            link: "https://example.com/splunk-dashboards",
          },
        ],
      },
      {
        id: "advanced",
        title: "Advanced Configurations",
        description: "Explore advanced Splunk configurations, custom dashboards, and reporting capabilities.",
        children: [
          {
            id: "admin",
            title: "Admin Configuration",
            description: "Advanced administrative configurations and best practices",
            link: "https://example.com/splunk-admin",
          },
          {
            id: "reporting",
            title: "Advanced Reporting",
            description: "Create sophisticated reports and visualizations",
            link: "https://example.com/splunk-reporting",
          },
        ],
      },
    ],
  }

  // FAQ data
  const faqData = [
    {
      question: "What is the duration of the training?",
      answer:
        "Each training program lasts between 4-8 weeks, depending on the specific course and your learning pace. Our one-to-one approach allows us to adjust the timeline based on your progress and availability.",
    },
    {
      question: "Do I get certification?",
      answer:
        "Yes, you receive an official SoftMania certification upon successful completion of the course. This certification validates your skills and can be shared on professional platforms like LinkedIn.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, refunds are available within the first 7 days of starting the course if you're not satisfied with the training. After this period, partial refunds may be considered on a case-by-case basis.",
    },
    {
      question: "How are the sessions conducted?",
      answer:
        "Sessions are conducted via video conferencing platforms like Zoom or Microsoft Teams. Each session typically lasts 60-90 minutes and includes theoretical concepts, practical demonstrations, and hands-on exercises.",
    },
    {
      question: "Do I need any special software or hardware?",
      answer:
        "You'll need a computer with at least 8GB RAM, stable internet connection, and the ability to install Splunk software. We provide detailed setup instructions before the course begins.",
    },
    {
      question: "Can I reschedule my sessions?",
      answer:
        "Yes, you can reschedule sessions with at least 24 hours notice. We understand that schedules can change, and we try to be as flexible as possible to accommodate your needs.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Navigation */}
      <StickyNav
        sections={[
          { name: "Top", ref: heroRef },
          { name: "Why This Training", ref: whyTrainingRef },
          { name: "Learning Track", ref: learningTrackRef },
          { name: "Resources", ref: resourcesRef },
          { name: "Courses", ref: coursesRef },
          { name: "FAQ", ref: faqRef },
        ]}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative bg-gradient-to-b from-primary/10 to-background py-24 md:py-32 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary">
              One-to-One Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
              Master Splunk with Personalized Training
            </p>
            <Button
              size="lg"
              className="mt-6 h-12 px-8 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px]"
              onClick={scrollToCourses}
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why This Training Section */}
      <section
        ref={whyTrainingRef}
        className={`py-16 container px-4 md:px-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="max-w-3xl mx-auto">
          <ExpandableSection
            title="Why This Training?"
            initialContent="Our one-to-one training ensures hands-on learning, real-world scenarios, and direct mentorship."
            expandedContent="Personalized mentorship, career-focused guidance, and structured learning paths tailored for individual success. Get expert mentorship, real-world use cases, and customized learning paths to suit your career goals. Learn efficiently with structured guidance. Our trainers have years of industry experience and will help you navigate complex scenarios you'll encounter in real-world environments."
          />
        </div>
      </section>

      {/* Free Learning Track Section */}
      <section
        ref={learningTrackRef}
        className={`py-16 bg-muted/30 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Free Learning Track</h2>
              <Button variant="outline" className="mt-4 md:mt-0" onClick={() => setShowMindmap(!showMindmap)}>
                {showMindmap ? "Show List View" : "Show Mindmap View"}
              </Button>
            </div>

            {showMindmap ? (
              <MindmapVisualization rootNode={learningTrackData} customTracks={customTracks} />
            ) : (
              <div className="space-y-8">
                <LearningTrackCard
                  title="Splunk Basics"
                  description="Learn the fundamentals of Splunk architecture, components, and basic search functionality."
                  expandedContent="Start your Splunk journey by understanding core concepts like indexing, searching, and basic reporting. You'll learn how to navigate the Splunk interface, create your first searches, and understand how data flows through the Splunk ecosystem."
                  link="https://example.com/splunk-basics"
                />

                <LearningTrackCard
                  title="Hands-on Labs"
                  description="Apply your knowledge with guided labs and exercises to reinforce your understanding."
                  expandedContent="Practice makes perfect! Our hands-on labs provide real-world scenarios where you'll configure Splunk, troubleshoot common issues, and build practical solutions. Each lab includes step-by-step instructions and validation checks to ensure you're on the right track."
                  link="https://example.com/splunk-labs"
                />

                <LearningTrackCard
                  title="Advanced Configurations"
                  description="Explore advanced Splunk configurations, custom dashboards, and reporting capabilities."
                  expandedContent="Take your Splunk skills to the next level by mastering advanced configurations, learning how to build sophisticated dashboards, and creating complex reports. You'll also explore Splunk's alerting capabilities, scheduled reports, and integration with other systems."
                />

                {customTracks.map((track, index) => (
                  <LearningTrackCard
                    key={track.id}
                    title={track.title}
                    description={track.description}
                    expandedContent={track.description}
                    link={track.link}
                    isCustom={true}
                  />
                ))}

                <CustomTrackForm onAddTrack={addCustomTrack} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Roadmap Helping Resources Section */}
      <section
        ref={resourcesRef}
        className={`py-16 container px-4 md:px-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Roadmap Helping Free & Paid Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              icon={<Server className="h-10 w-10 text-primary" />}
              title="Splunk Standalone Server Setup"
              description="Step-by-step guide to set up your own Splunk server environment for practice."
              expandedContent="This comprehensive guide walks you through the entire process of setting up a Splunk standalone server. You'll learn how to download and install Splunk, configure initial settings, set up inputs, and verify your installation. Perfect for beginners who want to create their own test environment."
              tag="Free"
              isPaid={false}
              accessType="form"
              accessLink="https://forms.softmania.com/splunk-server-setup"
              formFields={["Name", "Email", "Company", "Experience Level", "Primary Use Case"]}
            />

            <ResourceCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Essential Splunk Admin Commands"
              description="Comprehensive list of must-know Splunk administrative commands with examples."
              expandedContent="Master the essential Splunk administrative commands that every Splunk professional should know. This resource includes detailed explanations, syntax examples, and use cases for each command. You'll learn how to manage indexes, monitor Splunk health, and troubleshoot common issues."
              tag="Free"
              isPaid={false}
              accessType="form"
              accessLink="https://forms.softmania.com/admin-commands"
              formFields={["Name", "Email", "Current Role", "Splunk Experience"]}
            />

            <ResourceCard
              icon={<Award className="h-10 w-10 text-[#FFD700]" />}
              title="Advanced Splunk Query Mastery"
              description="Advanced techniques for creating powerful, optimized Splunk queries for complex data analysis."
              expandedContent="Take your Splunk search skills to expert level with our advanced query mastery guide. Learn sophisticated techniques like subsearches, transactions, lookups, and statistical commands. This premium resource includes downloadable examples, performance optimization tips, and real-world scenarios that will transform you into a Splunk search wizard."
              tag="Paid"
              isPaid={true}
              accessType="booking"
              accessLink="https://calendly.com/softmania/splunk-query-mastery"
              bookingDetails={{
                duration: "60 minutes",
                availability: "Mon-Fri, 9AM-6PM EST",
              }}
            />
          </div>
        </div>
      </section>

      {/* One-to-One Course Section with Progress Roadmap */}
      <section
        ref={coursesRef}
        className={`py-16 bg-muted/30 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">One-to-One Course Options</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-8">
                <CourseCard
                  title="Splunk Admin Roadmap"
                  description="A structured roadmap covering Splunk administration essentials."
                  features={[
                    "Installation & Deployment",
                    "User & Role Management",
                    "Data Onboarding & Indexing",
                    "Performance Tuning",
                  ]}
                  detailedDescription="Our Splunk Admin Roadmap provides a comprehensive path to mastering Splunk administration. Starting with installation and basic configuration, you'll progress through user management, data onboarding, and advanced performance optimization techniques. Each session is tailored to your specific needs and environment."
                  expandedDetails="The course includes hands-on exercises, real-world scenarios, and best practices from experienced Splunk administrators. You'll learn how to troubleshoot common issues, implement security best practices, and optimize your Splunk deployment for performance and scalability. By the end of this roadmap, you'll have the skills and confidence to manage enterprise-level Splunk environments."
                  duration="6-8 weeks"
                  audience={["IT Administrators", "DevOps Engineers", "System Administrators"]}
                  prerequisites={[
                    "Basic IT infrastructure knowledge",
                    "Familiarity with Linux/Windows server administration",
                    "Understanding of data concepts",
                  ]}
                  certification={true}
                  relatedCourses={[
                    {
                      title: "Splunk Cloud Administration",
                      description: "Learn to manage and optimize Splunk Cloud deployments",
                      link: "#splunk-cloud",
                    },
                    {
                      title: "Splunk Security Essentials",
                      description: "Security monitoring and threat detection with Splunk",
                      link: "#splunk-security",
                    },
                    {
                      title: "Enterprise Splunk Deployment",
                      description: "Design and implement large-scale Splunk environments",
                      link: "#enterprise-deployment",
                    },
                  ]}
                />

                <ProgressRoadmap
                  title="Admin Roadmap Progress"
                  steps={[
                    { name: "Installation & Deployment", progress: courseProgress.admin.installation },
                    { name: "User & Role Management", progress: courseProgress.admin.userManagement },
                    { name: "Data Onboarding & Indexing", progress: courseProgress.admin.dataOnboarding },
                    { name: "Performance Tuning", progress: courseProgress.admin.performance },
                  ]}
                />
              </div>

              <div className="space-y-8">
                <CourseCard
                  title="Splunk Developer Roadmap"
                  description="Master Splunk development with personalized guidance on searches, dashboards, and apps."
                  features={["Advanced Search Queries", "Dashboard Creation", "App Development", "API Integration"]}
                  detailedDescription="The Splunk Developer Roadmap focuses on building your skills as a Splunk developer. You'll learn advanced search techniques, dashboard creation, custom visualization development, and app building. Our expert instructors will guide you through each step of the development process."
                  expandedDetails="This roadmap covers everything from SPL (Search Processing Language) mastery to creating production-ready Splunk apps. You'll learn how to leverage Splunk's REST API, create custom commands, and integrate with external systems. The course includes practical projects that you can add to your portfolio, demonstrating your ability to solve real business problems with Splunk."
                  duration="8-10 weeks"
                  audience={["Software Developers", "Data Analysts", "IT Professionals"]}
                  prerequisites={[
                    "Basic programming knowledge",
                    "Understanding of web technologies (HTML, CSS, JavaScript)",
                    "Familiarity with Splunk basics",
                  ]}
                  certification={true}
                  relatedCourses={[
                    {
                      title: "Advanced SPL for Developers",
                      description: "Master complex search processing language techniques",
                      link: "#advanced-spl",
                    },
                    {
                      title: "Splunk App Certification Prep",
                      description: "Prepare your custom Splunk apps for certification",
                      link: "#app-certification",
                    },
                    {
                      title: "Splunk Dashboard Framework",
                      description: "Build advanced dashboards with the latest framework",
                      link: "#dashboard-framework",
                    },
                  ]}
                />

                <ProgressRoadmap
                  title="Developer Roadmap Progress"
                  steps={[
                    { name: "Advanced Search Queries", progress: courseProgress.developer.searchQueries },
                    { name: "Dashboard Creation", progress: courseProgress.developer.dashboards },
                    { name: "App Development", progress: courseProgress.developer.appDevelopment },
                    { name: "API Integration", progress: courseProgress.developer.apiIntegration },
                  ]}
                />
              </div>
            </div>

            <SecondaryCoursesSection />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className={`py-16 container px-4 md:px-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
          <FAQSection faqs={faqData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2024 SoftMania Training. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm">
                Terms
              </Button>
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

