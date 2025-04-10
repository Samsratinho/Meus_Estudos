import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Alura Cases - Home Page</h1>
      <Link href="/faq">
        Ir para o faq
      </Link>
    </div>
  );
}