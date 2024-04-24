import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* ヘッダー */}
      <header className="bg-blue-500 text-purple-700">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ようこそ怪しいサイトへ</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">ホーム</a></li>
              <li><a href="#" className="hover:underline">メニュー</a></li>
              <li><a href="#" className="hover:underline">サービス</a></li>
              <li><a href="#" className="hover:underline">ログアウト</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="bg-white py-10">
        <div className="container mx-auto">
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ハイサイ！ ここは沖縄です！</h2>
            <p className="text-lg text-gray-600">This is pen!</p>
          </section>

          <section className="flex justify-center mt-10">
            <div className="rounded-full h-80 w-80 bg-red-500 flex items-center justify-center">
              <p className="text-7xl text-amber-950 font-bold text-center">Hello Japan!</p>
            </div>
          </section>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-blue-500 text-white py-4 text-center">
        <p>&copy; 2024 My Awesome Website. All rights reserved.</p>
      </footer>
    </div>
   
  );
}
