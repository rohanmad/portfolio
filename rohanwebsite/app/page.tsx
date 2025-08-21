"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Database,
  Globe,
  Terminal,
  Zap,
  Coffee,
  Gamepad2Icon as GameController2,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "rohan.dev"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Load Typed.js script dynamically
    const script = document.createElement("script")
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"
    script.onload = () => {
      // Initialize Typed.js after script loads
      if (window.Typed) {
        new window.Typed("#typed-element", {
          strings: [
            "full-stack developer in the making",
            "ai/ml enthusiast",
            "i'm a future software engineer",
            "i'm an avid tennis player",
          ],
          typeSpeed: 100,
          backSpeed: 90,
          loop: true,
          shuffle: true,
          smartBackspace: true,
          showCursor: true,
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-primary/20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary terminal-cursor">{displayText}</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-accent transition-colors hover:glow-text"
              >
                ./about
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-muted-foreground hover:text-accent transition-colors hover:glow-text"
              >
                ./skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-accent transition-colors hover:glow-text"
              >
                ./projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-accent transition-colors hover:glow-text"
              >
                ./contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center">
            <div className="mb-8 relative">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Terminal className="w-20 h-20 text-primary" />
                </div>
              </div>
            </div>

            {/* <div className="font-mono text-sm text-muted-foreground mb-4">$ whoami</div> */}

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">rohan madan</span>
            </h1>

            <div className="font-mono text-lg md:text-xl text-accent mb-2">&gt; computer science @ ucsd</div>
            <div className="font-mono text-lg md:text-xl text-secondary mb-8">
              &gt; <span id="typed-element" className="text-secondary"></span>
            </div>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              passionate about ai/ml, full-stack dev, and creating solutions that actually matter. currently looking for
              swe internships  🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/80 neon-border font-mono">
                <Download className="mr-2 h-4 w-4" />
                download resume
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 font-mono bg-transparent"
              >
                <Coffee className="mr-2 h-4 w-4" />
                let's chat
              </Button> */}
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://linkedin.com/in/madanrohan"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:glow-text"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="https://github.com/rohanmad"
                className="text-muted-foreground hover:text-accent transition-all hover:scale-110 hover:glow-text"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="mailto:rmadan@ucsd.edu"
                className="text-muted-foreground hover:text-secondary transition-all hover:scale-110 hover:glow-text"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* <div className="font-mono text-accent mb-2">&gt; cat about.txt</div> */}
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">about me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <GameController2 className="h-5 w-5" />
                    current_status.json
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  <div className="space-y-2">
                    <div>
                      <span className="text-accent">"school":</span>{" "}
                      <span className="text-secondary">"UC San Diego"</span>,
                    </div>
                    <div>
                      <span className="text-accent">"major":</span>{" "}
                      <span className="text-secondary">"Computer Science"</span>,
                    </div>
                    <div>
                      <span className="text-accent">"year":</span> <span className="text-secondary">"Junior"</span>,
                    </div>
                    <div>
                      <span className="text-accent">"graduation":</span> <span className="text-secondary">"2027"</span>,
                    </div>
                    <div>
                      <span className="text-accent">"status":</span>{" "}
                      <span className="text-primary">"seeking internships"</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <p className="text-foreground leading-relaxed text-lg">
                hey there! 👋 i'm rohan, a motivated cs student at ucsd. currently working
                through my junior year while building random projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                when i'm not debugging, you'll find me exploring ai/ml, building full-stack apps, or trying to
                convince my friends that my latest side project will "definitely be the next big thing."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                actively looking for swe internships where i can contribute to real products and learn from amazing
                engineers. let's build something cool together!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* <div className="font-mono text-accent mb-2">&gt; ls -la skills/</div> */}
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">skills</h2>
            <p className="text-muted-foreground text-lg">my digital toolbox</p>
          </div>

          <div className="grid gap-8">
            {/* Programming Languages */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary font-mono">
                  <Terminal className="h-6 w-6" />
                  languages
                  {/* <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 ml-auto">
                    8 languages
                  </Badge> */}
                </CardTitle>
                <CardDescription className="font-mono text-sm text-muted-foreground">
                  // the ones that don't make me cry (sometimes)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="font-mono text-sm">Python</span>
                    <div className="ml-auto flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="font-mono text-sm">JavaScript</span>
                    <div className="ml-auto flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      ))}
                      <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="font-mono text-sm">TypeScript</span>
                    <div className="ml-auto flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      ))}
                      <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="font-mono text-sm">Java</span>
                    <div className="ml-auto flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      ))}
                      <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="font-mono text-sm">C++</span>
                    <div className="ml-auto flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="font-mono text-sm">SQL</span>
                    <div className="ml-auto flex gap-1">
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      ))}
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                      ))}
                    </div>
                    {/* <div className="ml-auto flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      ))}
                      <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                    </div> */}
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="font-mono text-sm">Go</span>
                    <div className="ml-auto flex gap-1">
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      ))}
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="font-mono text-sm">Rust</span>
                    <div className="ml-auto flex gap-1">
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      ))}
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Frontend & Backend */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-[1.02] group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary font-mono">
                    <Globe className="h-6 w-6 group-hover:text-accent transition-colors" />
                    frontend
                  </CardTitle>
                  <CardDescription className="font-mono text-sm text-muted-foreground">
                    // making pixels look pretty
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-mono text-sm text-primary mb-2">frameworks & libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        React
                      </Badge>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        Vue.js
                      </Badge>
                      {/* <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        Svelte
                      </Badge> */}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm text-secondary mb-2">styling & ui</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        Figma
                      </Badge>
                      {/* <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        Styled Components
                      </Badge> */}
                      {/* <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        Framer Motion
                      </Badge> */}
                      {/* <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        shadcn/ui
                      </Badge> */}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary/50 transition-all hover:scale-[1.02] group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-secondary font-mono">
                    <Database className="h-6 w-6 group-hover:text-accent transition-colors" />
                    backend
                  </CardTitle>
                  <CardDescription className="font-mono text-sm text-muted-foreground">
                    // where the magic actually happens
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-mono text-sm text-secondary mb-2">runtime & frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        Node.js
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        Express
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        FastAPI
                      </Badge>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        Django
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm text-accent mb-2">databases</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        MongoDB
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        PostgreSQL
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        Firebase
                      </Badge>
                      {/* <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        Redis
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        Supabase
                      </Badge> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI/ML & DevOps */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent/50 transition-all hover:scale-[1.02] group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-accent font-mono">
                    <Zap className="h-6 w-6 group-hover:text-primary transition-colors" />
                    ai_ml
                  </CardTitle>
                  <CardDescription className="font-mono text-sm text-muted-foreground">
                    // teaching machines to be smarter than me
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-mono text-sm text-accent mb-2">frameworks & libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        TensorFlow
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        PyTorch
                      </Badge>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        Scikit-learn
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        Pandas
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm text-primary mb-2">specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {/* <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        Computer Vision
                      </Badge> */}
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        NLP
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        Deep Learning
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-[1.02] group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary font-mono">
                    <Terminal className="h-6 w-6 group-hover:text-accent transition-colors" />
                    devops
                  </CardTitle>
                  <CardDescription className="font-mono text-sm text-muted-foreground">
                    // making deployments less scary
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-mono text-sm text-primary mb-2">cloud & deployment</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        AWS
                      </Badge>
                      {/* <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        Vercel
                      </Badge> */}
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        Docker
                      </Badge>
                      {/* <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        Kubernetes
                      </Badge> */}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm text-secondary mb-2">tools & workflow</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        Git
                      </Badge>
                      {/* <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        GitHub Actions
                      </Badge> */}
                      {/* <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        VS Code
                      </Badge> */}
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        Postman
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        Jira
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fun Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent font-mono">
                  <Coffee className="h-6 w-6" />
                  stats
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 ml-auto">
                    live data
                  </Badge>
                </CardTitle>
                <CardDescription className="font-mono text-sm text-muted-foreground">
                  // the numbers that matter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary font-mono">200+</div>
                    <div className="text-sm text-muted-foreground font-mono">commits this year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary font-mono">5+</div>
                    <div className="text-sm text-muted-foreground font-mono">projects completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent font-mono">9000</div>
                    <div className="text-sm text-muted-foreground font-mono">cups of coffee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary font-mono">3.85</div>
                    <div className="text-sm text-muted-foreground font-mono">current gpa</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* <div className="font-mono text-accent mb-2">&gt; git log --oneline</div> */}
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">projects</h2>
            <p className="text-muted-foreground text-lg">stuff i've built</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-105 group">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Globe className="h-16 w-16 text-primary group-hover:text-accent transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-accent/10"></div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors font-mono">ucsd social app</CardTitle>
                <CardDescription className="text-muted-foreground">
                  full-stack social platform connecting ucsd students through campus events. features ai-powered flyer
                  scanning, google calendar integration, real-time notifications, and intelligent event recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Google Maps
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10 font-mono bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/80 font-mono">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    demo
                  </Button>
                </div>
              </CardContent>
            </Card>


          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-105 group">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Zap className="h-16 w-16 text-primary group-hover:text-accent transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-accent/10"></div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors font-mono">eventory</CardTitle>
                <CardDescription className="text-muted-foreground">
                  ai-powered discord bot that automatically detects and tracks academic deadlines, club events, and
                  announcements. uses google gemini to parse natural language into structured calendar data 
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Gemini AI
                  </Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    Discord.py
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    FastAPI
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    React
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10 font-mono bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/80 font-mono">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    demo
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-105 group">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Zap className="h-16 w-16 text-primary group-hover:text-accent transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-accent/10"></div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors font-mono">
                  gym trainer bot
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  ai-powered fitness buddy that doesn't judge your form (unlike real trainers). gives personalized
                  workouts and tracks your gains 
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    ML
                  </Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    FastAPI
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10 font-mono bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/80 font-mono">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary/50 transition-all hover:scale-105 group">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <GameController2 className="h-16 w-16 text-secondary group-hover:text-accent transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary/10 to-primary/10"></div>
                </div>
                <CardTitle className="group-hover:text-secondary transition-colors font-mono">
                  poker tracker
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  full-stack app for tracking poker games because someone always "forgets" how much they owe. features
                  real-time stats and payment tracking 
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    MongoDB
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-secondary/30 text-secondary hover:bg-secondary/10 font-mono bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    code
                  </Button>
                  <Button size="sm" className="flex-1 bg-secondary hover:bg-secondary/80 font-mono">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent/50 transition-all hover:scale-105 group">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Globe className="h-16 w-16 text-accent group-hover:text-primary transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/10 to-secondary/10"></div>
                </div>
                <CardTitle className="group-hover:text-accent transition-colors font-mono">
                  stock predictor
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  ml model that predicts stock movements (disclaimer: still broke). not financial advice! 
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    Pandas
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/30 text-accent hover:bg-accent/10 font-mono bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    code
                  </Button>
                  <Button size="sm" className="flex-1 bg-accent hover:bg-accent/80 font-mono">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          {/* <div className="font-mono text-accent mb-2">&gt; ./connect.sh</div> */}
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">let's connect</h2>
          <p className="text-muted-foreground text-lg mb-12">
            always down to chat about tech or anything unrelated!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-mono font-semibold mb-2 text-primary">email</h3>
                <p className="text-muted-foreground font-mono text-sm">rmadan@ucsd.edu</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary/50 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Linkedin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-mono font-semibold mb-2 text-secondary">linkedin</h3>
                <p className="text-muted-foreground font-mono text-sm">@madanrohan</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent/50 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Github className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-mono font-semibold mb-2 text-accent">github</h3>
                <p className="text-muted-foreground font-mono text-sm">@rohanmad</p>
              </CardContent>
            </Card>
          </div>

          {/* <Button size="lg" className="bg-primary hover:bg-primary/80 neon-border font-mono text-lg px-8">
            <Coffee className="mr-2 h-5 w-5" />
            start_conversation()
          </Button> */}
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-mono">
            © 2025 rohan.dev | built with next.js + tailwind
          </p>
          <p className="text-muted-foreground/60 font-mono text-sm mt-2">// todo: add more projects</p>
        </div>
      </footer>
    </div>
  )
}