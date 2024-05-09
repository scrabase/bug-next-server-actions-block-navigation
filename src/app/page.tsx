import { revalidatePath } from "next/cache";
import Link from "next/link";
import { SubmitButton } from "./button";

function wait(ms: number): Promise<void> {
  // Wait for the specified amount of time
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Home() {
  async function action() {
    "use server";
    await wait(10_000);
    revalidatePath("/");
  }
  return (
    <main>
      <Link href={`/other-page`}>Go to other page</Link>

      <form action={action}>
        <SubmitButton />
      </form>
    </main>
  );
}
