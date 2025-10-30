import ComicCard from './ComicCard';

export default function ComicGrid({ items = [] }){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map(item => <ComicCard key={item.id} item={item} />)}
    </div>
  );
}
