import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/home">Return Home</Link>
    </div>
  )
}