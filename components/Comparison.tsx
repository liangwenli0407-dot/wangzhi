import React from 'react';
import { Trophy, XCircle, CheckCircle } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative">
      {/* Decorative gradient behind comparison to separate visually if needed, but keeping transparent for now */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            AI助播系统 VS 人工直播
          </h2>
          <p className="text-slate-300 font-light">用AIGC技术解决直播难题，降本增效</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          
          {/* Chart Section */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            {/* Duration */}
            <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-xl">
              <h4 className="text-slate-200 mb-4 font-semibold">直播时长/天</h4>
              <div className="flex items-end gap-6 h-40">
                <div className="w-1/2 flex flex-col justify-end h-full">
                  <div className="bg-gradient-to-t from-orange-600 to-orange-400 w-full h-full rounded-t-lg relative group shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 text-white font-bold drop-shadow-md">24h</span>
                  </div>
                  <span className="text-center mt-2 text-orange-400 font-bold">系统</span>
                </div>
                <div className="w-1/2 flex flex-col justify-end h-full">
                   <div className="bg-slate-700/80 w-full h-[25%] rounded-t-lg relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-400 text-sm">4-6h</span>
                   </div>
                   <span className="text-center mt-2 text-slate-500">人工</span>
                </div>
              </div>
            </div>

            {/* Cost */}
            <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-xl">
              <h4 className="text-slate-200 mb-4 font-semibold">运营成本/年</h4>
              <div className="flex items-end gap-6 h-40">
                <div className="w-1/2 flex flex-col justify-end h-full">
                  <div className="bg-gradient-to-t from-purple-600 to-purple-400 w-full h-[10%] rounded-t-lg relative shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-purple-300 text-xs w-full text-center">&lt;1w</span>
                  </div>
                  <span className="text-center mt-2 text-purple-400 font-bold">系统</span>
                </div>
                <div className="w-1/2 flex flex-col justify-end h-full">
                   <div className="bg-slate-700/80 w-full h-full rounded-t-lg relative">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 text-sm font-bold w-full text-center">&gt;10w</span>
                   </div>
                   <span className="text-center mt-2 text-slate-500">人工</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List Comparison */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* AI Side */}
             <div className="bg-gradient-to-b from-blue-900/60 to-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-blue-500/40 relative overflow-hidden shadow-2xl shadow-blue-900/20">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Trophy size={100} className="text-blue-400" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                        云微客 AI助播
                    </h3>
                    <div className="space-y-4">
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-lg text-sm border border-blue-500/30">AI直播话术</span>
                            <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-lg text-sm border border-blue-500/30">智能回复</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-lg text-sm border border-blue-500/30">智能助播</span>
                            <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-lg text-sm border border-blue-500/30">自动报时</span>
                        </div>
                        <ul className="space-y-3 mt-6 text-slate-200 text-sm">
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-400 shrink-0"/> 一个系统多平台AI助播</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-400 shrink-0"/> 自动批量生成直播话术</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-400 shrink-0"/> 智能生成直播话术音频</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-400 shrink-0"/> 一键避音插播智能助播</li>
                        </ul>
                    </div>
                </div>
             </div>

             {/* Human Side */}
             <div className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 relative opacity-90">
                <h3 className="text-2xl font-bold text-slate-400 mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-slate-600 rounded-full"></span>
                    人工直播团队
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/80 p-3 rounded-lg text-center border border-slate-700">
                        <p className="text-slate-400 text-xs">人工薪资</p>
                        <p className="text-red-400 font-bold">高</p>
                    </div>
                    <div className="bg-slate-800/80 p-3 rounded-lg text-center border border-slate-700">
                        <p className="text-slate-400 text-xs">学习成本</p>
                        <p className="text-red-400 font-bold">高</p>
                    </div>
                    <div className="bg-slate-800/80 p-3 rounded-lg text-center border border-slate-700">
                        <p className="text-slate-400 text-xs">情绪</p>
                        <p className="text-red-400 font-bold">不稳定</p>
                    </div>
                    <div className="bg-slate-800/80 p-3 rounded-lg text-center border border-slate-700">
                        <p className="text-slate-400 text-xs">人员管理</p>
                        <p className="text-red-400 font-bold">难</p>
                    </div>
                </div>
                <ul className="space-y-3 text-slate-500 text-sm">
                    <li className="flex items-center gap-2"><XCircle size={16} className="text-red-900 shrink-0"/> 设备成本高</li>
                    <li className="flex items-center gap-2"><XCircle size={16} className="text-red-900 shrink-0"/> 团队成本高</li>
                    <li className="flex items-center gap-2"><XCircle size={16} className="text-red-900 shrink-0"/> 人工效率低</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;