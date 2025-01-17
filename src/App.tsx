import React from 'react';
import { Code2, Bot, Sparkles, CheckCircle2, Award, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header with Logo */}
      <header className="container mx-auto px-4 py-6">
        <div className="absolute top-6 right-8">
          <div className="flex items-center gap-2">
            <Code2 size={32} className="text-blue-400" />
            <img 
              src="images/C2C.png" 
              alt="C2C Logo" 
              className="w-16 h-16 rounded-full border-2 border-blue-400 shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-8">
          <Bot size={40} className="text-blue-400" />
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            TECHXCEL - Beginners track
          </h1>
          <Sparkles size={40} className="text-blue-400" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <Brain className="text-blue-400" />
              Welcome to TECHXCEL - !
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Greetings from Code To Career (C2C)! We're thrilled to welcome you to an exciting event designed for first-year students to spark innovation and challenge your coding skills! Whether you're an experienced coder or a newcomer eager to learn, this hackathon has something for everyone. We can't wait to see the amazing projects you will create!
            </p>
            
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="text-blue-300" />
                Prerequisites
              </h3>
              <p className="text-gray-300">
                This project can be completed using only HTML, CSS, JavaScript, and basic knowledge of Chrome extensions.
                Don't worry if you're new to these technologies—you can learn them along the way!
              </p>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <Award className="text-blue-400" />
              Problem Statement: AI Integration via Chrome Extension
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-200 mb-3">Objective</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Enhance the coding problem-solving experience by embedding AI assistance</li>
                  <li>Add an "AI Help" button to every problem page on the platform</li>
                  <li>Open a chat box when the button is clicked for AI interaction</li>
                  <li>Provide AI responses tailored to the specific problem page</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-200 mb-3">Features</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Simplify the learning process for students</li>
                  <li>Offer on-demand support while solving coding challenges</li>
                  <li>Foster better engagement and understanding of problem-solving concepts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-200 mb-3">Judging Criteria</h3>
                <div className="space-y-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-blue-300 font-medium mb-2">1. Context Awareness</h4>
                    <p className="text-gray-300 ml-4">The AI must understand the specific problem the user is viewing to provide relevant assistance.</p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-blue-300 font-medium mb-2">2. UI Design</h4>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                      <li>The "AI Help" button should be seamlessly integrated into the platform problem pages</li>
                      <li>The chat box must be user-friendly and aesthetically consistent with the different platforms</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-blue-300 font-medium mb-2">3. AI Integration</h4>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                      <li>Use APIs or services of your choice to power the AI assistant</li>
                      <li>Ensure the AI responses are accurate and context-aware</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Opportunity */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Take this as a Learning Opportunity</h2>
            <p className="text-gray-300 leading-relaxed">
              Take on these challenges, experiment with your solutions, and most importantly, have fun building something impactful. 
              We're excited to see how you push the boundaries of this project!
            </p>
            
            <div className="mt-6 p-4 bg-blue-500/20 rounded-lg border border-blue-400/30">
              <h3 className="text-lg font-medium text-blue-300 mb-2">Build a Resume-Ready Project</h3>
              <p className="text-gray-300">
                Participating in this hackathon is not just about building a great project, it's also a fantastic opportunity 
                to showcase your skills, learn in public, and make your project stand out on your resume.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;