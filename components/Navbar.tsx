import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#' },
    { name: '数字人直播', href: '#features' },
    { name: 'AI超级员工', href: '#super-employee' },
    { name: '关于我们', href: '#' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                <Cpu size={24} />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
                丹之辰<span className="text-blue-400">科技</span>
            </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                    {link.name}
                </a>
            ))}
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href}
                    className="text-slate-300 hover:text-white block"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {link.name}
                </a>
            ))}
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold">
                立即咨询
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;