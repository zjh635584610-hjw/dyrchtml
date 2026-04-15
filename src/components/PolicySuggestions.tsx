import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, GraduationCap, Smartphone, Store } from 'lucide-react';

const tabs = [
  {
    id: 'government',
    label: '文旅主管部门',
    icon: Building2,
    image: 'https://picsum.photos/seed/chengdu-street/400/300',
    suggestions: [
      '建立“短视频+文旅”联动机制，通过官方账号引导深度文化探索。',
      '优化非传统景点的基础设施，提升留学生探索的便利性。',
      '举办留学生短视频创作大赛，挖掘多元视角下的成都故事。'
    ]
  },
  {
    id: 'university',
    label: '高校',
    icon: GraduationCap,
    image: 'https://picsum.photos/seed/university/400/300',
    suggestions: [
      '将城市探索纳入留学生第二课堂，结合短视频创作提升文化认同。',
      '建立留学生新媒体社团，培养具有国际传播能力的校园博主。',
      '开展“感知成都”系列研学活动，深化留学生对城市空间的理解。'
    ]
  },
  {
    id: 'platform',
    label: '短视频平台',
    icon: Smartphone,
    image: 'https://picsum.photos/seed/tiktok/400/300',
    suggestions: [
      '优化针对留学生群体的算法推荐，推送具有文化深度的内容。',
      '开发多语言翻译与引导功能，降低留学生探索成都的语言门槛。',
      '设立“国际友人看成都”专题板块，汇聚优质留学生创作内容。'
    ]
  },
  {
    id: 'business',
    label: '商家',
    icon: Store,
    image: 'https://picsum.photos/seed/shop/400/300',
    suggestions: [
      '打造具有成都在地文化特色的消费场景，适配短视频拍摄需求。',
      '针对留学生群体推出专属优惠与体验活动，提升线下转化率。',
      '利用短视频平台进行精准营销，展示地道、市井的经营特色。'
    ]
  }
];

export default function PolicySuggestions() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-24 px-4 bg-paper border-b border-gold">
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-12">对策建议 / POLICY SUGGESTIONS</div>

        <div className="flex flex-wrap justify-start gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2 border transition-all duration-300 text-[10px] uppercase tracking-widest font-bold ${
                activeTab === tab.id
                  ? 'bg-primary text-white border-gold shadow-[3px_3px_0_#D4AF37]'
                  : 'bg-white text-primary border-gold/20 hover:border-gold/50'
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="relative">
                  <h3 className="text-3xl font-serif text-primary mb-2">针对{activeContent.label}的建议</h3>
                  <div className="w-20 h-1 bg-gold" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeContent.suggestions.map((s, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex gap-6 items-start p-6 bg-white border border-gold/10 hover:border-gold/40 transition-all shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-full border border-gold text-gold flex items-center justify-center flex-shrink-0 text-xs font-bold group-hover:bg-gold group-hover:text-white transition-all">
                        {i + 1}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{s}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-8 p-8 border-l-4 border-cinnabar bg-white/50 shadow-sm">
                  <p className="text-xs text-bronze leading-relaxed font-bold italic">
                    "通过多方联动，构建‘短视频+文旅’的深度融合生态，是提升成都国际传播力的关键路径。"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
