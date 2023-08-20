import { GridPattern } from '@/components/GridPattern'
import Image from 'next/image'
import witLogo from '@/images/wit.png'

export function Footer() {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
        <div className='flex items-center justify-center'>
          <Image
            className="inset-0 h-44 w-44 object-cover"
            src={witLogo}
            alt="Wolność i Tradycja"
          />
        </div>
    </footer>
  )
}
