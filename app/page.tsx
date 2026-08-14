import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Expertise from '@/components/expertise';
import Skills from '@/components/skills';
import Education from '@/components/education';
import Certifications from '@/components/certifications';
import Learning from '@/components/learning';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Expertise />
        <Skills />
        <Education />
        <Certifications />
        <Learning />
        <Contact />
      </main>

      <Footer />
    </>
  );
}