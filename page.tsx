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

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-primary/20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary terminal-cursor">{displayText}</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors hover:glow-text">
                ./about
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors hover:glow-text">
                ./skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors hover:glow-text">
                ./projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors hover:glow-text">
                ./contact
              </a>
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

            <div className="font-mono text-sm text-muted-foreground mb-4">$ whoami</div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">rohan madan</span>
            </h1>

            <div className="font-mono text-lg md:text-xl text-accent mb-2">&gt; cs student @ ucsd</div>
            <div className="font-mono text-lg md:text-xl text-secondary mb-8">&gt; building cool stuff with code</div>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              passionate about ai/ml, full-stack dev, and creating solutions that actually matter. currently hunting for
              swe internships to level up my skills 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/80 neon-border font-mono">
                <Download className="mr-2 h-4 w-4" />
                download_resume.pdf
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 font-mono bg-transparent"
              >
                <Coffee className="mr-2 h-4 w-4" />
                let's_chat()
              </Button>
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
            <div className="font-mono text-accent mb-2">&gt; cat about.txt</div>
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
                hey there! 👋 i'm rohan, a cs student who's obsessed with turning caffeine into code. currently grinding
                through my junior year at ucsd while building random projects that hopefully don't break production.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                when i'm not debugging at 3am, you'll find me exploring ai/ml, building full-stack apps, or trying to
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
            <div className="font-mono text-accent mb-2">&gt; ls -la skills/</div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">tech stack</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-105 group">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-primary mx-auto group-hover:text-accent transition-colors" />
                <CardTitle className="text-primary font-mono">frontend.js</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    Tailwind
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary/50 transition-all hover:scale-105 group">
              <CardHeader className="text-center">
                <Database className="h-12 w-12 text-secondary mx-auto group-hover:text-accent transition-colors" />
                <CardTitle className="text-secondary font-mono">backend.py</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    Express
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                    MongoDB
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent/50 transition-all hover:scale-105 group">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-accent mx-auto group-hover:text-primary transition-colors" />
                <CardTitle className="text-accent font-mono">ai_ml.ipynb</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    TensorFlow
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    PyTorch
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                    Pandas
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    Scikit-learn
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-105 group">
              <CardHeader className="text-center">
                <Terminal className="h-12 w-12 text-primary mx-auto group-hover:text-accent transition-colors" />
                <CardTitle className="text-primary font-mono">tools.sh</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    Git
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    AWS
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    VS Code
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-mono text-accent mb-2">&gt; git log --oneline</div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">projects</h2>
            <p className="text-muted-foreground text-lg">stuff i've built (that actually works)</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-105 group">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Zap className="h-16 w-16 text-primary group-hover:text-accent transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-accent/10"></div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors font-mono">
                  gym_trainer_bot.py
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  ai-powered fitness buddy that doesn't judge your form (unlike real trainers). gives personalized
                  workouts and tracks your gains 💪
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
                  poker_tracker.js
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  full-stack app for tracking poker games because someone always "forgets" how much they owe. features
                  real-time stats and payment tracking 🃏
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
                  stock_predictor.ai
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  ml model that predicts stock movements (disclaimer: still broke). uses lstm networks and sentiment
                  analysis. not financial advice! 📈
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
          <div className="font-mono text-accent mb-2">&gt; ./connect.sh</div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">let's connect</h2>
          <p className="text-muted-foreground text-lg mb-12">
            always down to chat about tech, internships, or why my code works on my machine but not yours
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-mono font-semibold mb-2 text-primary">email.send()</h3>
                <p className="text-muted-foreground font-mono text-sm">rmadan@ucsd.edu</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary/50 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Linkedin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-mono font-semibold mb-2 text-secondary">linkedin.connect()</h3>
                <p className="text-muted-foreground font-mono text-sm">@madanrohan</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent/50 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <Github className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-mono font-semibold mb-2 text-accent">git.clone()</h3>
                <p className="text-muted-foreground font-mono text-sm">@rohanmad</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/80 neon-border font-mono text-lg px-8">
            <Coffee className="mr-2 h-5 w-5" />
            start_conversation()
          </Button>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-mono">
            © 2024 rohan.dev | built with next.js + tailwind + lots of coffee ☕
          </p>
          <p className="text-muted-foreground/60 font-mono text-sm mt-2">// todo: add more cool projects</p>
        </div>
      </footer>
    </div>
  )
}
