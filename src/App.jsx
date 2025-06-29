import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  PresentationChartBarIcon,
  NewspaperIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Courses",
    description: "Access curated content with videos, roadmaps and interactive modules.",
    icon: AcademicCapIcon,
  },
  {
    title: "Projects",
    description: "Get project guidance and explore others' work to gain experience.",
    icon: BriefcaseIcon,
  },
  {
    title: "Research Papers",
    description: "Publish or learn from papers shared by fellow students.",
    icon: DocumentTextIcon,
  },
  {
    title: "Startups",
    description: "Connect with innovative startups for opportunities and learning.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Industrial Visits",
    description: "Register and schedule visits to gain practical industry knowledge.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Expert Seminars",
    description: "Watch live industry expert and renowned speaker sessions.",
    icon: PresentationChartBarIcon,
  },
  {
    title: "Jobs & Internships",
    description: "Find the latest job and internship opportunities globally.",
    icon: GlobeAltIcon,
  },
  {
    title: "Tech Updates",
    description: "Stay updated with the latest technology trends and news.",
    icon: NewspaperIcon,
  },
  {
    title: "STARUPS Labs",
    description: "Access hands-on R&D like projects from STARUPS Labs.",
    icon: LightBulbIcon,
  },
];

export default function App() {
  return (
    <div className="font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          All-in-One Platform for Students
        </h1>
        <p className="text-center text-gray-500 mb-12">
          Discover all the features designed to enhance your academic and <br /> professional journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center mb-3">
                {Icon && <Icon className="h-6 w-6 text-indigo-600 mr-2" />}
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              <button className="text-indigo-600 text-sm font-medium hover:underline">
                Explore {title}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-semibold mb-2">Join STARUPS Today</h2>
            <p className="text-gray-600 mb-4">
              Start your journey towards a successful career with our comprehensive platform
              designed specifically for students.
            </p>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700">
              Get Started
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow w-full md:w-auto">
            <p className="font-medium mb-1">👥 Students collaborating</p>
            <p className="text-gray-600 text-sm">
              Join over 10,000 students already using STARUPS
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
          <div>
            <h4 className="font-bold text-indigo-600 mb-2">⭐ STARUPS</h4>
            <p>Empowering students with skill development and career support.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Features</h4>
            <ul>
              <li>Courses</li>
              <li>Projects</li>
              <li>Research</li>
              <li>Jobs & Internships</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Resources</h4>
            <ul>
              <li>Tech Updates</li>
              <li>Expert Seminars</li>
              <li>Industrial Visits</li>
              <li>STARUPS Labs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
