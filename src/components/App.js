import "../styles/App.css";
import Hero from "./Hero.jsx";
import Nav from "./Nav.jsx";
import Parallax from "./Parallax.jsx";
import Rezerwacja from "./Rezerwacja.jsx";
import Uslugi from "./Uslugi.jsx";
import Info from "./Info.jsx";
import Kontakt from "./Kontakt.jsx";
// import Lenis from '@studio-freight/lenis'
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


function App() {
  // const path = window.innerWidth
  // // const sections = gsap.utils.toArray(".box");

  // useEffect(() => {
  //   gsap.to('.uslugi', {
  //     // x: 100,
  //     x: -path,
  //     ease: "none",
  //     duration: 8,
  //     scrollTrigger: {
  //       trigger: ".info",
  //       start: 'top bottom',
  //       end: 'top top',
  //       scrub: 4,
  //       toggleActions: "restart none none none",
  //       pin: ".uslugi",
  //       pinSpacing: false,
  //       markers: true,
  //     }
  //   });
    
  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Parallax />
      <Rezerwacja />
      <Uslugi />
      <Info />
      <Kontakt />
    </>
  );
}

export default App;
