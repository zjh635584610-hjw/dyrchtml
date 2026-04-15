import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'motion/react';

const data = [
  { name: '美食探店', value: 36.2 },
  { name: '潮玩地标', value: 29.3 },
  { name: '赛博朋克', value: 24.0 },
  { name: '市井烟火', value: 4.5 },
  { name: '其他', value: 6.0 },
];

const COLORS = ['#1A4D2E', '#4F6F52', '#D4AF37', '#7A6241', '#9B2226'];

export default function ResearchBackground() {
  return (
    <section className="py-24 px-4 bg-paper relative overflow-hidden border-b border-gold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="section-label">研究背景 / CONTEXT</div>
          
          <div className="national-card space-y-6">
            <p className="text-base leading-relaxed text-[#333333]">
              随着短视频平台的兴起，成都作为“网红城市”吸引了大量在蓉留学生。本研究基于1200份有效样本，探讨短视频内容如何重塑留学生的城市想象。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-white/50 border border-gold/30">
                <div className="text-3xl font-bold text-primary font-serif mb-1">1,200</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">有效问卷回收样本数</div>
              </div>
              <div className="p-4 bg-white/50 border border-gold/30">
                <div className="text-3xl font-bold text-primary font-serif mb-1">85.0%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">有效回收率</div>
              </div>
            </div>
            <p className="text-cinnabar font-serif font-bold text-lg border-t border-gold/20 pt-4">
              核心结论：地方依恋在短视频内容与探索行为转化中发挥关键完全中介作用。
            </p>
          </div>

          <div className="section-label">城市意象词云 / WORD CLOUD</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              { text: '#美食探店', size: 'text-3xl', color: 'text-primary', bold: true },
              { text: '#潮玩地标', size: 'text-2xl', color: 'text-forest' },
              { text: '#赛博朋克', size: 'text-xl', color: 'text-gold' },
              { text: '#市井烟火', size: 'text-lg', color: 'text-cinnabar' },
              { text: '#安逸治愈', size: 'text-2xl', color: 'text-bronze' },
              { text: '#体验Vlog', size: 'text-xl', color: 'text-primary' },
              { text: '#节奏卡点', size: 'text-lg', color: 'text-gold' },
              { text: '#滤镜落差', size: 'text-sm', color: 'text-gray-400' },
              { text: '#成都Citywalk', size: 'text-base', color: 'text-forest' },
              { text: '#巴适', size: 'text-2xl', color: 'text-gold', italic: true },
              { text: '#安逸', size: 'text-xl', color: 'text-cinnabar' },
              { text: '#留学生视角', size: 'text-base', color: 'text-primary' },
            ].map((tag, i) => (
              <motion.span
                key={tag.text}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`${tag.size} ${tag.color} ${tag.bold ? 'font-bold' : ''} ${tag.italic ? 'italic' : ''} font-serif tracking-widest hover:scale-110 transition-transform cursor-default`}
              >
                {tag.text}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-[500px] national-card flex flex-col items-center justify-center"
        >
          <h3 className="text-xl font-serif text-primary mb-8 text-center uppercase tracking-widest">短视频内容分布可视化</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#F5F0E6', border: '1px solid #D4AF37', borderRadius: '0' }}
                itemStyle={{ color: '#1A4D2E', fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
            {data.map((item, index) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-2 h-2" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-[10px] text-gray-600 uppercase tracking-tighter">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
