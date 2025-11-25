import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 animate-fade-in">
              <Sparkles size={14} />
              <span>AI 驱动未来直播</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 drop-shadow-sm">
              丹之辰<br/>AI数字人直播
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
              数字人直播、实景直播、视频直播三大AI类型。六大核心AICG技术，私有化部署，一次购买，终身使用。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg shadow-lg shadow-blue-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2">
                立即咨询 <Play size={20} fill="currentColor" />
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white rounded-lg font-bold text-lg transition-all">
                观看演示
              </button>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="lg:w-1/2 relative">
             <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/50 group">
                {/* Simulated UI for Live Streamer */}
                <img 
                  src="https://picsum.photos/800/600?random=1" 
                  alt="AI Live Streamer Interface" 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                
                {/* Floating UI Elements Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full border-2 border-green-400 p-0.5">
                         <img src="https://picsum.photos/100/100?random=2" className="w-full h-full rounded-full object-cover" alt="Avatar"/>
                      </div>
                      <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-700">
                         <p className="text-green-400 text-xs font-bold">正在直播</p>
                         <p className="text-white text-sm font-medium">AI 超级主播 - 24小时不间断</p>
                      </div>
                   </div>
                   <div className="flex gap-2 overflow-hidden">
                      {['欢迎新朋友', '产品链接在下方', '真人语音克隆'].map((tag, i) => (
                         <span key={i} className="px-3 py-1 bg-blue-600/30 border border-blue-500/30 rounded-full text-xs text-blue-200 whitespace-nowrap">
                            {tag}
                         </span>
                      ))}
                   </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -z-10 top-1/2 -right-10 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;