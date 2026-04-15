import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { Lock } from 'lucide-react';

const surveyData = [
  { name: '18-22岁', value: 45 },
  { name: '23-26岁', value: 38 },
  { name: '27-30岁', value: 12 },
  { name: '30岁以上', value: 5 },
];

const sentimentData = [
  { time: '1月', positive: 65, negative: 10, neutral: 25 },
  { time: '2月', positive: 70, negative: 8, neutral: 22 },
  { time: '3月', positive: 82, negative: 5, neutral: 13 },
  { time: '4月', positive: 78, negative: 7, neutral: 15 },
  { time: '5月', positive: 85, negative: 4, neutral: 11 },
  { time: '6月', positive: 90, negative: 3, neutral: 7 },
];

const explorationStats = [
  { label: '有效问卷回收样本数', value: '1,248', unit: '份' },
  { label: '短视频样本分析量', value: '5,000+', unit: '条' },
  { label: '深度访谈参与人数', value: '42', unit: '人' },
  { label: '覆盖国家与地区', value: '68', unit: '个' },
];

export default function DataDashboard({ feedCount }: { feedCount: number }) {
  const isUnlocked = feedCount >= 10;

  return (
    <section className="py-24 px-4 bg-white/30 border-b border-gold">
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-12">核心调研数据看板 / DATA DASHBOARD</div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {explorationStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white/50 border border-gold/30"
            >
              <div className="text-3xl font-bold text-primary font-serif mb-1">{stat.value}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Age Distribution */}
          <div className="national-card">
            <h3 className="text-xs uppercase tracking-widest text-bronze mb-8 font-bold border-b border-gold/20 pb-2">留学生年龄分布</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={surveyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#666' }} axisLine={{ stroke: '#D4AF37' }} />
                  <YAxis tick={{ fontSize: 10, fill: '#666' }} axisLine={{ stroke: '#D4AF37' }} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(212, 175, 55, 0.05)' }}
                    contentStyle={{ backgroundColor: '#F5F0E6', border: '1px solid #D4AF37', borderRadius: '0' }}
                  />
                  <Bar dataKey="value" fill="#1A4D2E" radius={0} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sentiment Trend */}
          <div className="national-card">
            <h3 className="text-xs uppercase tracking-widest text-bronze mb-8 font-bold border-b border-gold/20 pb-2">情感倾向演变趋势</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sentimentData}>
                  <defs>
                    <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1A4D2E" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#1A4D2E" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                  <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#666' }} axisLine={{ stroke: '#D4AF37' }} />
                  <YAxis tick={{ fontSize: 10, fill: '#666' }} axisLine={{ stroke: '#D4AF37' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#F5F0E6', border: '1px solid #D4AF37', borderRadius: '0' }} />
                  <Area type="monotone" dataKey="positive" stroke="#1A4D2E" fillOpacity={1} fill="url(#colorPos)" strokeWidth={2} />
                  <Area type="monotone" dataKey="neutral" stroke="#D4AF37" fill="transparent" strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Unlockable Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isUnlocked ? (
              <motion.div
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="national-card bg-primary/5 border-dashed border-2 flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 bg-white border border-gold rounded-full flex items-center justify-center text-gold mb-6 shadow-lg">
                  <Lock size={24} />
                </div>
                <h3 className="text-xl font-serif text-primary mb-2">深度空间感知关联分析</h3>
                <p className="text-xs text-gray-500 max-w-md mx-auto mb-8">
                  该模块包含更深层次的城市空间感知因果分析。请通过与蓉宝互动（喂食竹子达到10次）来解锁此学术见解。
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold transition-all duration-500" 
                      style={{ width: `${(feedCount / 10) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-bronze font-bold">{feedCount}/10</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="national-card border-gold bg-gold/5"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/3">
                    <div className="inline-block px-2 py-1 bg-gold text-white text-[9px] uppercase tracking-widest font-bold mb-4">
                      已解锁 / UNLOCKED
                    </div>
                    <h3 className="text-2xl font-serif text-primary mb-4">空间感知与行为转化的因果链</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">
                      通过对5000+条短视频样本的文本挖掘与空间标注，我们发现“视觉奇观”与“市井生活”的交织是激发留学生探索行为的最强诱因。
                    </p>
                    <div className="p-4 border border-gold/20 bg-white/50">
                      <span className="block text-[10px] text-gray-400 uppercase mb-1">关键发现</span>
                      <span className="text-sm font-bold text-primary">非传统景点的探索率提升了 124%</span>
                    </div>
                  </div>
                  <div className="lg:w-2/3 grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-white border border-gold/10 p-4 flex flex-col justify-center items-center text-center">
                      <div className="text-4xl font-serif text-gold mb-2">0.68</div>
                      <div className="text-[9px] text-gray-400 uppercase">空间感知相关系数</div>
                    </div>
                    <div className="aspect-square bg-white border border-gold/10 p-4 flex flex-col justify-center items-center text-center">
                      <div className="text-4xl font-serif text-gold mb-2">3.2x</div>
                      <div className="text-[9px] text-gray-400 uppercase">社交媒体传播倍率</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
