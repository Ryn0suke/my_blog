import Link from "next/link"

export default function Header() {
    return(
        <header className='bg-yellow-100'>
        <Link href="/">
          <img src='/banner.png' width="60%" className='mx-auto' />
        </Link>
      </header>
    )
}