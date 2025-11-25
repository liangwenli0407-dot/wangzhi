
import React from 'react';
import { Briefcase, HeartHandshake, TrendingUp, Laptop, Video, MessageCircle, UserPlus, Bot, Zap, ArrowRight, MousePointerClick } from 'lucide-react';

const employees = [
  {
    role: "新媒体运营",
    salary: "¥980",
    image: "https://picsum.photos/400/600?random=10",
    desc: "全自动生成视频，自动发布到抖音、快手、视频号。",
    icon: <TrendingUp />
  },
  {
    role: "售后服务",
    salary: "¥980",
    image: "https://picsum.photos/400/600?random=11",
    desc: "全自动回复私信，7x24小时在线，秒回客户。",
    icon: <HeartHandshake />
  },
  {
    role: "金牌销售",
    salary: "¥980",
    image: "https://picsum.photos/400/600?random=12",
    desc: "全自动主动激活沉睡客户，添加留资线索至微信。",
    icon: <Briefcase />
  }
];

const SuperEmployee: React.FC = () => {
  return (
    <section id="super-employee" className="py-24 bg-slate-900/30 backdrop-blur-sm border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 drop-shadow-sm">
            丹之辰 AI超级员工
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto font-light">
            体验未来生活方式，让AI赋能企业发展。只需打开电脑，全自动工作。
          </p>
        </div>

        {/* Employee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {employees.map((emp, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
              {/* Image Container */}
              <div className="h-[500px] relative">
                <img 
                  src={emp.image} 
                  alt={emp.role} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>
              
              {/* Card Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-600/30">
                        {emp.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{emp.role}</h3>
                </div>
                
                <p className="text-slate-200 text-sm mb-4 line-clamp-2">
                    {emp.desc}
                </p>

                <div className="flex items-center justify-between border-t border-slate-600/50 pt-4">
                    <div>
                        <span className="text-xs text-slate-400 block">月薪仅需</span>
                        <span className="text-xl font-bold text-cyan-400 text-shadow">{emp.salary}</span>
                    </div>
                    <button className="bg-white/10 hover:bg-white/20 hover:text-cyan-300 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md transition border border-white/10 hover:border-cyan-400/50">
                        雇佣TA
                    </button>
                </div>
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                <span className="text-xs font-mono text-cyan-300">AI-EMPLOYEE-{index+1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Workflow Diagram (Replacing simple banner) */}
        <div className="bg-gradient-to-b from-blue-900/40 to-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="text-center mb-16 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    为什么丹之辰AI超级员工可以<span className="text-cyan-400">1台电脑顶100个销售</span>？
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto rounded-full"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-16">
                
                {/* Connecting Lines for Desktop */}
                <div className="hidden lg:block absolute top-[20%] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-blue-500/20 z-0"></div>
                <div className="hidden lg:block absolute bottom-[25%] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-blue-500/20 z-0"></div>
                <div className="hidden lg:block absolute top-[20%] right-[16%] w-0.5 h-[55%] border-r-2 border-dashed border-blue-500/20 z-0"></div>

                {/* Step 1 */}
                <div className="relative flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-slate-800 rounded-2xl border border-slate-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300 z-10 bg-gradient-to-br from-slate-800 to-slate-900">
                        <Laptop className="text-blue-400 w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">只需打开电脑</h4>
                    <p className="text-slate-400 text-sm px-4">你就别管了，全自动运行</p>
                    <div className="hidden lg:block absolute -right-10 top-8 text-blue-500/50">
                        <ArrowRight size={24} />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-slate-800 rounded-2xl border border-slate-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300 z-10 bg-gradient-to-br from-slate-800 to-slate-900">
                        <Video className="text-purple-400 w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">全自动生成1000条视频</h4>
                    <p className="text-slate-400 text-sm px-4">发布到抖音、快手、视频号、小红书</p>
                    <div className="hidden lg:block absolute -right-10 top-8 text-blue-500/50">
                        <ArrowRight size={24} />
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-slate-800 rounded-2xl border border-slate-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300 z-10 bg-gradient-to-br from-slate-800 to-slate-900">
                        <MessageCircle className="text-green-400 w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">全自动主动私信</h4>
                    <p className="text-slate-400 text-sm px-4">意向客户抖音、快手、视频号、小红书</p>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-slate-800 rounded-2xl border border-slate-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300 z-10 bg-gradient-to-br from-slate-800 to-slate-900">
                        <UserPlus className="text-orange-400 w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">全自动添加留资线索</h4>
                    <p className="text-slate-400 text-sm px-4">自动同步至微信</p>
                    <div className="hidden lg:block absolute -right-10 top-8 text-blue-500/50">
                        <ArrowRight size={24} />
                    </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-slate-800 rounded-2xl border border-slate-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300 z-10 bg-gradient-to-br from-slate-800 to-slate-900">
                        <Bot className="text-cyan-400 w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">全自动AI微信拟人聊天</h4>
                    <p className="text-slate-400 text-sm px-4">智能话术，无缝对接</p>
                    <div className="hidden lg:block absolute -right-10 top-8 text-blue-500/50">
                        <ArrowRight size={24} />
                    </div>
                </div>

                {/* Step 6 */}
                <div className="relative flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-slate-800 rounded-2xl border border-slate-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300 z-10 bg-gradient-to-br from-slate-800 to-slate-900">
                        <Zap className="text-yellow-400 w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">全自动激活沉睡客户</h4>
                    <p className="text-slate-400 text-sm px-4">批量触达，高效转化</p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default SuperEmployee;
