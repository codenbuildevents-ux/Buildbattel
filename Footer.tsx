export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          <span className="text-white">BUILD</span>
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">BATTLE</span>
          <span className="text-white/20"> 2026</span>
        </h2>
        <p className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent italic mb-8 font-serif">Code. Compete. Conquer.</p>
        
        <div className="flex justify-center gap-6 mb-8 text-sm text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex justify-center gap-6 mb-8 text-xs text-gray-500">
          <a href="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
        </div>
        
        <p className="text-gray-600 text-sm">
          © 2026 Codenbuild. All Rights Reserved.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Designed and Developed by <span className="text-gray-500 hover:text-cyan-500 transition-colors cursor-default">CodeNBuild Flow</span>
        </p>
      </div>
    </footer>
  );
}
