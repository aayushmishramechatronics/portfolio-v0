"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Folder,
  FolderOpen,
  X,
  Minus,
  Square,
  Terminal,
  GitBranch,
  Mail,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Code,
  Briefcase,
  Search,
  Filter,
  Star,
  Calendar,
  MapPin,
  Download,
  Zap,
  Sparkles,
  Award,
  Building,
  University,
  Settings,
  Palette,
  Monitor,
  Sun,
  Moon,
  Laptop,
  Eye,
  User,
  Edit3,
  FolderTree,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

interface FileItem {
  name: string
  type: "file" | "folder"
  icon: any
  content?: string
  children?: FileItem[]
  isOpen?: boolean
}

const fileStructure: FileItem[] = [
  {
    name: "portfolio",
    type: "folder",
    icon: FolderOpen,
    isOpen: true,
    children: [
      {
        name: "src",
        type: "folder",
        icon: Folder,
        isOpen: true,
        children: [
          { name: "about.js", type: "file", icon: FileText, content: "about" },
          { name: "projects.js", type: "file", icon: FileText, content: "projects" },
          { name: "skills.js", type: "file", icon: FileText, content: "skills" },
          { name: "experience.js", type: "file", icon: FileText, content: "experience" },
          { name: "contact.js", type: "file", icon: FileText, content: "contact" },
        ],
      },
    ],
  },
]

const projects = [
  {
    name: "Game Dev - 1",
    description:
      "part of my game development learning journey, I built a flappy bird game from scratch using JavaScript Frameworks (Phaser.js), and HTML/CSS. Imported assets from Figma.",
    tech: ["JavaScript", "Phaser.js", "HTML"],
    github: "https://github.com/aayushmishramechatronics/game_dev_1",
    demo: "https://aayushflappy.vercel.app/",
    status: "Deployed",
    year: "2025",
    featured: false,
  },
  {
    name: "Game Dev - 2",
    description:
      "part of my game development learning journey, I built a snake game from scratch using TypeScript, HTML and Tailwind CSS. Imported assets from Figma.",
    tech: ["TypeScript", "Figma", "Tailwind CSS"],
    github: "https://github.com/aayushmishramechatronics/game_dev_2",
    demo: "https://snake-y.vercel.app/",
    status: "Deployed",
    year: "2025",
    featured: false,
  },
  {
    name: "Automated Motion Detection System",
    description:
      "Arduino based PLC Project - part of our lab curriculum, I engineered it using Bosch Rexroth PLC, Arduino Mega, Ultrasonic Sensors, Buck and Boost Converters, with Breadboard and PCB Design schema on Fritzing",
    tech: ["Electronics Hardware", "PCB Design", "Programmable Logic Controllers", "Arduino IDE", "C++"],
    github: "https://github.com/aayushmishramechatronics/arduino_plc",
    demo: null,
    status: "Deployed",
    year: "2025",
    featured: false,
  },
  {
    name: "MATLAB Project - LCT",
    description:
      "Linear Control Systems - part of our course curriculum, Designed and tuned PI and PID Controllers for a Linear Dynamic System using Root Locus and Bode Analysis to optimize stability and performance with the help of Control System Toolbox Add-On. ",
    tech: ["MATLAB", "Simulink", "Control Systems"],
    github: "https://github.com/aayushmishramechatronics/MATLAB_PI_Controller",
    demo: null,
    status: "Deployed",
    year: "2025",
    featured: true,
  },
  {
    name: "Portfolio Website",
    description:
      "Modern Portfolio Website with VS Code Theme, Animations, and Responsive Design.Inspired from Nitin Rangnath's Open Source Project",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/aayushmishramechatronics/portfolio",
    demo: "https://aayush-portfolio.vercel.app/",
    status: "Production",
    year: "2025",
    featured: false,
  },
  {
    name: "Resume-io",
    description:
      "A tool to help you design your Resume and make your Job-Finding Process less hectic. You can design your Resume more faster and save more time on choosing the Fonts and the Sections to add in your Resume.",
    tech: ["React", "HTML5", "Tailwind CSS", "JavaScript", "MUI"],
    github: "https://github.com/aayushmishramechatronics/resume-io",
    demo: "https://aayush-resume-io.vercel.app/",
    status: "Production",
    year: "2024",
    featured: false,
  },
]

const skills = {
  Frontend: [
    { name: "JavaScript", level: 87 },
    { name: "TypeScript", level: 93 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Next.js", level: 75 },
  ],
  Backend: [
    { name: "Node.js", level: 60 },
    { name: "Python", level: 88 },
    { name: "FastAPI", level: 66 },
  ],
  Tools: [
    { name: "Git", level: 91 },
    { name: "Hardware/PLC", level: 79 },
    { name: "Keil uVision", level: 75 },
    { name: "MATLAB", level: 89 },
    { name: "Arduino IDE", level: 87 },
    { name: "PCB Design", level: 73 },
    { name: "CAD Modeling", level: 71 },
  ],
}

const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.tech)))

