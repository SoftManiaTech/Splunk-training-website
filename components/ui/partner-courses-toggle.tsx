"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { CourseCard } from "@/components/course-card"

export function PartnerCoursesToggle() {
  const [showPartnerCourses, setShowPartnerCourses] = useState(false)

  return (
    <div className="w-full max-w-3xl">
      <div className="flex items-center justify-center space-x-2 mb-8">
        <Switch id="partner-courses" checked={showPartnerCourses} onCheckedChange={setShowPartnerCourses} />
        <Label htmlFor="partner-courses" className="cursor-pointer">
          Show SoftMania Partner Courses
        </Label>
      </div>

      {showPartnerCourses && (
        <div className="mt-8 space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">SoftMania Partner Courses</h3>
            <p className="text-muted-foreground">Additional specialized training from our trusted partners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CourseCard
              title="Cybersecurity Fundamentals"
              description="Essential cybersecurity principles and practices for IT professionals."
              features={[
                "Security Frameworks & Compliance",
                "Threat Detection & Analysis",
                "Incident Response",
                "Security Tools & Technologies",
              ]}
              detailedDescription="Our Cybersecurity Fundamentals course provides a comprehensive introduction to the essential principles and practices of modern cybersecurity. Designed for IT professionals looking to expand their security knowledge, this course covers key frameworks, threat detection methodologies, and practical incident response techniques."
              expandedDetails="This course is delivered by SoftMania's security partners, industry experts with extensive experience in enterprise security. You'll learn through a combination of theoretical concepts and hands-on labs, giving you practical experience with real security tools and scenarios. By the end of this course, you'll have a solid foundation in cybersecurity principles that you can apply immediately in your organization."
              relatedCourses={[
                { title: "Advanced Threat Hunting", link: "#threat-hunting" },
                { title: "Security Compliance for Enterprises", link: "#compliance" },
              ]}
            />

            <CourseCard
              title="Cloud Security & Compliance"
              description="Secure cloud deployments and maintain regulatory compliance across platforms."
              features={[
                "Cloud Security Architecture",
                "Multi-Cloud Security Strategies",
                "Compliance Frameworks",
                "Automated Security Controls",
              ]}
              detailedDescription="The Cloud Security & Compliance course focuses on securing cloud environments across major platforms including AWS, Azure, and GCP. Learn how to design secure cloud architectures, implement proper access controls, and maintain regulatory compliance in dynamic cloud environments."
              expandedDetails="Taught by certified cloud security professionals, this course combines cloud architecture principles with practical security implementations. You'll work through real-world scenarios to secure cloud resources, detect misconfigurations, and implement automated remediation. The course covers compliance requirements for various industries including finance, healthcare, and government sectors, ensuring you can meet regulatory standards in your cloud deployments."
              relatedCourses={[
                { title: "AWS Security Specialist", link: "#aws-security" },
                { title: "Multi-Cloud Governance", link: "#cloud-governance" },
                { title: "DevSecOps for Cloud", link: "#devsecops" },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  )
}

