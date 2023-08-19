import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      {/* <TableOfContents /> */}
      {/* <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Testimonial> */}
      {/* <Screencasts /> */}
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Super Express',
          role: '',
          image: avatarImage2,
        }}
      >
        <p>
          Minister Łukasz Schreiber od dawna aktywnie zajmuje się polityką. W tym czasie zdążył poznać wiele sekretów, do których większość Polaków nie ma dostępu. Teraz zdecydował się je ujawnić!
        </p>
      </Testimonial>
      {/* <Resources /> */}
      <FreeChapters />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Author />
      <Footer />
    </>
  )
}
