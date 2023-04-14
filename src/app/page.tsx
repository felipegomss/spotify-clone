import { Footer } from "@/components/Footer";
import { SideBar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-6">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-bold text-3xl mt-10">Hello, World!</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className=" group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image src="/a7x.jpg" width={104} height={104} alt="" />
              <strong>This is Avenged Seven Fold</strong>
              <button className="invisible w-12 h-12 group-hover:visible items-center justify-center pl-1 flex rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play fill="black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image src="/baianasystem.jpg" width={104} height={104} alt="" />
              <strong>This is BaianaSystem</strong>
              <button className="invisible w-12 h-12 group-hover:visible items-center justify-center pl-1 flex rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play fill="black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image src="/cartola.jpg" width={104} height={104} alt="" />{" "}
              <strong>This is Cartola</strong>
              <button className="invisible w-12 h-12 group-hover:visible items-center justify-center pl-1 flex rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play fill="black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/don-l-roteiro-para-ainouz-volume-2.jpg"
                width={104}
                height={104}
                alt=""
              />

              <strong>Roteiro Pra Aïnouz, Vol. 2</strong>
              <button className="invisible w-12 h-12 group-hover:visible items-center justify-center pl-1 flex rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play fill="black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image src="/ladrao.jpg" width={104} height={104} alt="" />{" "}
              <strong>Ladrão</strong>
              <button className="invisible w-12 h-12 group-hover:visible items-center justify-center pl-1 flex rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play fill="black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image src="/majorrd.jpg" width={104} height={104} alt="" />{" "}
              <strong>This is MajorRD</strong>
              <button className="invisible w-12 h-12 group-hover:visible items-center justify-center pl-1 flex rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play fill="black" />
              </button>
            </a>
          </div>

          <h2 className="font-bold text-3xl mt-10">
            Made By{" "}
            <a href="https://felipegomes.me" target="_blank">
              Felipe Gomes
            </a>
          </h2>

          <div className="grid grid-cols-7 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                src="/don-l-roteiro-para-ainouz-volume-2.jpg"
                width={104}
                height={104}
                alt=""
                className="w-full"
              />
              <strong className="font-semibold">
                Roteiro Pra Aïnouz, Vol. 2
              </strong>
              <span className="text-sm text-zinc-500">Don L</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
