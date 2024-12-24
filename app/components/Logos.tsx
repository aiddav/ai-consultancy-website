import Image from 'next/image'

export default function Logos() {
  const logos = [
    { 
      name: 'Oxford University', 
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Circlet.svg'
    },
    { 
      name: 'Harvard University', 
      src: 'https://commons.wikimedia.org/wiki/File:Harvard_University_shield.svg#/media/File:Harvard_University_shield.svg'
    },
    { 
      name: 'University College Cork', 
      src: 'https://upload.wikimedia.org/wikipedia/en/1/12/University_College_Cork_logo.svg'
    },
    { 
      name: 'Y Combinator', 
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg'
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div key={logo.name} className="w-32 h-16 relative flex items-center justify-center">
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              ) : (
                <span className="text-sm text-muted-foreground">{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

