import Hero from "../components/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-(68px+52px))] flex flex-col justify-center items-center relative">
      <Hero />
      <img className="absolute w-full bottom-0" src={wave} alt="" />
    </div>
  );
};

export default Home;
