import { BannerOne } from "./_components/banners/banner1-section";
import { BannerTwo } from "./_components/banners/banner2-section";
import { BannerThree } from "./_components/banners/banner3-section";
import { BannerFour } from "./_components/banners/banner4-section";
import Contact from "./_components/footerComponents/contatc-section";
import Footer from "./_components/footerComponents/footer-section";
import { PhotoGallery } from "./_components/footerComponents/photos-section";
import { About } from "./_components/mainComponents/about-section";
import Navbar from "./_components/mainComponents/navbar-section";
import { WhatsAppButton } from "./_components/systemsComponent/whatsappBtn";

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
      <PhotoGallery />
      <BannerFour />
      <Footer />
    </main>
  );
}
