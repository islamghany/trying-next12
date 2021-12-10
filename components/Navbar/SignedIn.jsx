import Link from 'next/link'

const SignedIn = ({user,username})=>{
  return <>
    <li>
      <Link href="/admin"><button className="btn-blue">Write post</button></Link>
    </li>
    <li>
     <Link href={`/${username}`}><img src={user.photoURL} /></Link>
   </li>
  </>
}

export default SignedIn;
