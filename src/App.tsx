/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import ResearchBackground from './components/ResearchBackground';
import CoreFindings from './components/CoreFindings';
import UserPersona from './components/UserPersona';
import MechanismModel from './components/MechanismModel';
import PolicySuggestions from './components/PolicySuggestions';
import DataDashboard from './components/DataDashboard';
import Footer from './components/Footer';
import Background from './components/Background';
import Navbar from './components/Navbar';
import RongBao from './components/RongBao';
import ChatModal from './components/ChatModal';

export default function App() {
  const [staticMode, setStaticMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [feedCount, setFeedCount] = useState(0);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-primary relative bg-paper">
      <Background staticMode={staticMode} />
      <Navbar staticMode={staticMode} setStaticMode={setStaticMode} />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="background">
          <ResearchBackground />
        </section>
        <section id="findings">
          <CoreFindings />
        </section>
        <section id="persona">
          <UserPersona />
        </section>
        <section id="mechanism">
          <MechanismModel />
        </section>
        <section id="policy">
          <PolicySuggestions />
        </section>
        <section id="data">
          <DataDashboard feedCount={feedCount} />
        </section>
      </main>

      <Footer />
      <RongBao 
        onOpenChat={() => setIsChatOpen(true)} 
        feedCount={feedCount} 
        onFeed={() => setFeedCount(prev => prev + 1)} 
      />
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
