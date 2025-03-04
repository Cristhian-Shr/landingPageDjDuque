import { About } from "./_components/about-section";
import { BannerOne } from "./_components/banner1-section";
import { BannerTwo } from "./_components/banner2-section";
import { BannerThree } from "./_components/banner3-section";
import { BannerFour } from "./_components/banner4-section";
import Contact from "./_components/contatc-section";
import Footer from "./_components/footer-section";
import Navbar from "./_components/navbar-section";
import { Carousel } from "./_components/photos-section";
import { WhatsAppButton } from "./_components/whatsappBtn";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen">
      <Navbar />
      <WhatsAppButton />
      <BannerOne />
      <About />
      <BannerTwo />
      <Contact />
      <BannerThree />
      <Carousel />
      <BannerFour />
      <Footer />
    </main>
  );
}
