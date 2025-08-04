import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Obsidian 画像ギャラリー
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Obsidian 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Obsidian 1
              </h3>
            </div>
            <div className="relative">
              <Image
                src="/img/Obsidian1.png"
                alt="Obsidian 1"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Obsidian 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Obsidian 2
              </h3>
            </div>
            <div className="relative">
              <Image
                src="/img/Obsidian2.png"
                alt="Obsidian 2"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Obsidian 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Obsidian 3
              </h3>
            </div>
            <div className="relative">
              <Image
                src="/img/Obsidian3.png"
                alt="Obsidian 3"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Obsidian 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Obsidian 4
              </h3>
            </div>
            <div className="relative">
              <Image
                src="/img/Obsidian4.png"
                alt="Obsidian 4"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Obsidian 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Obsidian 5
              </h3>
            </div>
            <div className="relative">
              <Image
                src="/img/Obsidian5.png"
                alt="Obsidian 5"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Obsidian 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Obsidian 6
              </h3>
            </div>
            <div className="relative">
              <Image
                src="/img/Obsidian6.jpeg"
                alt="Obsidian 6"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Obsidian 7 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Obsidian 7
              </h3>
            </div>
            <div className="relative">
              <Image
                src="/img/Obsidian7.png"
                alt="Obsidian 7"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
