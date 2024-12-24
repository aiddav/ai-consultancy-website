import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Database, Bot, LineChart } from 'lucide-react'

export default function WhatWeDo() {
  const services = [
    {
      title: 'Data Processing',
      description: 'Capture, process, and transform unstructured (emails, PDFs, forms) and structured data (database, spreadsheets)',
      icon: Database,
    },
    {
      title: 'Development',
      description: 'Deploy custom AI agents utilising cutting-edge models to automate workflows.',
      icon: Bot,
    },
    {
      title: 'Monitoring',
      description: 'Monitor and evaluate agent performance on an ongoing basis for optimisation.',
      icon: LineChart,
    },
  ]

  return (
    <section id="what-we-do" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

