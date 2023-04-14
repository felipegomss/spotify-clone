import {
  Maximize2,
  MonitorSpeaker,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { List, Mic2 } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/don-l-roteiro-para-ainouz-volume-2.jpg"
          width={56}
          height={56}
          alt=""
        />
        <div className="flex flex-col">
          <strong className="font-normal">pânico de nada</strong>
          <span className="text-xs text-zinc-400">Don L</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack
              size={20}
              fill="rgb(228 228 231)"
              className="text-zinc-200"
            />
            <button className=" w-10 h-10  items-center justify-center pl-1 flex rounded-full bg-white text-black">
              <Play fill="black" />
            </button>
            <SkipForward
              size={20}
              fill="rgb(228 228 231)"
              className="text-zinc-200"
            />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:27</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:44</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mic2 size={20} />
        <List size={20} />
        <MonitorSpeaker size={20} />
        <div className="flex items-center gap-2">
          <Volume2 size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-20 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
