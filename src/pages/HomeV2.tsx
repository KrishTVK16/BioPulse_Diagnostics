import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Microscope, Dna, Activity, ShieldCheck } from 'lucide-react';
import { Button, Card } from '../components/UI';

const HomeV2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-brand-bg transition-colors duration-300 overflow-x-hidden">
      {/* Immersive Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] animate-pulse-slow"></div>
           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
           
           <div className="space-y-8 animate-in slide-in-from-bottom duration-700 flex flex-col items-center max-w-4xl">
              <div className="inline-flex items-center space-x-2 bg-brand-bgSec/50 backdrop-blur border border-brand-accent/30 rounded-full px-4 py-1.5 text-brand-accent text-sm font-bold">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
                 </span>
                 <span>#1 Trusted Diagnostics Lab</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight text-brand-text">
                 Next Gen <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">Healthcare.</span>
              </h1>
              
              <p className="text-xl text-brand-textSec max-w-2xl px-4">
                 Experience the synergy of AI-driven analytics and world-class pathology. Precision results delivered at the speed of life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                 <Button onClick={() => navigate('/appointments')} className="px-8 py-4 text-lg rounded-full shadow-[0_0_30px_rgba(0,245,192,0.4)] hover:shadow-[0_0_50px_rgba(0,245,192,0.6)]">
                    Start Your Journey
                 </Button>
                 <Button variant="outline" onClick={() => navigate('/about')} className="px-8 py-4 text-lg rounded-full border-2">
                    Our Technology
                 </Button>
              </div>

              <div className="pt-8 flex items-center justify-center space-x-8 text-brand-textSec text-sm font-mono">
                 <div>
                    <span className="block text-2xl font-bold text-brand-text">50+</span>
                    <span>Awards Won</span>
                 </div>
                 <div>
                    <span className="block text-2xl font-bold text-brand-text">1M+</span>
                    <span>Patients Served</span>
                 </div>
                 <div>
                    <span className="block text-2xl font-bold text-brand-text">24/7</span>
                    <span>Support</span>
                 </div>
              </div>
           </div>

           <div className="relative flex justify-center animate-float mt-16 max-w-xs md:max-w-md w-full">
               <div className="relative w-full aspect-[4/5] bg-gradient-to-tr from-brand-bgSec to-brand-bg border border-brand-accent/20 rounded-[40px] shadow-2xl overflow-hidden backdrop-blur-sm group cursor-pointer hover:scale-105 transition-transform duration-500">
                   <img 
                     src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" 
                     className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" 
                     alt="Doctor"
                   />
                   <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                      <div className="bg-brand-accent text-brand-bg font-bold inline-block px-3 py-1 rounded mb-2">New</div>
                      <h3 className="text-2xl font-bold text-white">Full Body Checkup</h3>
                      <p className="text-gray-300 mt-2 text-sm">Includes 85+ parameters. Book now for a 20% discount.</p>
                      <div className="mt-4 flex justify-between items-center">
                         <span className="text-brand-accent font-bold text-xl">$99</span>
                         <button className="bg-white/10 hover:bg-brand-accent hover:text-brand-bg p-2 rounded-full transition-colors">
                            <ArrowRight />
                         </button>
                      </div>
                   </div>
               </div>

               {/* Floating Badges */}
               <div className="absolute top-10 -right-4 bg-brand-bgSec p-4 rounded-xl shadow-xl border border-gray-700 animate-bounce delay-700 hidden sm:block">
                  <ShieldCheck className="h-8 w-8 text-brand-accent mb-1" />
                  <span className="text-xs font-bold text-brand-text">100% Safe</span>
               </div>
               <div className="absolute bottom-20 -left-4 bg-brand-bgSec p-4 rounded-xl shadow-xl border border-gray-700 animate-pulse delay-300 hidden sm:block">
                  <Activity className="h-8 w-8 text-blue-400 mb-1" />
                  <span className="text-xs font-bold text-brand-text">Fast Reports</span>
               </div>
           </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-brand-accent py-4 overflow-hidden -skew-y-2 transform origin-left">
         <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex items-center space-x-12 font-heading font-bold text-brand-bg text-2xl uppercase tracking-wider">
            <span>• Hematology • Biochemistry • Microbiology • Immunology • Molecular Biology • Histopathology • Cytology • Genetics •</span>
            <span>• Hematology • Biochemistry • Microbiology • Immunology • Molecular Biology • Histopathology • Cytology • Genetics •</span>
         </div>
      </section>

      {/* Interactive Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Why Choose Us?</h2>
            <div className="h-1 w-24 bg-brand-accent mx-auto rounded"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative h-80 perspective-1000">
               <div className="absolute inset-0 bg-brand-bgSec rounded-2xl transform transition-all duration-500 hover:rotate-y-12 hover:scale-105 shadow-xl border border-brand-border p-8 flex flex-col items-center justify-center text-center z-10">
                  <Dna className="h-16 w-16 text-brand-accent mb-6" />
                  <h3 className="text-2xl font-bold text-brand-text mb-2">Genetic Testing</h3>
                  <p className="text-brand-textSec">Unlock the secrets of your DNA for personalized health insights.</p>
               </div>
               <div className="absolute inset-0 bg-brand-accent rounded-2xl transform translate-x-4 translate-y-4 -z-0 opacity-20"></div>
            </div>

             <div className="group relative h-80 perspective-1000">
               <div className="absolute inset-0 bg-brand-bgSec rounded-2xl transform transition-all duration-500 hover:rotate-y-12 hover:scale-105 shadow-xl border border-brand-border p-8 flex flex-col items-center justify-center text-center z-10">
                  <Microscope className="h-16 w-16 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-bold text-brand-text mb-2">Advanced Pathology</h3>
                  <p className="text-brand-textSec">State-of-the-art labs equipped with robotics for zero-error precision.</p>
               </div>
               <div className="absolute inset-0 bg-blue-500 rounded-2xl transform translate-x-4 translate-y-4 -z-0 opacity-20"></div>
            </div>

             <div className="group relative h-80 perspective-1000">
               <div className="absolute inset-0 bg-brand-bgSec rounded-2xl transform transition-all duration-500 hover:rotate-y-12 hover:scale-105 shadow-xl border border-brand-border p-8 flex flex-col items-center justify-center text-center z-10">
                  <Activity className="h-16 w-16 text-purple-500 mb-6" />
                  <h3 className="text-2xl font-bold text-brand-text mb-2">Trend Analysis</h3>
                  <p className="text-brand-textSec">Track your health vitals over time with our smart dashboard.</p>
               </div>
               <div className="absolute inset-0 bg-purple-500 rounded-2xl transform translate-x-4 translate-y-4 -z-0 opacity-20"></div>
            </div>
         </div>
      </section>

      {/* CTA Parallax */}
      <section className="relative py-32 bg-fixed bg-center bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000')"}}>
      <div className="absolute inset-0 bg-brand-bg/80 dark:bg-black/60 backdrop-blur-sm"></div>
         <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
         <h2 className="text-5xl font-heading font-bold text-brand-text dark:text-white mb-8">Precision. Speed. Care.</h2>
         <p className="text-xl text-brand-textSec dark:text-gray-200 mb-10">Book your appointment today and experience the difference.</p>
            <Button onClick={() => navigate('/appointments')} className="text-xl px-12 py-5 rounded-full">Book Appointment</Button>
         </div>
      </section>

    </div>
  );
};

export default HomeV2;