import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="h-screen bg-slate-200">
        <h1 className="bg-slate-800 text-white	">Main</h1>
        <Link href="./teste">Link Teste</Link>
      </main>
    </>
  );
}
