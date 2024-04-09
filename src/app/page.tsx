import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-24">
        Neighbourhood Watch Rounders
      </div>
      <div className="flex flex-col gap-2 p-10">
        <p>Yes</p>
        <p>Sir</p>
      </div>
    </main>
  );
}
