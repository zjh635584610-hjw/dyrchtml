import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import FlipCard from './FlipCard';

export default function MechanismModel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 px-4 bg-white/50 border-b border-gold">
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-12">理论框架 / SOR MODEL</div>

        {/* SOR Flowchart */}
        <div className="national-card p-12 mb-12">
          <div className="flex flex-col items-center max-w-md mx-auto">
            <div className="w-full text-center p-6 border border-dashed border-bronze relative bg-paper/30">
              <span className="block font-bold text-cinnabar mb-1 uppercase tracking-widest text-xs">STIMULUS (刺激)</span>
              <p className="text-sm text-gray-600">短视频内容、算法精准度、视觉震撼力</p>
            </div>
            <div className="w-px h-8 bg-gold my-2" />
            <div className="w-full text-center p-6 border border-dashed border-bronze relative bg-paper/30">
              <span className="block font-bold text-cinnabar mb-1 uppercase tracking-widest text-xs">ORGANISM (机体)</span>
              <p className="text-sm text-gray-600">城市意象感知、文化认同感、探索动机</p>
            </div>
            <div className="w-px h-8 bg-gold my-2" />
            <div className="w-full text-center p-6 border border-cinnabar relative bg-paper/30">
              <span className="block font-bold text-cinnabar mb-1 uppercase tracking-widest text-xs">RESPONSE (反应)</span>
              <p className="text-sm text-gray-600">空间探索行为、国际传播分享、再次游览意愿</p>
            </div>
          </div>
        </div>

        {/* Academic Visualizations with Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="h-[250px]">
            <FlipCard
              front={
                <div className="p-2">
                  <h4 className="text-xs uppercase tracking-widest text-bronze mb-4 font-bold border-b border-gold/20 pb-2">结构方程模型 (SEM)</h4>
                  <div className="aspect-video bg-primary/5 border border-gold/10 flex items-center justify-center text-bronze italic text-[10px] text-center px-4">
                    [路径系数显著性分析图表]
                  </div>
                  <p className="mt-4 text-[10px] text-gray-500">内容刺激 {"->"} 地方依恋 {"->"} 探索行为 (β=0.42***)</p>
                </div>
              }
              back={
                <div className="p-2">
                  <h5 className="text-[10px] font-bold text-primary mb-2">模型拟合指标</h5>
                  <p className="text-[9px] text-gray-600 leading-tight">
                    χ²/df = 2.121, RMSEA = 0.045, CFI = 0.952, TLI = 0.946。各项指标均符合学术规范。
                  </p>
                </div>
              }
            />
          </div>
          <div className="h-[250px]">
            <FlipCard
              front={
                <div className="p-2">
                  <h4 className="text-xs uppercase tracking-widest text-bronze mb-4 font-bold border-b border-gold/20 pb-2">随机森林 SHAP 值</h4>
                  <div className="aspect-video bg-primary/5 border border-gold/10 flex items-center justify-center text-bronze italic text-[10px] text-center px-4">
                    [特征重要性排序图表]
                  </div>
                  <p className="mt-4 text-[10px] text-gray-500">Top 1: 内容感知水平 (SHAP=0.21)</p>
                </div>
              }
              back={
                <div className="p-2">
                  <h5 className="text-[10px] font-bold text-primary mb-2">核心驱动因素</h5>
                  <p className="text-[9px] text-gray-600 leading-tight">
                    内容感知水平（0.21）、观看时长（0.18）与生活费水平（0.16）是驱动线下探索的前三大直接影响因素。
                  </p>
                </div>
              }
            />
          </div>
          <div className="h-[250px]">
            <FlipCard
              front={
                <div className="p-2">
                  <h4 className="text-xs uppercase tracking-widest text-bronze mb-4 font-bold border-b border-gold/20 pb-2">断点回归 (RDD)</h4>
                  <div className="aspect-video bg-primary/5 border border-gold/10 flex items-center justify-center text-bronze italic text-[10px] text-center px-4">
                    [因果效应估计图表]
                  </div>
                  <p className="mt-4 text-[10px] text-gray-500">ATE = 1.32 (p &lt; 0.01)</p>
                </div>
              }
              back={
                <div className="p-2">
                  <h5 className="text-[10px] font-bold text-primary mb-2">因果效应验证</h5>
                  <p className="text-[9px] text-gray-600 leading-tight">
                    验证了短视频内容感知对城市探索行为的正向因果效应，在180分断点处探索行为得分显著跃升。
                  </p>
                </div>
              }
            />
          </div>
        </div>

        {/* Detailed Data Accordion */}
        <div className="national-card p-0 overflow-hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-4 flex items-center justify-between bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-primary">展开查看详细模型数据与检验结果</span>
            {isOpen ? <ChevronUp className="text-gold" size={16} /> : <ChevronDown className="text-gold" size={16} />}
          </button>
          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 bg-white/50 text-xs text-gray-600 space-y-4">
              <p className="leading-relaxed">模型拟合优度检验：χ²/df = 2.14, RMSEA = 0.054, CFI = 0.962, TLI = 0.958。各项指标均符合学术规范要求。</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-gold/20">
                  <h5 className="font-bold mb-2 uppercase tracking-tighter">直接效应</h5>
                  <p>内容互动性 {"->"} 探索意愿: 0.38 (p &lt; 0.001)</p>
                  <p>空间感知 {"->"} 探索意愿: 0.52 (p &lt; 0.001)</p>
                </div>
                <div className="p-4 border border-gold/20">
                  <h5 className="font-bold mb-2 uppercase tracking-tighter">中介效应</h5>
                  <p>内容质量 {"->"} 空间感知 {"->"} 探索意愿: 0.24 (95% CI: [0.18, 0.31])</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
