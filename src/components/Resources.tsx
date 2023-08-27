import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'Figma icon templates',
    description:
      'Pefectly structured templates for quickly designing new icons at dozens of common sizes.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Weekly icon teardowns',
    description:
      'Weekly videos where we dissect and recreate beautiful icons we find on the web.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Community of icon designers',
    description:
      "A private Discord server where you can get help and give feedback on each others' work.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Cytat z książki
        </SectionHeading>
        <div className="mt-8 font-display md:text-3xl italic text-justify tracking-tight text-slate-900">
          <p className='text-9xl -mb-12'>&ldquo;</p>
          <p>
            Książka ta jest dla tych, którzy szukają odpowiedzi i nie uważają, że pozjadali wszystkie rozumy.
            Dla pragnących poznać punkt widzenia, którego zazwyczaj nie spotka się w mediach – czyli gdzieś pomiędzy
            partyjną propagandą i nienawistnym atakiem. Dla ciekawych kulisów, którzy pragną poznać jak wyglądają
            manipulacje dziennikarzy i polityków w sprawach, które – jak się mogło wydawać – dobrze znali. Wreszcie
            jest to pozycja dla wszystkich, którzy chcą wyrobić sobie zdanie, zamiast za głosem tłumu krytykować
            film, którego widzieli jedynie trailer
          </p>
          <p className='text-9xl text-right'>&rdquo;</p>
        </div>
      </Container>
    </section>
  )
}
