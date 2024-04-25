export default function Home() {
  return (
    <main className="justify-center items-center min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <p className="text-2xl font-bold text-gray-800">TailwindTemplates</p>
          <nav className="flex space-x-20">
            <a href="#" className="text-gray-600 hover:text-gray-800">Templates</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
          </nav>
        </div>
      </div>
      <div className="my-20"></div>
      <div className="h-96 w-full bg-gray-100 mb-20 rounded-2xl shadow-xl bg-cover bg-center relative">
        <img
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="ml-90 text-left ml-60">
          <button className="bg-blue-200 hover:bg-blue-800 text-blue-700 font-bold py-1 px-1 rounded">
            Update
          </button>
          <div className="my-5"></div>
          <p className="text-5xl font-semibold text-gray-800">TailwindTemplates v2 is here</p>

        </div>
        <div className="max-w-6xl mx-auto ml-60 text-left">
          <div className="my-10"></div>
          <p className="text-0.5xl font-semibold text-gray-800">TailwindTemplates V2 is finally here! Our focus for TailwindTemplates v2 is to bring</p>
          <p className="text-0.5xl font-semibold text-gray-800">open-source design systems to Tailwindcss. Each design system has a detailed</p>
          <p className="text-0.5xl font-semibold text-gray-800">guideline to provide consistency and coherence within a user interface.</p>
          <div className="my-5"></div>
          <p className="text-2xl font-semibold text-gray-800">What to expect?</p>
          <div className="my-5"></div>
          <p className="text-0.5l font-semibold text-gray-800">Over the coming months, we will expand the design systems that are currently available at launch. In</p>
          <p className="text-0.5l font-semibold text-gray-800">addition to that, we are planning to create several tailwind configurations to easily get started with the</p>
          <p className="text-0.5xl font-semibold text-gray-800">proper colors and variants that belong to each design system. </p>
          <div className="my-5"></div>
          <p className="text-2xl font-semibold text-gray-800"> Not only templates</p>
          <div className="my-5"></div>
          <p className="text-0.5xl font-semibold text-gray-800">We are planning to bring more tailwind and web development-related content such as videos, blog</p>
          <p className="text-0.5xl font-semibold text-gray-800">posts, tutorials and news. </p>
        </div>
      </div>
      <div className="h-96 w-full bg-blue-700 mt-36 bg-cover bg-center relative" >
      </div>
    </main>
  );
}
