'use client';
import { useEffect, useState, useRef } from 'react';
import Nav from '@/components/Nav';
import About from '@/components/About';
import Services from '@/components/Services';
import Vision from '@/components/Vision';
import Contact from '@/components/Contact';
import Footer from './Footer';
import Header from './Header';

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting];
}

// Animated section wrapper component
function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  id 
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  return (
    <div
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      id={id}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-12 opacity-0 scale-95'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [headerLoaded, setHeaderLoaded] = useState(false);

  useEffect(() => {
    setHeaderLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header with immediate animation */}
      <div className={`transition-all duration-1000 ${headerLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <Header />
      </div>

      {/* Navigation */}
      <div className={`transition-all duration-800 delay-300 ${headerLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <Nav />
      </div>
      
      {/* Main Content with scroll-triggered animations */}
      <main className="bg-gray-50">
        <div className="container mx-auto px-4 py-8 space-y-16">
          <AnimatedSection id="about" delay={0}>
            <About />
          </AnimatedSection>
          
          <AnimatedSection id="services" delay={100}>
            <Services />
          </AnimatedSection>

          <AnimatedSection id="vision" delay={200}>
            <Vision />
          </AnimatedSection>
    

          <AnimatedSection id="contact" delay={500}>
            <Contact />
          </AnimatedSection>
        </div>
      </main>

      <AnimatedSection delay={600}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}