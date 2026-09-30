import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Hero } from "@/components/hero/Hero";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Process } from "@/components/process/Process";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}
