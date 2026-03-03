/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Registration from "./components/Registration";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Submission from "./components/Submission";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import RegistrationModal from "./components/RegistrationModal";
import BackgroundNet from "./components/BackgroundNet";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-black text-gray-200 selection:bg-cyan-500/30 selection:text-white">
      <BackgroundNet />
      <Navbar onRegisterClick={openModal} />
      <Hero onRegisterClick={openModal} />
      <About />
      <Registration onRegisterClick={openModal} />
      <Timeline />
      <Prizes />
      <Submission />
      <Partners />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCTA onRegisterClick={openModal} />
      
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
