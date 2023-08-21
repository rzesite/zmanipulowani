import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/lukasz.jpg'
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";


export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative border-8 border-slate-50 mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="2" id="screencasts-title">
              O autorze
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block">Łukasz Schreiber </span>
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              polityk i samorządowiec, minister w rządzie Mateusza Morawieckiego, poseł na Sejm z okręgu bydgoskiego od 2015 roku. Mistrz Polski juniorów w szachach, dziś mecenas tej dyscypliny w Polsce. Autor książki „Sulla 138 - 78 p.n.e.” poświęconej jednemu z najwybitniejszych wodzów Republiki Rzymskiej – Lucjuszowi Korneliuszowi Sulli. Prywatnie: meloman, kinoman, bibliofil i kibic sportowy.
            </p>
            <p className="mt-8 space-x-5">
              <Link
                target='_blank'
                href="https://twitter.com/LukaszSchreiber"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600 hover:text-black"
              >
                <BsTwitter className="h-10 w-10" />
              </Link>
              <Link
                target='_blank'
                href="https://www.facebook.com/poselschreiberlukasz"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600 hover:text-black"
              >
                <BsFacebook className="h-10 w-10" />
              </Link>
              <Link
                target='_blank'
                href="https://www.instagram.com/lukaszschreiber/"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600 hover:text-black"
              >
                <BsInstagram className="h-10 w-10" />
              </Link>
              <Link
                target='_blank'
                href="https://www.youtube.com/@ukaszschreiber7498"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600 hover:text-black"
              >
                <BsYoutube className="h-10 w-10" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
