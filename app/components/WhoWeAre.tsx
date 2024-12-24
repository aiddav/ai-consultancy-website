import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code, Database, Palette, LineChart } from 'lucide-react'

export default function WhoWeAre() {
  const teams = [
    {
      name: 'AI Engineers',
      description: 'Expert developers specializing in machine learning and AI model implementation.',
      icon: Code,
    },
    {
      name: 'Data Scientists',
      description: 'Skilled professionals in data analysis, processing, and model training.',
      icon: Database,
    },
    {
      name: 'UX/UI Designers',
      description: 'Creative minds focused on making AI interfaces intuitive and user-friendly.',
      icon: Palette,
    },
    {
      name: 'Performance Analysts',
      description: 'Specialists in monitoring and optimizing AI agent performance.',
      icon: LineChart,
    },
  ]

  return (
    <section id="who-we-are" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who We Are</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Our company brings together diverse teams of experts, each playing a crucial role in delivering cutting-edge AI solutions for your business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team) => (
            <Card key={team.name}>
              <CardHeader>
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <team.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{team.name}</CardTitle>
                <CardDescription>{team.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

