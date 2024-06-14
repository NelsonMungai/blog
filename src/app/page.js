import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-10 bg-gradient-to-r from-purple-500 to-blue-700">
      <div className="flex items-center justify-center flex-col container mx-auto">
        <h2 className="text-4xl text-white font-bold mb-4">
          Browse our Blog collection
        </h2>
        <Link
          href={"/blog"}
          className="bg-white font-semibold text-blue-700 py-2 px-6 rounded-md"
        >
          Explore blogs
        </Link>
      </div>
    </div>
  );
}
