// import Search from '../Search'
import stylesheet from './style.scss'
import Link from 'next/link'

const Header = () => (
  <nav>
    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
    <ul>
      <li>
        <Link href="/" prefetch>HOME</Link>
      </li>
      <li>
        <Link href="/about" prefetch>PRODUCT</Link>
      </li>
      <li>
        <Link href="/contactos" prefetch>ABOUT</Link>
      </li>
      <li>
        <Link href="/contactos" prefetch>CONTACT</Link>
      </li>
      <li className="action">
        <Link href="/contactos" prefetch>TRY</Link>
      </li>
    </ul>
  </nav>
);

export default Header
