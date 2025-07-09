import { ArrowLeft, ArrowRight, ArrowUpIcon, ChevronLeft, ChevronRight, HeartIcon, MailIcon, PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import Header from "./components/header";
import { routes } from "./utils/routes";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/modals/Login";
// import { Separator } from "../../components/ui/separator";

function App() {

  const [loginModal, setLoginModal] = useState(false)

  return (
    <div className="w-full h-full flex flex-col relative">
      <Header />
      <main className=" flex-auto">
        <Routes>
          {
            routes.map((route) => (
              <Route key={route.id} element={route.component} path={route.path} />
            ))
          }
        </Routes>
      </main>
      <footer className="w-full h-[231px] mt-[40px] bg-[#0d0d2c]">
        <div className="max-w-[1266px] mx-auto pt-[33px]">
          <div className="flex justify-between items-center">
            <img
              className="w-[273px] h-[60px]"
              alt="Logo"
              src="/logo-1-1.svg"
            />

            <div className="flex gap-4">
              <button className="bg-[#ffffff] text-[#0a142f] gap-1">
                <img
                  className="w-6 h-6"
                  alt="Play Market"
                  src="/frame-23.svg"
                />
                <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-lg">
                  Play market
                </span>
              </button>

              <button className="bg-[#ffffff] text-[#0a142f] gap-1">
                <img
                  className="w-6 h-6"
                  alt="App Store"
                  src="/frame-26.svg"
                />
                <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-lg">
                  App store
                </span>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-[33px]">
            <div className="flex gap-4 text-white">
              <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                To'lov
              </span>
              <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                Savol va javob
              </span>
              <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                Taklif
              </span>
              <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                Ishlar
              </span>
            </div>

            {/* <Separator orientation="vertical" className="h-5 bg-white" /> */}

            <div className="flex gap-4 text-white">
              <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                Hamkorlar
              </span>
              <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                Yetkazib berish
              </span>
              <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                olib kelish
              </span>
              <span className="[font-family:'Source_Sans_Pro',Helvetica] text-lg">
                Kontaktlar
              </span>
            </div>

            <div className="flex gap-2">
              {[
                "/frame-34.svg",
                "/frame-27.svg",
                "/frame-24.svg",
                "/frame-29.svg",
              ].map((icon, index) => (
                <button
                  key={index}
                  size="icon"
                  className="bg-white rounded-full p-2"
                >
                  <img
                    className="w-6 h-6"
                    alt={`Social ${index + 1}`}
                    src={icon}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-[20px]">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-6 h-6 text-white" />
                <span className="[font-family:'Source_Sans_Pro',Helvetica] text-white text-lg">
                  +998 (71) 000-00-00
                </span>
              </div>

              {/* <Separator orientation="vertical" className="h-5 bg-white" /> */}

              <div className="flex items-center gap-2">
                <MailIcon className="w-6 h-6 text-white" />
                <span className="[font-family:'Source_Sans_Pro',Helvetica] text-white text-lg">
                  explore@mail.com
                </span>
              </div>
            </div>

            <div className="[font-family:'Source_Sans_Pro',Helvetica] text-white text-lg">
              © 2022 UMDSOFT. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <button
        size="icon"
        className="fixed bottom-4 right-4 bg-app-primary rounded-full p-[15px] shadow-[0px_4px_10px_#0000001a]"
      >
        <ArrowUpIcon className="w-6 h-6 text-white" />
      </button>
      <Login loginModal={loginModal} setLoginModal={setLoginModal}/>
    </div>
  );
};

export default App;