import Icons from "./components/Icons";
import Cards from "./cards/Cards";
import Blur from "./components/Blur";
import Switch from "./components/Switch";

export default function Home() {
  return (
    <main className="flex-grow flex justify-center items-center">

        <div>
          <div className="z-100 w-10 h-52 absolute top-0 right-32 -rotate-45 rounded-full bg-[rgba(247,247,247,0.15)] blur-3xl"></div>
          <div className="z-100 w-10 h-40 absolute top-0 right-80 -rotate-12 rounded-full bg-[rgb(247,247,247,0.2)] blur-3xl"></div>
          <div className="z-100 w-10 h-48 absolute top-0 right-[500px] rounded-full bg-[rgba(247,247,247,0.21)] blur-3xl"></div>
          <div className="z-100 w-10 h-60 absolute top-0 right-[670px] rotate-12 rounded-full bg-[rgba(247,247,247,0.22)] blur-3xl"></div>
          <div className="z-100 w-10 h-48 absolute top-0 right-[850px] rotate-45 rounded-full bg-[rgba(247,247,247,0.21)] blur-3xl"></div>
          <div className="z-100 w-10 h-36 absolute top-0 right-[1100px] rotate-45 rounded-full bg-[rgb(247,247,247,0.2)] blur-3xl"></div>
        </div>

        <div>
          <div className="z-100 w-10 h-52 absolute top-0 right-32 -rotate-45 rounded-full bg-[rgba(247,247,247,0.15)] blur-3xl"></div>
          <div className="z-100 w-10 h-40 absolute top-0 right-80 -rotate-12 rounded-full bg-[rgb(247,247,247,0.2)] blur-3xl"></div>
          <div className="z-100 w-10 h-48 absolute top-0 right-[500px] rounded-full bg-[rgba(247,247,247,0.21)] blur-3xl"></div>
          <div className="z-100 w-10 h-60 absolute top-0 right-[670px] rotate-12 rounded-full bg-[rgba(247,247,247,0.22)] blur-3xl"></div>
          <div className="z-100 w-10 h-48 absolute top-0 right-[850px] rotate-45 rounded-full bg-[rgba(247,247,247,0.21)] blur-3xl"></div>
          <div className="z-100 w-10 h-36 absolute top-0 right-[1100px] rotate-45 rounded-full bg-[rgb(247,247,247,0.2)] blur-3xl"></div>
        </div>
        


        <Blur />
        
        <Switch />

        <div className="flex">
          <div className="flex-grow flex items-center">
            <div>
              <Icons />
              
              <h1>Hi, I'm Radim!</h1>
              <p className="bio">A 17 years-old student from Czech Republic,<br /> currently living in Kroměříž. I'm a high <br /> school student learning IT.</p>
            </div>
            
          </div>

          <Cards />
        </div>

      

      
    </main>
  );
}