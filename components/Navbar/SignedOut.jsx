import Link from 'next/link'

const SignedOut = ()=>{
  return <li>
    <Link href="/enter"><button className="btn-blue">login</button></Link>
  </li>
}

export default SignedOut;
