import Link from 'next/link';

export default function Carousel({ items = [] }){
  return (
    <div className="relative">
      <div className="overflow-x-auto hide-scrollbar flex gap-4 py-4">
        {items.map(it => (
          <Link key={it.id} href={`/comics/${it.id}`}><a className="min-w-[300px] md:min-w-[420px] bg-gradient-to-b from-gray-900/40 to-black rounded-lg p-2 flex-shrink-0" aria-label={`View ${it.title}`}>
            <img src={it.image} alt={it.title} className="w-full h-64 object-cover rounded" />
            <div className="mt-2">
              <div className="font-semibold">{it.title}</div>
            </div>
          </a></Link>
        ))}
      </div>
    </div>
  );
}
