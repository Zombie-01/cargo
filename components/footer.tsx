export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Холбоо барих
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center hover:text-blue-400 transition-colors">
                <span className="w-24">Утас:</span>
                <span>+976 xxxx xxxx</span>
              </p>
              <p className="flex items-center hover:text-blue-400 transition-colors">
                <span className="w-24">Имэйл:</span>
                <span>info@cargo.mn</span>
              </p>
              <p className="flex items-center hover:text-blue-400 transition-colors">
                <span className="w-24">Хаяг:</span>
                <span>Улаанбаатар хот</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Ажлын цаг
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center justify-between">
                <span>Даваа - Баасан:</span>
                <span>09:00 - 18:00</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Бямба:</span>
                <span>09:00 - 14:00</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Ням:</span>
                <span>Амарна</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Бидний тухай
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Олон улсын ачаа тээврийн үйлчилгээ үзүүлэгч компани бөгөөд таны итгэлт түнш байх болно.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Cargo Services. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}