export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="absolute top-[300px] right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800 sticky top-0 bg-black/70 backdrop-blur-lg z-50">

        <h1 className="text-2xl font-bold z-10">
          CopilotSolutions365
        </h1>

        <div className="flex gap-6 text-gray-300 z-10">

          <a
            href="#services"
            className="hover:text-white transition"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="hover:text-white transition"
          >
            Portfolio
          </a>

          <a
            href="#about"
            className="hover:text-white transition"
          >
            About
          </a>

          <a
            href="#training"
            className="hover:text-white transition"
          >
            Training
          </a>

         

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 relative z-10">

        <div className="border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-400 mb-8 backdrop-blur-lg bg-white/5">
          Microsoft Copilot Studio • AI Automation • M365
        </div>

        <h1 className="text-6xl md:text-7xl font-bold max-w-6xl leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Enterprise AI Copilot Solutions
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          We build intelligent AI agents using Microsoft Copilot Studio,
          Microsoft 365, Power Platform, and Azure Automation.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">

          {/* Book Demo */}
          <a
            href="mailto:copilotsolution365@gmail.com?subject=Demo%20Request&body=Hello%20CopilotSolutions365,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20demo%20for%20your%20AI%20Copilot%20solutions.%0D%0A%0D%0AThanks."
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30"
          >
            Book Demo
          </a>

          {/* View Services */}
          <a
            href="#services"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            View Services
          </a>

        </div>

      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-10 border-t border-gray-800 relative z-10"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-gray-800 p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:border-purple-500 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              HR AI Assistant
            </h3>

            <p className="text-gray-400">
              Automate onboarding, HR support,
              employee policies, and leave management.
            </p>

          </div>

          <div className="border border-gray-800 p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:border-purple-500 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              IT Helpdesk Copilot
            </h3>

            <p className="text-gray-400">
              Intelligent IT support agents integrated
              with Microsoft Teams and Microsoft 365.
            </p>

          </div>

          <div className="border border-gray-800 p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:border-purple-500 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Workflow Automation
            </h3>

            <p className="text-gray-400">
              Automate business operations using
              Power Automate and Azure Logic Apps.
            </p>

          </div>

        </div>

      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="py-24 px-10 border-t border-gray-800 relative z-10"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-gray-800 rounded-2xl p-8 bg-white/5 backdrop-blur-lg hover:border-purple-500 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              HR Automation Agent
            </h3>

            <p className="text-gray-400">
              AI assistant for employee onboarding,
              leave management, and HR policies.
            </p>

          </div>

          <div className="border border-gray-800 rounded-2xl p-8 bg-white/5 backdrop-blur-lg hover:border-purple-500 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              IT Support Copilot
            </h3>

            <p className="text-gray-400">
              Intelligent Microsoft 365 support assistant
              integrated with Teams.
            </p>

          </div>

          <div className="border border-gray-800 rounded-2xl p-8 bg-white/5 backdrop-blur-lg hover:border-purple-500 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">
              Workflow Automation
            </h3>

            <p className="text-gray-400">
              Enterprise automation using Power Automate
              and Azure Logic Apps.
            </p>

          </div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-10 border-t border-gray-800 relative z-10"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Businesses Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Microsoft Ecosystem Expertise
            </h3>

            <p className="text-gray-400">
              Deep integration with Microsoft 365,
              Teams, Graph API, and Azure.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Enterprise Automation
            </h3>

            <p className="text-gray-400">
              Intelligent workflows using Copilot Studio,
              Power Automate, and Logic Apps.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Secure AI Systems
            </h3>

            <p className="text-gray-400">
              Enterprise-grade authentication,
              permissions, and secure integrations.
            </p>

          </div>

        </div>

      </section>

      {/* Training Section */}
      <section
        id="training"
        className="py-24 px-10 border-t border-gray-800 text-center relative z-10"
      >

        <h2 className="text-4xl font-bold mb-8">
          Copilot Studio Training
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          Learn Microsoft Copilot Studio, Power Platform,
          AI automation, Microsoft 365 integrations,
          and enterprise AI agent development.
        </p>

        <a
          href="mailto:copilotsolution365@gmail.com?subject=Training%20Request&body=Hello%20CopilotSolutions365,%0D%0A%0D%0AI%20would%20like%20to%20book%20training%20for%20Microsoft%20Copilot%20Studio%20and%20AI%20automation.%0D%0A%0D%0AThanks."
          className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30"
        >
          Book Training
        </a>

      </section>

      

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-10 border-t border-gray-800 text-center relative z-10"
      >

        <h2 className="text-4xl font-bold mb-8">
          Contact Us
        </h2>

        <p className="text-gray-400 mb-10">
          Ready to build AI copilots for your business?
        </p>

        <div className="flex flex-col gap-4 items-center">

          <a
            href="mailto:Founder@CopilotSolutions365.com"
            className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            Founder@CopilotSolutions365.com
          </a>

          <a
            href="mailto:copilotsolution365@gmail.com?subject=Consultation%20Request&body=Hello%20CopilotSolutions365,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20consultation%20for%20AI%20Copilot%20solutions.%0D%0A%0D%0AThanks."
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30"
          >
            Book Consultation
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 relative z-10">
        © 2026 CopilotSolutions365. All rights reserved.
      </footer>

    </main>
  );
}
