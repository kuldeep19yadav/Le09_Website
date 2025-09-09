"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/10 rounded-full animate-float animate-delay-400"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-accent/25 rounded-full animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            <span className="block text-balance">Design</span>
            <span className="block text-balance">Transform</span>
            <span className="block text-balance">Accelerate</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-balance ${
              isVisible ? "animate-fade-in-up animate-delay-200 opacity-100" : "opacity-0"
            }`}
          >
            Redefining user experiences through Behavioural Science & AI
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
              isVisible ? "animate-fade-in-up animate-delay-400 opacity-100" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 group bg-transparent"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Our Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none"></div>
    </section>
  )
}
