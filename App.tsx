import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import SuperEmployee from './components/SuperEmployee';
import ChatWidget from './components/ChatWidget';
import TechBackground from './components/TechBackground';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-200 font-sans selection:bg-blue-500 selection:text-white relative">
      <TechBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Features />
        <Comparison />
        <SuperEmployee />
      </main>

      <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-800 py-16 relative z-10">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold text-white mb-4">丹之辰科技</h2>
                    <p className="text-slate-500 max-w-sm">
                        致力于为企业提供最前沿的AI数字人与自动化办公解决方案。让AI成为您的最佳商业伙伴。
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">产品服务</h4>
                    <ul className="space-y-2 text-slate-500 text-sm">
                        <li className="hover:text-blue-400 cursor-pointer">AI 数字人直播</li>
                        <li className="hover:text-blue-400 cursor-pointer">AI 超级员工</li>
                        <li className="hover:text-blue-400 cursor-pointer">短视频矩阵系统</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">联系我们</h4>
                    <ul className="space-y-2 text-slate-500 text-sm">
                        <li className="hover:text-blue-400 cursor-pointer">商务合作</li>
                        <li className="hover:text-blue-400 cursor-pointer">加入我们</li>
                        <li className="hover:text-blue-400 cursor-pointer">关于公司</li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 text-xs">
                    © 2024 Dan Zhi Chen Technology. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Github className="text-slate-600 hover:text-white cursor-pointer w-5 h-5" />
                    <Twitter className="text-slate-600 hover:text-white cursor-pointer w-5 h-5" />
                    <Linkedin className="text-slate-600 hover:text-white cursor-pointer w-5 h-5" />
                    <Mail className="text-slate-600 hover:text-white cursor-pointer w-5 h-5" />
                </div>
            </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;