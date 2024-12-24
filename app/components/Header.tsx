import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
         Multimodal 
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#what-we-do" className="text-muted-foreground hover:text-primary transition-colors">What We Do</Link>
          <Link href="#how-we-work" className="text-muted-foreground hover:text-primary transition-colors">How We Work</Link>
          <Link href="#who-we-are" className="text-muted-foreground hover:text-primary transition-colors">Who We Are</Link>
          <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

