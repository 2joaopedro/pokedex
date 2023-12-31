import Logo from './logo.svg'
import GitHub from './github.svg'
import Likedin from './linkedin.svg'

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex fixed z-20  items-center justify-between bg-red-500 shadow-xl min-w-full h-10 px-16 py-10">
      <Image src={Logo} alt="logo" className="w-24" />

      <div className="flex items-center gap-5">
        <Link href="https://github.com/2joaopedro/pokedex">
          <Image
            src={GitHub}
            alt="GitHub"
            width={35}
            className="transform hover:scale-x-[-1] transition-transform duration-1000"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/jo%C3%A3o-pedro-franchini-56b5821ba/">
          <Image
            src={Likedin}
            alt="Likedin"
            width={35}
            className="transform hover:scale-x-[-1] transition-transform duration-1000"
          />
        </Link>
      </div>
    </header>
  )
}
