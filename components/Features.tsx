import React from 'react';
import { MessageCircle, Radio, Mic, Clock, Users, Zap } from 'lucide-react';

const features = [
  {
    title: "AI智能互动",
    desc: "数字人直播实时改写话术，实时驱动数字人直播！",
    Icon: Zap,
    iconClass: "text-yellow-400",
    color: "from-yellow-500/20 to-orange-500/5"
  },
  {
    title: "阿凡达互动",
    desc: "真人中之人实时语音驱动，精准表情捕捉。",
    Icon: Users,
    iconClass: "text-blue-400",
    color: "from-blue-500/20 to-cyan-500/5"
  },
  {
    title: "关键词互动",
    desc: "识别弹幕关键词，自动触发预设回复与动作。",
    Icon: MessageCircle,
    iconClass: "text-purple-400",
    color: "from-purple-500/20 to-pink-500/5"
  },
  {
    title: "氛围引导",
    desc: "自动发送欢迎语、感谢语，维持直播间热度。",
    Icon: Mic,
    iconClass: "text-red-400",
    color: "from-red-500/20 to-rose-500/5"
  },
  {
    title: "弹幕互动",
    desc: "实时抓取弹幕问题，AI智能生成专业回答。",
    Icon: Radio,
    iconClass: "text-green-400",
    color: "from-green-500/20 to-emerald-500/5"
  },
  {
    title: "定时播报",
    desc: "按预设时间轴自动播报促销信息与活动预告。",
    Icon: Clock,
    iconClass: "text-cyan-400",
    color: "from-cyan-500/20 to-blue-500/5"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-900/30 backdrop-blur-sm relative border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            六大AI互动，更智能更专业
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl border border-slate-700 bg-gradient-to-br ${feature.color} backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]`}
            >
              <div className="mb-6 p-4 bg-slate-800/80 rounded-xl w-fit border border-slate-600 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.Icon size={32} className={feature.iconClass} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;