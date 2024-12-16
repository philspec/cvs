import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1 className="text-6xl font-bold underline">Next.js</h1>
      <h2 className="text-3xl">Welcome to your new app!</h2>
      <div className="flex flex-row justify-between">
        <Link href="/client/1">Client Component</Link>
        <Link href="/server/1">Server Component</Link>
      </div>
    </div>
  );
}
