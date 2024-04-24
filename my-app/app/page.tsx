import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen flex justify-center items-end">
      <div className="absolute top-0 mt-8 w-full bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <p className="text-2xl font-bold text-gray-800">🔀TailwindTemplates</p>
            <nav className="flex space-x-20">
              <a href="#" className="text-gray-600 hover:text-gray-800">Templates</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Resources</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
