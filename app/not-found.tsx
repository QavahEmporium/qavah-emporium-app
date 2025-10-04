import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
