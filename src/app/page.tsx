import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="p-10 text-3xl">
        Neighbourhood Watch Rounders
      </div>
        <div className="flex flex-row">
            <Image src="/logo.png" alt="logo" height={200} width={200} />
        </div>
        <div className="flex flex-col gap-2 px-10">
            The game of rounders dates back as far as 1744 where people literally started to hit a ball with a stick. Since then the game has evolved somewhat of which you can read more of in this article. For those of you familiar with Baseball then you will likely pick up the rules of rounders pretty comfortably and notice many similarities.
      </div>
    </main>
  );
}
