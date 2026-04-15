import { motion } from 'motion/react';
import { Utensils, Users, Heart, Share2, Globe } from 'lucide-react';
import FlipCard from './FlipCard';

const findings = [
  {
    num: '01',
    title: '流量与情感分化',
    icon: Utensils,
    desc: '流量集中于消费打卡类内容，但情感沉淀于市井烟火类内容。',
    data: '41.3%',
    dataDesc: '负面评价中“滤镜落差”占比',
    details: '美食探店（36.2%）与潮玩地标（29.3%）占据流量主导，但“市井烟火”类内容虽占比低，其情感共鸣度最高。'
  },
  {
    num: '02',
    title: '地方依恋枢纽',
    icon: Heart,
    desc: '地方依恋在短视频刺激与探索行为转化中发挥完全中介作用。',
    data: 'β=0.42',
    dataDesc: '内容刺激对探索行为的路径系数',
    details: '结构方程模型（SEM）验证显示，内容刺激必须通过激发情感联结（地方依恋）才能驱动实际探索。'
  },
  {
    num: '03',
    title: '画像分层显著',
    icon: Users,
    desc: '在蓉留学生群体呈现显著的“深度-潮流-潜力”三层分化结构。',
    data: '45%',
    dataDesc: '潮流打卡型群体占比',
    details: '潮流打卡型构成传播“基本盘”，深度沉浸型（30%）是“核心自传播者”，潜力探索型（25%）是“增量盘”。'
  },
  {
    num: '04',
    title: '分享转化断层',
    icon: Share2,
    desc: '从线下探索到UGC二次传播存在明显断层，转化率较低。',
    data: '40.8%',
    dataDesc: '探索后“从不分享”的比例',
    details: '经常分享和每次分享合计仅30.2%。UGC互动呈现“高沉默”特征，激发创作动机是提升效能的关键。'
  },
  {
    num: '05',
    title: '决策偏好分化',
    icon: Globe,
    desc: '不同群体对交通便利性、社交支持、消费成本的偏好显著分化。',
    data: '0.94',
    dataDesc: '深度沉浸型对“无滤镜实拍”偏好系数',
    details: '离散选择实验（DCE）显示，内容真实性是影响决策的核心因素，“无滤镜实拍+市井烟火”组合权重最高。'
  }
];

export default function CoreFindings() {
  return (
    <section className="py-24 px-4 bg-white/30 border-b border-gold">
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-12">核心研究发现 / KEY FINDINGS</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {findings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-[350px]"
            >
              <FlipCard
                front={
                  <div className="p-2 flex flex-col h-full">
                    <div className="text-3xl font-serif text-gold mb-4 opacity-50">{item.num}</div>
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                      <item.icon size={20} className="text-gold" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">{item.desc}</p>
                    <div className="mt-auto pt-6 border-t border-gold/10">
                      <span className="text-3xl font-bold text-primary font-serif block">{item.data}</span>
                      <span className="text-[10px] text-bronze/60 uppercase tracking-widest">{item.dataDesc}</span>
                    </div>
                  </div>
                }
                back={
                  <div className="p-2">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 border-b border-gold/20 pb-2">深度学术解析 / ANALYSIS</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">
                      {item.details}
                    </p>
                    <div className="p-4 bg-primary/5 border border-gold/10">
                      <span className="text-[9px] text-bronze uppercase tracking-tighter">研究方法：问卷调查 + 深度访谈</span>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
