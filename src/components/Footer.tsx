export default function Footer() {
  return (
    <footer className="bg-primary text-gold py-16 px-10 relative overflow-hidden border-t border-gold">
      {/* Sun Bird Background SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-[600px] h-[600px] opacity-[0.03]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <path d="M50 20 Q60 35 50 50 Q40 65 50 80" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <path d="M20 50 Q35 60 50 50 Q65 40 80 50" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gold/10 pb-12">
          <div className="space-y-4">
            <h4 className="text-sm font-serif italic">研究团队 / RESEARCH TEAM</h4>
            <p className="text-[10px] text-white/70 leading-relaxed uppercase tracking-widest">
              短映蓉行队 (Exploring Chengdu Team)<br />
              致力于通过多维数据揭示城市空间与数字媒体的互动逻辑。
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-serif italic">学术支持 / ACADEMIC SUPPORT</h4>
            <p className="text-[10px] text-white/70 leading-relaxed uppercase tracking-widest">
              成都留学生行为研究组<br />
              基于SOR模型与SEM结构方程模型的跨学科研究。
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-serif italic">联系我们 / CONTACT</h4>
            <p className="text-[10px] text-white/70 leading-relaxed uppercase tracking-widest">
              chengdu_research@example.com<br />
              四川省成都市青羊区某某路
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[2px]">
          <div className="opacity-50">
            © 2024 研究成果展示专网 | ALL RIGHTS RESERVED
          </div>
          
          <div className="flex items-center gap-8 font-bold">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cinnabar rotate-45" />
              成都 • CHENGDU
            </div>
            <div className="w-px h-4 bg-gold/20" />
            <div className="opacity-70">学术可视化专题</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
