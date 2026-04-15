import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Book, Camera, Compass, MapPin, Users, Package } from 'lucide-react';
import FlipCard from './FlipCard';

const personaData = [
  {
    name: '深度沉浸型',
    color: '#1A4D2E',
    percentage: '30%',
    conclusion: '成都国际传播核心自传播者',
    icons: [Users, Book],
    traits: ['亚洲生源为主', '来华2年以上', '高地方依恋'],
    details: '偏好“市井烟火”与“美食探店”，月均探索3-4次。视成都为“第二故乡”，UGC内容具有天然亲和力。',
    chart: [
      { subject: '探索频率', A: 120, full: 150 },
      { subject: '文化深度', A: 140, full: 150 },
      { subject: '社交分享', A: 110, full: 150 },
      { subject: '消费意愿', A: 90, full: 150 },
      { subject: '技术依赖', A: 80, full: 150 },
    ]
  },
  {
    name: '潮流打卡型',
    color: '#D4AF37',
    percentage: '45%',
    conclusion: '跨文化传播流量基本盘',
    icons: [Camera, MapPin],
    traits: ['欧美生源为主', '来华1-2年', '重度视频用户'],
    details: '偏好“潮玩地标”与“赛博朋克”，月均探索1-2次。追求视觉冲击与社交认同，是城市热度维持主力。',
    chart: [
      { subject: '探索频率', A: 140, full: 150 },
      { subject: '文化深度', A: 70, full: 150 },
      { subject: '社交分享', A: 145, full: 150 },
      { subject: '消费意愿', A: 120, full: 150 },
      { subject: '技术依赖', A: 130, full: 150 },
    ]
  },
  {
    name: '潜力探索型',
    color: '#7A6241',
    percentage: '25%',
    conclusion: '待激活的国际传播增量盘',
    icons: [Package, Compass],
    traits: ['来华1年以内', '短期留学生', '零探索状态'],
    details: '偏好“美食探店”，但处于“零探索”状态。对城市认知停留在功能层面，是亟待激活的潜在人群。',
    chart: [
      { subject: '探索频率', A: 60, full: 150 },
      { subject: '文化深度', A: 100, full: 150 },
      { subject: '社交分享', A: 50, full: 150 },
      { subject: '消费意愿', A: 70, full: 150 },
      { subject: '技术依赖', A: 90, full: 150 },
    ]
  }
];

export default function UserPersona() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-paper border-b border-gold">
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-12">群体画像分布 / PERSONA DISTRIBUTION</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {personaData.map((persona, index) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`transition-all duration-500 ${
                activeIndex !== null && activeIndex !== index ? 'opacity-40 scale-95 blur-[1px]' : 'opacity-100 scale-100'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <FlipCard
                className="h-[400px]"
                front={
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex gap-2 mb-6">
                      {persona.icons.map((Icon, i) => (
                        <div key={i} className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold">
                          <Icon size={20} />
                        </div>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{persona.name}</h3>
                    <p className="text-xs text-bronze mb-8 leading-relaxed">{persona.conclusion}</p>
                    <div className="mt-auto">
                      <span className="text-5xl font-serif text-gold">{persona.percentage}</span>
                      <span className="text-[10px] text-gray-400 block mt-2 uppercase tracking-widest">样本占比 / RATIO</span>
                    </div>
                  </div>
                }
                back={
                  <div className="p-2">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 border-b border-gold/20 pb-2">核心特征 / KEY TRAITS</h4>
                    <ul className="space-y-4 mb-8">
                      {persona.traits.map((trait) => (
                        <li key={trait} className="flex items-center gap-3 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-cinnabar" />
                          {trait}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[10px] text-gray-500 leading-relaxed italic mb-6">
                      {persona.details}
                    </p>
                    <button className="btn-geometric w-full text-[9px]">
                      查看完整数据 / FULL DATA
                    </button>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Dynamic Chart Linkage */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="national-card p-12 flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2 w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={personaData[activeIndex].chart}>
                    <PolarGrid stroke="#ccc" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#666' }} />
                    <Radar
                      name={personaData[activeIndex].name}
                      dataKey="A"
                      stroke={personaData[activeIndex].color}
                      fill={personaData[activeIndex].color}
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="lg:w-1/2 w-full">
                <h3 className="text-2xl font-serif text-primary mb-6">{personaData[activeIndex].name} 深度分析</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-primary/5 border-l-4 border-gold">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      该群体在探索成都时表现出极强的<strong>{personaData[activeIndex].traits[0]}</strong>。
                      其行为模式受短视频内容驱动程度为 <strong>{activeIndex === 1 ? '极高' : '中等'}</strong>。
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-gold/20">
                      <span className="block text-[10px] text-gray-400 uppercase mb-1">探索动机</span>
                      <span className="text-sm font-bold text-primary">文化认同与社交需求</span>
                    </div>
                    <div className="p-4 border border-gold/20">
                      <span className="block text-[10px] text-gray-400 uppercase mb-1">传播价值</span>
                      <span className="text-sm font-bold text-primary">高价值UGC产出</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

import { AnimatePresence } from 'motion/react';
