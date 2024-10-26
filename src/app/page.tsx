import { About } from "./_components/about-section";
import { BannerOne } from "./_components/banner1-section";
import Footer from "./_components/footer-section";
import Navbar from "./_components/navbar-section";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen">
      <Navbar />
      <BannerOne />
      <About />
      <BannerOne />
      <Footer />
    </main>
  );
}
