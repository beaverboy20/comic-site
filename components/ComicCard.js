import Link from 'next/link';

export default function ComicCard({ item }){
  return (
    <article className="bg-gray-900/30 rounded overflow-hidden" aria-labelledby={`title-${item.id}`}>
      <Link href={`/comics/${item.id}`}>
        <a>
          <img src={item.image} alt={`${item.title} cover`} className="w-full h-56 object-cover" />
          <div className="p-3">
            <h3 id={`title-${item.id}`} className="font-semibold">{item.title}</h3>
            <div className="text-sm text-gray-300">{item.publisher} • {item.genre}</div>
            <div className="mt-2 font-mono">${item.price.toFixed(2)}</div>
          </div>
        </a>
      </Link>
    </article>
  );
}
