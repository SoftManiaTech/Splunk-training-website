"use client"

import { useState, useEffect, type RefObject } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, BookOpen, Server, Layers, GraduationCap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Section {
  name: string
  ref: RefObject<HTMLElement>
}

interface FloatingNavMenuProps {
  sections: Section[]
}

export function FloatingNavMenu({ sections }: FloatingNavMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Find the current active section based on scroll position
      for (const section of sections) {
        const element = section.ref.current
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (section: Section) => {
    section.ref.current?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  // Map section names to icons
  const getIconForSection = (name: string) => {
    switch (name.toLowerCase()) {
      case "top":
        return <Home className="h-4 w-4" />
      case "why this training":
        return <BookOpen className="h-4 w-4" />
      case "learning track":
        return <Layers className="h-4 w-4" />
      case "resources":
        return <Server className="h-4 w-4" />
      case "courses":
        return <GraduationCap className="h-4 w-4" />
      default:
        return <Home className="h-4 w-4" />
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-lg p-2 mb-2 flex flex-col gap-1 border border-muted"
          >
            {sections.map((section) => (
              <Button
                key={section.name}
                variant={activeSection === section.name ? "default" : "ghost"}
                size="sm"
                className="justify-start gap-2"
                onClick={() => scrollToSection(section)}
              >
                {getIconForSection(section.name)}
                {section.name}
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className={`h-12 w-12 rounded-full shadow-lg ${
          isOpen ? "bg-primary/90 hover:bg-primary/80" : "bg-primary hover:bg-primary/90"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </div>
  )
}

