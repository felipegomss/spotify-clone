import { Heart, HomeIcon, Library, Plus, Search } from "lucide-react";

export function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className="space-y-5 mt-12">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your library
        </a>
        <div className="space-y-5 pt-5">
          <a
            href=""
            className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
          >
            <span className="bg-zinc-200 text-black rounded-sm p-1">
              <Plus size={16} />
            </span>
            Create
            <strong></strong>
          </a>
          <a
            href=""
            className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
          >
            <span className="bg-indigo-700 rounded-sm p-1">
              <Heart size={16} fill="rgb(228, 228, 231)" />
            </span>
            Liked Songs
          </a>
        </div>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2 overflow-x-clip">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Coleção Samba
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Funk Hits
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Cook & Chill
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Blues Rock Roadtrip
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Sexy Party Hits
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Creme
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          TRAPando
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Forró Até o Amanhecer
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Paredão Explode
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Rock Classics
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          O Melhor da MPB
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Esquenta Sertanejo
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Pop Up
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Gigantes do Rap Nacional
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          Trabalhando de casa
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          80 Hard Rock
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">
          RAPública
        </a>
      </nav>
    </aside>
  );
}
