export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-800 bg-black/80 py-8">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <div className="font-semibold">Dark Panel Comics</div>
            <div>contact@darkpanel.example</div>
          </div>

          <div className="flex gap-6">
            <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
          </div>

          <div className="text-right">
            <a href="#" className="hover:text-white">Terms</a> · <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-600">© {new Date().getFullYear()} Dark Panel Comics — All rights reserved</div>
      </div>
    </footer>
  );
}
