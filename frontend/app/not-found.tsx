import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col gap-4 text-center items-center justify-center">
      <h2 className="text-5xl font-bold">Ups, Not Found!</h2>
      <p className="text-gray-500 text-sm">Could not find requested resource</p>
      <Link href="/" className="bg-primary text-white px-4 py-2 rounded-md">
        Return Home
      </Link>
    </div>
  );
}