const certifications = [
  {
    name: "Drone Bootcamp",
    issuer: "CDAC Bangalore",
    date: "2025",
    credentialId: "CDAC-DB-2025",
    skills: ["Drone Technology", "Autonomous Systems", "Flight Control"],
    courseraLink: null,
    icon: Building,
    color: "#007acc",
  },
  {
    name: "Aerial Robotics",
    issuer: "University of Pennsylvania",
    date: "2024",
    credentialId: "R3KDN8SQ7ABH",
    skills: ["Robotics", "Control Systems", "MATLAB"],
    courseraLink: "https://coursera.org/verify/R3KDN8SQ7ABH",
    icon: University,
    color: "#ff1744",
  },
  {
    name: "Robotic Process Automation",
    issuer: "UiPath",
    date: "2024",
    credentialId: "U94EUA92UZNW",
    skills: ["Automation", "Process Design", "UiPath Studio"],
    courseraLink: "https://coursera.org/verify/U94EUA92UZNW",
    icon: Building,
    color: "#ff9800",
  },
  {
    name: "Python for Everybody",
    issuer: "Uiversity of Michigan",
    date: "2024",
    credentialId: "D5YBWVTLRLTZ",
    skills: ["Jupyter Notebook", "Arrays", "Python"],
    courseraLink: "https://coursera.org/verify/D5YBWVTLRLTZ",
    icon: University,
    color: "#4caf50",
  },
]

