import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div>
     <UserButton afterSignOutUrl="/"/>
    <h2>Test </h2>
   </div>
  )
}
