import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* *************親要素指定なし・子要素width={300}・height={300}************* */}
      <div className="max-w-6xl mx-auto p-5">
        <h1
          className="text-center text-4xl font-bold mb-8"
          style={{ color: "#c644e1" }}
        >
          Next.js Imageコンポーネント widthとheightの指定による変化
        </h1>

        <h1
          className="text-2xl font-bold mb-8 bg-gray-200 p-4 rounded"
          style={{ color: "#3f2c96" }}
        >
          ▼ ① 親要素指定なし・子要素width={300}・height={300}
        </h1>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div>
            <h3>Obsidian 【50px】</h3>
            <div>
              <Image
                src="/img/Obsidian_50px.png"
                alt="Obsidian 50px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【150px】</h3>
            <div>
              <Image
                src="/img/Obsidian_150px.png"
                alt="Obsidian 150px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【300px】</h3>
            <div>
              <Image
                src="/img/Obsidian_300px.png"
                alt="Obsidian 300px"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div>
            <h3>Obsidian 【500px】</h3>
            <div>
              <Image
                src="/img/Obsidian_500px.png"
                alt="Obsidian 500px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【600px】</h3>
            <div>
              <Image
                src="/img/Obsidian_600px.png"
                alt="Obsidian 600px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【1000px】</h3>
            <div>
              <Image
                src="/img/Obsidian_1000px.png"
                alt="Obsidian 1000px"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div>
            <h3>Obsidian 【1200px】</h3>
            <div>
              <Image
                src="/img/Obsidian_1200px.png"
                alt="Obsidian 1200px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【1500px】</h3>
            <div>
              <Image
                src="/img/Obsidian_1500px.png"
                alt="Obsidian 1500px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【2000px】</h3>
            <div>
              <Image
                src="/img/Obsidian_2000px.png"
                alt="Obsidian 2000px"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* *************親要素 w-[300px] h-[300px]・子要素 width={300}・height={300}************* */}
      <div className="max-w-6xl mx-auto p-5 mt-20">
        <h1
          className="text-2xl font-bold mb-8 bg-gray-200 p-4 rounded"
          style={{ color: "#3f2c96" }}
        >
          ▼ ② 親要素 w-[300px] h-[300px]・子要素 width={300}・height={300}
        </h1>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div>
            <h3>Obsidian 【50px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_50px.png"
                alt="Obsidian 50px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【150px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_150px.png"
                alt="Obsidian 150px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【300px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_300px.png"
                alt="Obsidian 300px"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div>
            <h3>Obsidian 【500px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_500px.png"
                alt="Obsidian 500px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【600px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_600px.png"
                alt="Obsidian 600px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【1000px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_1000px.png"
                alt="Obsidian 1000px"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div>
            <h3>Obsidian 【1200px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_1200px.png"
                alt="Obsidian 1200px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【1500px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_1500px.png"
                alt="Obsidian 1500px"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【2000px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_2000px.png"
                alt="Obsidian 2000px"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>


      {/* *************親要素 w-[300px] h-[300px]・子要素 width={600}・height={600}************* */}
      <div className="max-w-6xl mx-auto p-5 mt-20">
        <h1
          className="text-2xl font-bold mb-8 bg-gray-200 p-4 rounded"
          style={{ color: "#3f2c96" }}
        >
          ▼ ③ 親要素 w-[300px] h-[300px]・子要素 width={600}・height={600}
        </h1>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div>
            <h3>Obsidian 【50px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_50px.png"
                alt="Obsidian 50px"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【150px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_150px.png"
                alt="Obsidian 150px"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【300px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_300px.png"
                alt="Obsidian 300px"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div>
            <h3>Obsidian 【500px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_500px.png"
                alt="Obsidian 500px"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【600px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_600px.png"
                alt="Obsidian 600px"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【1000px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_1000px.png"
                alt="Obsidian 1000px"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div>
            <h3>Obsidian 【1200px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_1200px.png"
                alt="Obsidian 1200px"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【1500px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_1500px.png"
                alt="Obsidian 1500px"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【2000px】</h3>
            <div className="w-[300px] h-[300px]">
              <Image
                src="/img/Obsidian_2000px.png"
                alt="Obsidian 2000px"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>


      {/* *************親要素 w-[300px] h-[300px]・子要素 fill************* */}
      <div className="max-w-6xl mx-auto p-5 mt-20">
        <h1
          className="text-2xl font-bold mb-8 bg-gray-200 p-4 rounded"
          style={{ color: "#3f2c96" }}
        >
          ▼ ④ 親要素 w-[300px] h-[300px]・子要素 fill
        </h1>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div>
            <h3>Obsidian 【50px】</h3>
            <div className="w-[300px] h-[300px] relative">
              <Image 
                src="/img/Obsidian_50px.png"
                alt="Obsidian 50px" 
                fill 
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【150px】</h3>
            <div className="w-[300px] h-[300px] relative">
              <Image 
                src="/img/Obsidian_150px.png" 
                alt="Obsidian 150px" 
                fill 
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【300px】</h3>
            <div className="w-[300px] h-[300px] relative">
              <Image 
                src="/img/Obsidian_300px.png" 
                alt="Obsidian 300px" 
                fill 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div>
            <h3>Obsidian 【500px】</h3>
            <div className="w-[300px] h-[300px] relative">
              <Image 
                src="/img/Obsidian_500px.png" 
                alt="Obsidian 500px" 
                fill 
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【600px】</h3>
            <div className="w-[300px] h-[300px] relative">
              <Image 
                src="/img/Obsidian_600px.png" 
                alt="Obsidian 600px" 
                fill 
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【1000px】</h3>
            <div className="w-[300px] h-[300px] relative">
              <Image
                src="/img/Obsidian_1000px.png"
                alt="Obsidian 1000px"
                fill 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div>
            <h3>Obsidian 【1200px】</h3>
            <div className="w-[300px] h-[300px] relative">
              <Image
                src="/img/Obsidian_1200px.png"
                alt="Obsidian 1200px"
                fill
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【1500px】</h3>
            <div className="w-[300px] h-[300px] relative">
              <Image
                src="/img/Obsidian_1500px.png"
                alt="Obsidian 1500px"
                fill
              />
            </div>
          </div>

          <div>
            <h3>Obsidian 【2000px】</h3>
            <div className="w-[300px] h-[300px] relative">
              <Image
                src="/img/Obsidian_2000px.png"
                alt="Obsidian 2000px"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
