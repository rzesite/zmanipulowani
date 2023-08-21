import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/cover.jpg'
import Link from 'next/link'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-blue-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          “Jest duża wydawnicza bomba, bo zawsze gdy polityk pisze książkę jesteśmy podekscytowani.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        {/* <strong className="font-semibold text-blue-600 before:content-['—_']">
          Jan Kowalski
        </strong> */}
        {/* ,  */}
        Polskie Radio
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-book-yellow text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl overflow-hidden bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-book-yellow/30" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold tracking-tighter text-book-y sm:text-6xl">
              Zmanipulowani
            </h1>
            <p className="mt-4 text-4xl text-slate-600">
              czyli jak dobrzy ludzie dają się uwieść inteligentnej propagandzie
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                target='_blank'
                href="https://wolnoscitradycja.salescrm.pl/cart/1eaea418-c88c-4f37-a960-c4019fa55ad5"
                className="p-2 rounded-md text-book-blue bg-book-yellow hover:bg-book-yellow/70 hover:shadow-sm"
              >
                <span className='font-bold'>Kup teraz</span> - 55,00 zł
              </Link>
            </div>
            <ul className='text-xs mt-2 text-slate-600'>
              <li>* w przedsprzedaży z autografem</li>
              <li>** w przypadku dużych zamówień istnieje możliwość złożenia zapytania na adres e-mail: <a className='underline hover:text-book-red' href="mailto:kontakt@wolnoscitradycja.pl">kontakt@wolnoscitradycja.pl</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
