import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Lubisz słodkie kłamstwa czy wolisz gorzką prawdę?
        </p>
        <p className="mt-4">
        Jeśli to pierwsze, to nawet nie sięgaj po tę książkę. Jeśli jednak chcesz dowiedzieć się w jaki sposób media próbują Tobą manipulować, zarządzać Twoimi emocjami i wpływać na Twoje decyzje – to lektura dla Ciebie.
        </p>
        <p className="mt-4">
          W prawie wszystkich opisanych w książce wydarzeniach uczestniczyłem bezpośrednio, albo przynajmniej pośrednio. Dodatkowo przeanalizowałem setki materiałów, artykułów, audycji i nagrań z ostatnich lat. Bardzo często prawda nie była taka, jak nam ją przedstawiano. Chcesz ją poznać? Zapraszam do lektury. Ostrzegam – może okazać się, że Twój ulubiony dziennikarz to manipulant, a telewizja i portal newsowy to zwykłe fabryki kłamstw… 
        </p>
        <p className="mt-4 italic text-sm text-right">
          Książka ta jest dla tych, którzy szukają odpowiedzi i nie uważają, że postradali wszystkie rozumy. Dla pragnących poznać punkt widzenia, którego zazwyczaj nie spotka się w mediach – czyli gdzieś pomiędzy partyjną propagandą i nienawistnym atakiem. Dla ciekawych kulisów, którzy pragną poznać jak wyglądają manipulacje dziennikarzy i polityków w sprawach, które – jak się mogło wydawać – dobrze znali. Wreszcie jest to pozycja dla wszystkich, którzy chcą wyrobić sobie zdanie, zamiast za głosem tłumu krytykować film, którego widzieli jedynie trailer.
        </p>
      </Container>
    </section>
  )
}
