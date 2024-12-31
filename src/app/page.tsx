import Link from "next/link";

export default function Home() {
  return (
   <div className="bg-black home bg-cover bg-center">
    <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
      <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 
      sm:max-w-96 mx-auto text-white sm:text-2xl">
        <h1 className="text-4xl font-bold">
          Alieu&apos;s Repair Shop
          </h1>
        <address>
          Gambia, Abuko
        </address>
        <p>
          Open from: 9:00am to 6:00pm
        </p>
        <Link href="tel: +220 3538808" className="hover:underline">
         +220 3538808
        </Link>
      </div>
    </main>
   </div>
  );
}
