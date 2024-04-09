import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="p-10 text-3xl">
        Neighbourhood Watch Rounders
      </div>
        <div className="flex flex-row">
            <Image src="/logo.png" alt="logo" height={100} width={100} />
        </div>
        <div className="flex flex-col gap-2 px-10">
          Info info info
      </div>
    </main>
  );
}
