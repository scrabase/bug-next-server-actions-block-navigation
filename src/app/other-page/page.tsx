import Link from "next/link";

export default function OtherPage() {
  return (
    <main>
      <h1>Other Page</h1>
      <Link href={`/`}>Go home</Link>
    </main>
  );
}
