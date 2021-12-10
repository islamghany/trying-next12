import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import Link from 'next/link';

const Navbar = ()=>{
  const user = null;
  const username = null;
  return <nav className="navbar">
    <ul>
      <li>
        <Link href="/"><button>FEED</button></Link>
      </li>
      {username ? <SignedIn user={user} username={username} /> : <SignedOut />}
    </ul>
  </nav>
}

export default Navbar;