const experienceData = [
  {
    title: "Technical Content Writer",
    company: "GeeksforGeeks",
    type: "Current",
    duration: "2025 - Present",
    description:
      "Responsibilities Include - Writing Articles on Technical Topics and Reviewing it on the GfG website. Topics include : Embedded C and Web-Development Frameworks/Languages",
    technologies: ["React", "TypeScript", "MATLAB", "Embedded C", "JavaScript"],
    icon: Building,
    customIcon: "/images/holographic-cursor.jpeg",
    companyColor: "#81c784",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  {
    title: "Frontend Developer",
    company: "Rydeu Logistics Pvt. Ltd.",
    type: "3 Months",
    duration: "2024 - 2024",
    description:
      "Built responsive web applications from scratch, collaborated with design team to implement pixel-perfect UIs. Increased user engagement by 60% through performance optimizations and UX improvements.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "FastAPI"],
    icon: Building,
    customIcon: "/images/holographic-cursor.jpeg",
    companyColor: "#ff1744",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  {
    title: "Mechatronics (Robotics and Automation)",
    company: "MIT Manipal",
    type: "Undergraduate",
    duration: "2023 - 2027",
    description:
      "Currently Pursuing my Bachelors in Robotics and Automation at MIT Manipal. I am an aspiring Robotics and Embedded Software Engineer, passionate about exploring the synergy between Mechanical, Electrical, and Computer Science domains.",
    technologies: [
      "Data Structures and Algorithms",
      "Control Systems",
      "Digital and Analog Design",
      "Design and Analysis of Machine Elements",
      "Robotics",
      "Microcontrollers",
    ],
    icon: University,
    customIcon: "/images/holographic-cursor.jpeg",
    companyColor: "#ff9800",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
]

const themes = {
  vscode: {
    name: "VS Code Dark",
    colors: {
      bg: "#1e1e1e",
      sidebar: "#252526",
      titleBar: "#323233",
      editor: "#1e1e1e",
      text: "#cccccc",
      accent: "#007acc",
      border: "#3c3c3c",
      hover: "#2d2d30",
    },
    icon: Monitor,
  },
  dracula: {
    name: "Dracula",
    colors: {
      bg: "#282a36",
      sidebar: "#44475a",
      titleBar: "#6272a4",
      editor: "#282a36",
      text: "#f8f8f2",
      accent: "#bd93f9",
      border: "#6272a4",
      hover: "#44475a",
    },
    icon: Moon,
  },
  github: {
    name: "GitHub Dark",
    colors: {
      bg: "#0d1117",
      sidebar: "#161b22",
      titleBar: "#21262d",
      editor: "#0d1117",
      text: "#e6edf3",
      accent: "#58a6ff",
      border: "#30363d",
      hover: "#21262d",
    },
    icon: Github,
  },
  monokai: {
    name: "Monokai",
    colors: {
      bg: "#272822",
      sidebar: "#3e3d32",
      titleBar: "#49483e",
      editor: "#272822",
      text: "#f8f8f2",
      accent: "#a6e22e",
      border: "#49483e",
      hover: "#3e3d32",
    },
    icon: Laptop,
  },
  light: {
    name: "Light Theme",
    colors: {
      bg: "#ffffff",
      sidebar: "#f3f3f3",
      titleBar: "#e8e8e8",
      editor: "#ffffff",
      text: "#333333",
      accent: "#0066cc",
      border: "#d1d1d1",
      hover: "#e8e8e8",
    },
    icon: Sun,
  },
  synthwave: {
    name: "SynthWave '84",
    colors: {
      bg: "#2a2139",
      sidebar: "#241b2f",
      titleBar: "#34294f",
      editor: "#2a2139",
      text: "#f92aad",
      accent: "#72f1b8",
      border: "#495495",
      hover: "#34294f",
    },
    icon: Zap,
  },
  cobalt: {
    name: "Cobalt2",
    colors: {
      bg: "#193549",
      sidebar: "#122738",
      titleBar: "#1e3a52",
      editor: "#193549",
      text: "#ffffff",
      accent: "#ffc600",
      border: "#2d5a87",
      hover: "#1e3a52",
    },
    icon: Eye,
  },
}

// Activity Bar Navigation Items
const activityBarItems = [
  {
    id: "explorer",
    icon: FolderTree,
    label: "Explorer",
    action: () => "explorer",
  },
  {
    id: "github",
    icon: Github,
    label: "Source Control",
    action: () => "projects.js",
  },
  {
    id: "code",
    icon: Code,
    label: "Development",
    action: () => "skills.js",
  },
  {
    id: "edit",
    icon: Edit3,
    label: "Experience",
    action: () => "experience.js",
  },
  {
    id: "mail",
    icon: Mail,
    label: "Contact",
    action: () => "contact.js",
  },
]

export default function VSCodePortfolio() {
  const [activeFile, setActiveFile] = useState("about.js")
  const [openTabs, setOpenTabs] = useState(["about.js"])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTech, setSelectedTech] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isLoading, setIsLoading] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [currentTheme, setCurrentTheme] = useState("vscode")
  const theme = themes[currentTheme as keyof typeof themes]
  const [sidePanelOpen, setSidePanelOpen] = useState(false)
  const [activeActivityItem, setActiveActivityItem] = useState("explorer")
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [currentTerminalLine, setCurrentTerminalLine] = useState(0)
  const [isTerminalTyping, setIsTerminalTyping] = useState(false)

  const [developerInfo, setDeveloperInfo] = useState({
    name: "Aayush A. Mishra",
    role: "Developer | Roboticist",
    bio: "3x Hackathon Finalist | Codechef (1610) | MIT '27",
  })

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTech = selectedTech === "all" || project.tech.includes(selectedTech)
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus

    return matchesSearch && matchesTech && matchesStatus
  })

  // Typing animation effect
  useEffect(() => {
    if (activeFile === "about.js") {
      const text = "Developer | Roboticist"
      let index = 0
      setTypingText("")

      const timer = setInterval(() => {
        if (index < text.length) {
          setTypingText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(timer)
        }
      }, 100)

      return () => clearInterval(timer)
    }
  }, [activeFile])

  // Terminal typing animation effect
  useEffect(() => {
    const lines = [
      "$ npm run dev",
      "3x Hackathon Finalist | Codechef - (1610) | Ex - Khan Academy",
      "Currently Learning : AI/ML",
      "Portfolio loaded successfully ✨",
      "$ ",
    ]

    let lineIndex = 0
    let charIndex = 0
    setTerminalLines([])
    setIsTerminalTyping(true)

    const typeNextChar = () => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex]
        if (charIndex < currentLine.length) {
          setTerminalLines((prev) => {
            const newLines = [...prev]
            newLines[lineIndex] = currentLine.slice(0, charIndex + 1)
            return newLines
          })
          charIndex++
          setTimeout(typeNextChar, Math.random() * 50 + 30) // Random typing speed
        } else {
          lineIndex++
          charIndex = 0
          if (lineIndex < lines.length) {
            setTerminalLines((prev) => [...prev, ""])
            setTimeout(typeNextChar, 800) // Pause between lines
          } else {
            setIsTerminalTyping(false)
          }
        }
      }
    }

    // Start typing after a short delay
    const timer = setTimeout(() => {
      setTerminalLines([""])
      typeNextChar()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const openFile = (fileName: string) => {
    setIsLoading(true)
    setTimeout(() => {
      if (!openTabs.includes(fileName)) {
        setOpenTabs([...openTabs, fileName])
      }
      setActiveFile(fileName)
      setIsLoading(false)
    }, 300)
  }

  const closeTab = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const newTabs = openTabs.filter((tab) => tab !== fileName)
    setOpenTabs(newTabs)
    if (activeFile === fileName && newTabs.length > 0) {
      setActiveFile(newTabs[newTabs.length - 1])
    }
  }

  const handleActivityItemClick = (item: any) => {
    setActiveActivityItem(item.id)
    const result = item.action()
    if (result === "explorer") {
      // Toggle explorer visibility or focus
      setSidebarCollapsed(false)
    } else {
      // Open specific file
      openFile(result)
    }
  }

  const renderFileTree = (items: FileItem[], depth = 0) => {
    return items.map((item, index) => (
      <div
        key={index}
        className="animate-in slide-in-from-left duration-300"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div
          className={`flex items-center gap-1 py-1 px-2 cursor-pointer text-sm transition-all duration-200 hover:translate-x-1 ${
            depth > 0 ? `ml-${depth * 4}` : ""
          } ${activeFile === item.name ? "border-l-2" : ""}`}
          onClick={() => item.type === "file" && openFile(item.name)}
          style={{
            paddingLeft: `${depth * 16 + 8}px`,
            backgroundColor: activeFile === item.name ? theme.colors.hover : "transparent",
            borderLeftColor: activeFile === item.name ? theme.colors.accent : "transparent",
            color: theme.colors.text,
          }}
          onMouseEnter={(e) => {
            if (activeFile !== item.name) {
              e.currentTarget.style.backgroundColor = theme.colors.hover
            }
          }}
          onMouseLeave={(e) => {
            if (activeFile !== item.name) {
              e.currentTarget.style.backgroundColor = "transparent"
            }
          }}
        >
          {item.type === "folder" ? (
            item.isOpen ? (
              <ChevronDown className="w-3 h-3 transition-transform duration-200" />
            ) : (
              <ChevronRight className="w-3 h-3 transition-transform duration-200" />
            )
          ) : null}
          <item.icon className="w-4 h-4 text-blue-400" />
          <span>{item.name}</span>
          {item.type === "file" && activeFile === item.name && (
            <div
              className="ml-auto w-1 h-1 rounded-full animate-pulse"
              style={{ backgroundColor: theme.colors.accent }}
            ></div>
          )}
        </div>
        {item.children && item.isOpen && renderFileTree(item.children, depth + 1)}
      </div>
    ))
  }

  const renderActivityBar = () => (
    <div
      className={`w-12 border-r flex flex-col items-center py-2 space-y-1 ${
        sidebarCollapsed ? "hidden md:flex" : "hidden"
      } md:flex`}
      style={{ backgroundColor: theme.colors.titleBar, borderColor: theme.colors.border }}
    >
      {activityBarItems.map((item, index) => (
        <Button
          key={item.id}
          variant="ghost"
          size="sm"
          className={`w-10 h-10 p-0 transition-all duration-200 ${
            activeActivityItem === item.id ? "border-l-2 rounded-none" : "hover:bg-opacity-20"
          }`}
          style={{
            color: activeActivityItem === item.id ? theme.colors.accent : theme.colors.text,
            borderLeftColor: activeActivityItem === item.id ? theme.colors.accent : "transparent",
            backgroundColor: activeActivityItem === item.id ? theme.colors.hover : "transparent",
          }}
          onClick={() => handleActivityItemClick(item)}
          title={item.label}
        >
          <item.icon className="w-5 h-5" />
        </Button>
      ))}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom items */}
      <Button
        variant="ghost"
        size="sm"
        className="w-10 h-10 p-0 transition-all duration-200"
        style={{ color: theme.colors.text }}
        onClick={() => openFile("about.js")}
        title="Profile"
      >
        <User className="w-5 h-5" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className="w-10 h-10 p-0 transition-all duration-200"
        style={{ color: theme.colors.text }}
        onClick={() => setSidePanelOpen(true)}
        title="Settings"
      >
        <Settings className="w-5 h-5" />
      </Button>
    </div>
  )

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-[#007acc] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-[#cccccc] animate-pulse">Loading {activeFile}...</span>
          </div>
        </div>
      )
    }

    switch (activeFile) {
      case "about.js":
        return (
          <div className="flex flex-col lg:flex-row h-full">
            {/* Code Editor Side */}
            <div
              className="flex-1 p-6 font-mono text-sm"
              style={{ backgroundColor: theme.colors.editor, color: theme.colors.text }}
            >
              <div className="space-y-1">
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">1</span>
                  <div>
                    <span style={{ color: theme.colors.text }}>name: </span>
                    <span className="text-orange-400">'Aayush A. Mishra'</span>
                    <span style={{ color: theme.colors.text }}>,</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">2</span>
                  <div>
                    <span style={{ color: theme.colors.text }}>role: </span>
                    <span className="text-orange-400">'Developer | Roboticist'</span>
                    <span style={{ color: theme.colors.text }}>,</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">3</span>
                  <div>
                    <span style={{ color: theme.colors.text }}>bio: </span>
                    <span className="text-orange-400">'Mechatronics Undergrad at MIT Manipal'</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">4</span>
                  <span style={{ color: theme.colors.text }}>{"};"}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">5</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">6</span>
                  <div>
                    <span className="text-purple-400">useEffect</span>
                    <span style={{ color: theme.colors.text }}>{"(() => {"}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">7</span>
                  <div className="ml-4">
                    <span style={{ color: theme.colors.text }}>document.title = </span>
                    <span className="text-orange-400">
                      `${"{"}
                      {developerInfo.name}
                      {"}"} | Portfolio`
                    </span>
                    <span style={{ color: theme.colors.text }}>;</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">8</span>
                  <div className="ml-4">
                    <span className="text-green-400">setIsLoaded</span>
                    <span style={{ color: theme.colors.text }}>(</span>
                    <span className="text-orange-400">true</span>
                    <span style={{ color: theme.colors.text }}>);</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">9</span>
                  <span style={{ color: theme.colors.text }}>{"}, []);"}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">10</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">11</span>
                  <div>
                    <span className="text-purple-400">return</span>
                    <span style={{ color: theme.colors.text }}> (</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">12</span>
                  <div className="ml-4">
                    <span style={{ color: theme.colors.text }}>{"<"}</span>
                    <span className="text-red-400">main</span>
                    <span style={{ color: theme.colors.text }}> className=</span>
                    <span className="text-orange-400">"hero-container"</span>
                    <span style={{ color: theme.colors.text }}>{">"}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">13</span>
                  <div className="ml-8">
                    <span style={{ color: theme.colors.text }}>{"<"}</span>
                    <span className="text-red-400">h1</span>
                    <span style={{ color: theme.colors.text }}>{">{developerInfo.name}<"}</span>
                    <span className="text-red-400">h1</span>
                    <span style={{ color: theme.colors.text }}>{">"}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">14</span>
                  <div className="ml-8">
                    <span style={{ color: theme.colors.text }}>{"<"}</span>
                    <span className="text-red-400">p</span>
                    <span style={{ color: theme.colors.text }}>{">{developerInfo.role}<"}</span>
                    <span className="text-red-400">p</span>
                    <span style={{ color: theme.colors.text }}>{">"}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">15</span>
                  <div className="ml-8">
                    <span style={{ color: theme.colors.text }}>{"<"}</span>
                    <span className="text-red-400">div</span>
                    <span style={{ color: theme.colors.text }}> className=</span>
                    <span className="text-orange-400">"cta"</span>
                    <span style={{ color: theme.colors.text }}>{">"}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">16</span>
                  <div className="ml-12">
                    <span style={{ color: theme.colors.text }}>{"<"}</span>
                    <span className="text-red-400">Link</span>
                    <span style={{ color: theme.colors.text }}> href=</span>
                    <span className="text-orange-400">"/projects"</span>
                    <span style={{ color: theme.colors.text }}>{">"}</span>
                    <span style={{ color: theme.colors.text }}>View Projects</span>
                    <span style={{ color: theme.colors.text }}>{"</"}</span>
                    <span className="text-red-400">Link</span>
                    <span style={{ color: theme.colors.text }}>{">"}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">17</span>
                  <div className="ml-8">
                    <span style={{ color: theme.colors.text }}>{"</"}</span>
                    <span className="text-red-400">div</span>
                    <span style={{ color: theme.colors.text }}>{">"}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">18</span>
                  <div className="ml-4">
                    <span style={{ color: theme.colors.text }}>{"</"}</span>
                    <span className="text-red-400">main</span>
                    <span style={{ color: theme.colors.text }}>{">"}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">19</span>
                  <span style={{ color: theme.colors.text }}>);</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">20</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8 text-right mr-4">21</span>
                  <div>
                    <span className="text-purple-400">export</span>
                    <span style={{ color: theme.colors.text }}> </span>
                    <span className="text-purple-400">default</span>
                    <span style={{ color: theme.colors.text }}> HomePage;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Side */}
            <div
              className="flex-1 p-6 md:p-12 flex items-center justify-center"
              style={{ backgroundColor: theme.colors.bg }}
            >
              <div className="text-center animate-in fade-in duration-1000">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span style={{ color: theme.colors.text }}>Aayush</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Mishra
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8">Developer | Roboticist</p>
                <p className="text-base md:text-lg text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
                  Robotics and Embedded Software Engineer with 1 year of experience integrating Mechanical,
                  Electrical-Electronics, and Computer Science principles to build innovative solutions and projects.
                </p>
                <Button
                  className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white px-6 md:px-8 py-3 text-base md:text-lg transition-all duration-300 hover:scale-105"
                  onClick={() => openFile("projects.js")}
                >
                  View Projects →
                </Button>
              </div>
            </div>
          </div>
        )

      case "projects.js":
        return (
          <div className="p-3 md:p-6 text-[#cccccc] animate-in fade-in duration-500">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-6 h-6 text-[#4fc3f7]" />
                <h2 className="text-2xl font-bold text-[#4fc3f7]">Projects</h2>
                <Badge variant="secondary" className="bg-[#007acc] text-white">
                  {filteredProjects.length}
                </Badge>
              </div>

              {/* Filters */}
              <Card className="bg-[#252526] border-[#3c3c3c] mb-6">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6a6a6a]" />
                        <Input
                          placeholder="Search projects..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 bg-[#1e1e1e] border-[#3c3c3c] text-[#cccccc] focus:border-[#007acc]"
                        />
                      </div>
                    </div>
                    <Select value={selectedTech} onValueChange={setSelectedTech}>
                      <SelectTrigger className="w-full md:w-48 bg-[#1e1e1e] border-[#3c3c3c] text-[#cccccc]">
                        <SelectValue placeholder="Technology" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#252526] border-[#3c3c3c]">
                        <SelectItem value="all">All Technologies</SelectItem>
                        {allTechnologies.map((tech) => (
                          <SelectItem key={tech} value={tech}>
                            {tech}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-full md:w-48 bg-[#1e1e1e] border-[#3c3c3c] text-[#cccccc]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#252526] border-[#3c3c3c]">
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="Production">Production</SelectItem>
                        <SelectItem value="Beta">Beta</SelectItem>
                        <SelectItem value="Development">Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-[#3c3c3c] hover:border-[#007acc] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-in slide-in-from-bottom duration-500 ${
                    project.featured ? "ring-1 ring-[#007acc]/50" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    background: project.featured
                      ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #e94560 100%)"
                      : index % 4 === 0
                        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        : index % 4 === 1
                          ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                          : index % 4 === 2
                            ? "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                            : "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                  }}
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Content overlay */}
                  <div className="relative bg-gradient-to-br from-[#252526]/95 to-[#2d2d30]/95 backdrop-blur-sm h-full">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <CardTitle className="text-lg text-[#4fc3f7] truncate group-hover:text-white transition-colors duration-300">
                            {project.name}
                          </CardTitle>
                          {project.featured && (
                            <div className="relative">
                              <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0 animate-pulse" />
                              <div className="absolute inset-0 w-4 h-4 text-yellow-300 fill-current animate-ping opacity-75">
                                <Star className="w-4 h-4" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-[#cccccc] hover:bg-white/10 hover:text-[#4fc3f7] transition-all duration-300 hover:scale-110"
                                title="View GitHub Repository"
                              >
                                <Github className="w-4 h-4" />
                              </Button>
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-[#cccccc] hover:bg-white/10 hover:text-[#4fc3f7] transition-all duration-300 hover:scale-110"
                                title="View Live Demo"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-[#9cdcfe]">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-xs backdrop-blur-sm ${
                            project.status === "Production"
                              ? "border-green-400/50 text-green-300 bg-green-500/10"
                              : project.status === "Beta"
                                ? "border-yellow-400/50 text-yellow-300 bg-yellow-500/10"
                                : "border-blue-400/50 text-blue-300 bg-blue-500/10"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-[#cccccc] mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 max-w-full">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-white/10 text-white hover:bg-white/20 transition-all duration-300 text-xs backdrop-blur-sm border border-white/20 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 animate-in fade-in duration-500">
                <Filter className="w-16 h-16 mx-auto mb-4 text-[#6a6a6a]" />
                <p className="text-[#6a6a6a] text-lg">No projects found matching your criteria</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-[#1e1e1e] border-[#3c3c3c] text-[#cccccc] hover:bg-[#2d2d30]"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedTech("all")
                    setSelectedStatus("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        )

      case "skills.js":
        return (
          <div className="p-3 md:p-6 text-[#cccccc] animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-[#4fc3f7]" />
              <h2 className="text-2xl font-bold text-[#4fc3f7]">Skills & Technologies</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {/* Radial Charts */}
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <Card
                    key={categoryIndex}
                    className="bg-gradient-to-r from-[#252526] to-[#2d2d30] border-[#3c3c3c] animate-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${categoryIndex * 200}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl text-[#4fc3f7] flex items-center gap-2">
                        {category === "Frontend" && <Code className="w-5 h-5" />}
                        {category === "Backend" && <Terminal className="w-5 h-5" />}
                        {category === "Tools" && <Briefcase className="w-5 h-5" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {skillList.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex flex-col items-center animate-in zoom-in duration-300"
                            style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                          >
                            <div className="relative w-20 h-20 mb-2">
                              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                <path
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                  fill="none"
                                  stroke="#3c3c3c"
                                  strokeWidth="2"
                                />
                                <path
                                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                  fill="none"
                                  stroke="#007acc"
                                  strokeWidth="2"
                                  strokeDasharray={`${skill.level}, 100`}
                                  className="animate-in draw duration-1000"
                                  style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100 + 300}ms` }}
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-sm font-bold text-[#4fc3f7]">{skill.level}%</span>
                              </div>
                            </div>
                            <span className="text-[#cccccc] text-sm font-medium text-center">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Skills Overview */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-[#252526] to-[#2d2d30] border-[#3c3c3c] animate-in slide-in-from-right duration-500">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#4fc3f7]">Technical Expertise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-[#cccccc]">
                      <h4 className="font-semibold mb-2 text-[#9cdcfe]">Frontend Development</h4>
                      <p className="text-sm leading-relaxed">
                        Proficient in TypeScript, JavaScript, HTML/CSS, and Modern Frameworks.
                      </p>
                    </div>
                    <div className="text-[#cccccc]">
                      <h4 className="font-semibold mb-2 text-[#9cdcfe]">Backend Development</h4>
                      <p className="text-sm leading-relaxed">
                        Building scalable APIs and microservices with Node.js, Python, and Modern Database Technologies.
                      </p>
                    </div>
                    <div className="text-[#cccccc]">
                      <h4 className="font-semibold mb-2 text-[#9cdcfe]">Embedded Software & Tools</h4>
                      <p className="text-sm leading-relaxed">
                        Skilled in Embedded C and Assembly, developing microcontroller-based systems using Keil
                        uVision.Creating schematics and custom board layouts for IoT and sensor-based projects using
                        EasyEDA and KiCAD.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-br from-[#252526] to-[#2d2d30] border-[#3c3c3c] animate-in slide-in-from-right duration-500"
                  style={{ animationDelay: "300ms" }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-[#4fc3f7] flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {certifications.map((cert, index) => (
                      <Card
                        key={index}
                        className="bg-[#1e1e1e] border-[#3c3c3c] hover:border-[#007acc] transition-all duration-300"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: cert.color + "20", border: `1px solid ${cert.color}` }}
                            >
                              <cert.icon className="w-5 h-5" style={{ color: cert.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div>
                                  <h4 className="font-semibold text-[#cccccc] text-sm">{cert.name}</h4>
                                  <p className="text-xs text-[#9cdcfe]">{cert.issuer}</p>
                                </div>
                                <div className="flex gap-1">
                                  {cert.courseraLink && (
                                    <a href={cert.courseraLink} target="_blank" rel="noopener noreferrer">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-6 w-6 p-0 text-[#cccccc] hover:text-[#4fc3f7] transition-colors"
                                        title="View on Coursera"
                                      >
                                        <ExternalLink className="w-3 h-3" />
                                      </Button>
                                    </a>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-[#6a6a6a] mb-2">
                                <Calendar className="w-3 h-3" />
                                <span>{cert.date}</span>
                                <span>•</span>
                                <span>ID: {cert.credentialId}</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {cert.skills.map((skill, skillIndex) => (
                                  <Badge
                                    key={skillIndex}
                                    variant="outline"
                                    className="text-xs border-[#4fc3f7] text-[#4fc3f7] hover:bg-[#4fc3f7] hover:text-white transition-colors"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      case "experience.js":
        return (
          <div className="p-3 md:p-6 text-[#cccccc] animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6 text-[#4fc3f7]" />
              <h2 className="text-2xl font-bold text-[#4fc3f7]">Experience</h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#007acc] via-[#4fc3f7] to-[#9cdcfe]"></div>

              <div className="space-y-12">
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-8 animate-in ${
                      index % 2 === "0" ? "slide-in-from-left" : "slide-in-from-right"
                    } duration-500`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg overflow-hidden border-2 p-2"
                        style={{
                          background: `linear-gradient(135deg, ${exp.companyColor}, ${exp.companyColor}dd)`,
                          borderColor: exp.companyColor,
                        }}
                      >
                        <img
                          src={exp.customIcon || "/placeholder.svg"}
                          alt="Holographic cursor icon"
                          className="w-full h-full object-cover rounded-md filter drop-shadow-lg"
                          style={{
                            filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
                          }}
                        />
                      </div>
                      {index === 0 && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                    <Card className="flex-1 bg-gradient-to-r from-[#252526] to-[#2d2d30] border-[#3c3c3c] hover:border-[#007acc] transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1" style={{ color: exp.companyColor }}>
                              {exp.title}
                            </h3>
                            <p className="font-medium" style={{ color: exp.companyColor }}>
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col md:items-end mt-2 md:mt-0">
                            <Badge className={exp.badgeColor + " mb-1"}>{exp.type}</Badge>
                            <span className="text-sm text-[#cccccc]">{exp.duration}</span>
                          </div>
                        </div>
                        <p className="text-[#cccccc] leading-relaxed mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-[#007acc] hover:bg-[#007acc] hover:text-white transition-colors"
                              style={{ color: exp.companyColor }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case "contact.js":
        return (
          <div className="p-3 md:p-6 text-[#cccccc] animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-6 h-6 text-[#4fc3f7]" />
              <h2 className="text-2xl font-bold text-[#4fc3f7]">Get In Touch</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="bg-gradient-to-r from-[#252526] to-[#2d2d30] border-[#3c3c3c] animate-in slide-in-from-left duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-5 h-5 text-[#4fc3f7]" />
                      <h3 className="font-semibold text-[#4fc3f7]">Email</h3>
                    </div>
                    <p className="text-[#cccccc]">aayushmishra1105@gmail.com</p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-r from-[#252526] to-[#2d2d30] border-[#3c3c3c] animate-in slide-in-from-left duration-500"
                  style={{ animationDelay: "200ms" }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-[#4fc3f7]" />
                      <h3 className="font-semibold text-[#4fc3f7]">Location</h3>
                    </div>
                    <p className="text-[#cccccc] mb-4">Udupi, Manipal - 576104</p>

                    {/* Interactive Map */}
                    <div className="relative w-full h-48 bg-[#1e1e1e] rounded-lg overflow-hidden border border-[#3c3c3c]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.47234435827!2d74.74420!3d13.35159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb68a6b8e0e5%3A0x5f6a0b8b8b8b8b8b!2sManipAL%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="MIT Manipal Location"
                        className="rounded-lg"
                      />

                      {/* Custom overlay for better VS Code theme integration */}
                      <div className="absolute inset-0 bg-[#007acc]/10 pointer-events-none rounded-lg"></div>

                      {/* Location marker overlay */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="w-4 h-4 bg-[#007acc] rounded-full animate-pulse shadow-lg"></div>
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-[#6a6a6a] flex items-center gap-2">
                      <span>📍</span>
                      <span>MIT Manipal, Karnataka, India</span>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-r from-[#252526] to-[#2d2d30] border-[#3c3c3c] animate-in slide-in-from-left duration-500"
                  style={{ animationDelay: "400ms" }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-5 h-5 text-[#4fc3f7]" />
                      <h3 className="font-semibold text-[#4fc3f7]">Availability</h3>
                    </div>
                    <p className="text-[#cccccc]">Open to Summer Internships</p>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-in slide-in-from-right duration-500" style={{ animationDelay: "300ms" }}>
                <Card className="bg-gradient-to-br from-[#252526] to-[#2d2d30] border-[#3c3c3c]">
                  <CardHeader>
                    <CardTitle className="text-[#4fc3f7]">Let's Work Together!</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[#cccccc] leading-relaxed">Message me for any Queries or Project Proposals.</p>
                    <div className="space-y-3">
                      <a href="mailto:aayushmishra1105@gmail.com?subject=Portfolio Inquiry&body=Hi Aayush, I'd like to discuss...">
                        <Button className="w-full bg-[#007acc] hover:bg-[#1177bb] text-white transition-all duration-300 hover:scale-105">
                          <Mail className="w-4 h-4 mr-2" />
                          Send Email
                        </Button>
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1n_EYljW6ZynV3bJ-u2VGwtRkX5_dIdtz/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="w-full bg-[#1e1e1e] border-[#3c3c3c] text-[#cccccc] hover:bg-[#2d2d30] hover:border-[#007acc] transition-all duration-300"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Resume
                        </Button>
                      </a>
                    </div>

                    <Separator className="bg-[#3c3c3c]" />

                    <div className="flex justify-center gap-4">
                      <a href="https://github.com/aayushmishramechatronics" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-[#2d2d30] hover:text-[#4fc3f7] transition-all duration-200"
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/aayush-anil-mishra/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-[#2d2d30] hover:text-[#4fc3f7] transition-all duration-200"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Button>
                      </a>

                      <a href="https://x.com/AayushMish33852" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-[#2d2d30] hover:text-[#4fc3f7] transition-all duration-200"
                        >
                          <Twitter className="w-5 h-5" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="p-3 md:p-6 text-[#cccccc] animate-in fade-in duration-500">
            <div className="text-center py-12">
              <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Select a file from the explorer to view content.</p>
            </div>
          </div>
        )
    }
  }

  const renderSidePanel = () => (
    <div
      className={`fixed right-0 top-0 h-full w-80 z-30 transform transition-transform duration-300 ${
        sidePanelOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ backgroundColor: theme.colors.sidebar, borderLeft: `1px solid ${theme.colors.border}` }}
    >
      <div className="p-4 border-b" style={{ borderColor: theme.colors.border }}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold" style={{ color: theme.colors.text }}>
            Settings
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidePanelOpen(false)}
            className="h-8 w-8 p-0"
            style={{ color: theme.colors.text }}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3 flex items-center gap-2" style={{ color: theme.colors.text }}>
            <Palette className="w-4 h-4" />
            Theme Selection
          </h4>
          <div className="space-y-2">
            {Object.entries(themes).map(([key, themeOption]) => (
              <Button
                key={key}
                variant={currentTheme === key ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  currentTheme === key ? "bg-[#007acc] text-white" : "hover:bg-[#2d2d30]"
                }`}
                onClick={() => setCurrentTheme(key)}
                style={{
                  color: currentTheme === key ? "white" : theme.colors.text,
                  backgroundColor: currentTheme === key ? theme.colors.accent : "transparent",
                }}
              >
                <themeOption.icon className="w-4 h-4" />
                {themeOption.name}
              </Button>
            ))}
          </div>
        </div>

        <Separator style={{ backgroundColor: theme.colors.border }} />

        <div>
          <h4 className="text-sm font-medium mb-3" style={{ color: theme.colors.text }}>
            Quick Actions
          </h4>
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3"
              style={{ color: theme.colors.text }}
              onClick={() => openFile("contact.js")}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3"
              style={{ color: theme.colors.text }}
              onClick={() => openFile("projects.js")}
            >
              <Code className="w-4 h-4" />
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="h-screen flex flex-col" style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }}>
      {/* Title Bar */}
      <div
        className="h-8 flex items-center justify-between px-2 border-b"
        style={{ backgroundColor: theme.colors.titleBar, borderColor: theme.colors.border }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff6b63] transition-colors duration-200 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffc73a] transition-colors duration-200 cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:bg-[#34d058] transition-colors duration-200 cursor-pointer"></div>
          </div>
          <span className="text-sm ml-4 hidden sm:block" style={{ color: theme.colors.text }}>
            Aayush A. Mishra - Portfolio
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Mobile Navigation Menu */}
          <div className="md:hidden">
            <Select value={activeFile} onValueChange={openFile}>
              <SelectTrigger
                className="h-6 w-24 text-xs border-none bg-transparent"
                style={{ color: theme.colors.text }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#252526] border-[#3c3c3c]">
                <SelectItem value="about.js">About</SelectItem>
                <SelectItem value="projects.js">Projects</SelectItem>
                <SelectItem value="skills.js">Skills</SelectItem>
                <SelectItem value="experience.js">Experience</SelectItem>
                <SelectItem value="contact.js">Contact</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 transition-colors duration-200"
            style={{ color: theme.colors.text }}
            onClick={() => setSidePanelOpen(true)}
            title="Settings"
          >
            <Settings className="w-3 h-3" />
          </Button>
          <Select value={currentTheme} onValueChange={setCurrentTheme}>
            <SelectTrigger
              className="h-6 w-20 sm:w-32 text-xs border-none bg-transparent"
              style={{ color: theme.colors.text }}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#252526] border-[#3c3c3c]">
              {Object.entries(themes).map(([key, theme]) => (
                <SelectItem key={key} value={key} className="text-[#cccccc] hover:bg-[#2d2d30]">
                  {theme.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 md:hidden transition-colors duration-200"
            style={{ color: theme.colors.text }}
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <Terminal className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 transition-colors duration-200 hidden sm:block"
            style={{ color: theme.colors.text }}
          >
            <Minus className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 transition-colors duration-200 hidden sm:block"
            style={{ color: theme.colors.text }}
          >
            <Square className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 transition-colors duration-200 hidden sm:block"
            style={{ color: theme.colors.text }}
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        {renderActivityBar()}

        {/* Sidebar */}
        <div
          className={`border-r transition-all duration-300 ${
            sidebarCollapsed ? "w-0" : "w-full md:w-64"
          } ${sidebarCollapsed ? "hidden" : "block md:block"} fixed md:relative z-20 h-full md:h-auto bg-opacity-95 md:bg-opacity-100 md:left-12`}
          style={{
            backgroundColor: theme.colors.sidebar,
            borderColor: theme.colors.border,
          }}
        >
          <div className="p-2 border-b border-[#3c3c3c] flex items-center justify-between">
            <span className={`text-sm font-medium ${sidebarCollapsed ? "hidden" : "block"}`}>EXPLORER</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 hover:bg-[#404040] transition-all duration-200"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              {sidebarCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </Button>
          </div>
          {!sidebarCollapsed && <div className="p-2">{renderFileTree(fileStructure)}</div>}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col relative">
          {/* Mobile overlay when sidebar is open */}
          {!sidebarCollapsed && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
              onClick={() => setSidebarCollapsed(true)}
            />
          )}

          {/* Tabs */}
          <div className="bg-[#2d2d30] border-b border-[#3c3c3c] flex overflow-x-auto scrollbar-hide">
            {openTabs.map((tab) => (
              <div
                key={tab}
                className={`flex items-center gap-2 px-3 py-2 border-r border-[#3c3c3c] cursor-pointer min-w-0 transition-all duration-200 ${
                  activeFile === tab ? "bg-[#1e1e1e] text-white" : "hover:bg-[#323233]"
                }`}
                onClick={() => setActiveFile(tab)}
              >
                <FileText className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm truncate">{tab}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-[#404040] flex-shrink-0 transition-all duration-200"
                  onClick={(e) => closeTab(tab, e)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>

          {/* Editor Content */}
          <div className="flex-1 bg-[#1e1e1e] overflow-auto">
            {openTabs.length > 0 ? (
              renderContent()
            ) : (
              <div className="p-6 text-center text-[#6a6a6a] animate-in fade-in duration-500">
                <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Open a file to start exploring my Portfolio</p>
              </div>
            )}
          </div>

          {/* Side Panel */}
          {renderSidePanel()}

          {/* Side Panel Overlay */}
          {sidePanelOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setSidePanelOpen(false)} />
          )}
          {/* Terminal */}
          <div className="bg-[#1e1e1e] border-t border-[#3c3c3c] h-16 md:h-24 lg:h-32">
            <div className="bg-[#2d2d30] px-3 py-1 border-b border-[#3c3c3c] flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span className="text-sm">Terminal</span>
            </div>
            <div className="p-2 md:p-3 font-mono text-xs md:text-sm">
              {terminalLines.map((line, index) => (
                <div
                  key={index}
                  className={`${
                    line.startsWith("$") ? "text-green-400" : "text-[#cccccc]"
                  } ${index < 3 ? "hidden sm:block" : ""} ${index < 2 ? "hidden md:block" : ""}`}
                >
                  {line}
                  {index === terminalLines.length - 1 && isTerminalTyping && <span className="animate-pulse">|</span>}
                  {index === terminalLines.length - 1 && !isTerminalTyping && line === "$ " && (
                    <span className="bg-transparent border-none outline-none text-[#cccccc] ml-1 animate-pulse">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#007acc] h-6 flex items-center justify-between px-3 text-xs text-white">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <GitBranch className="w-3 h-3" />
            <span>main</span>
          </div>
          <span>UTF-8</span>
          <span className="animate-pulse">●</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Ln 1, Col 1</span>
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  )
}
