import { useEffect, useRef, useState } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [placeBet, setPlaceBet] = useState(false);
  const [headsTailTab, setHeadsTailTab] = useState("heads");
  const myBetRef = useRef();
  const navigate = useNavigate();
  const [myBet, setMyBet] = useState(false);
  useCloseModalClickOutside(myBetRef, () => {
    setMyBet(false);
  });

  useEffect(() => {
    if (placeBet) {
      const interval = setInterval(() => {
        setPlaceBet(false);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [placeBet]);
  return (
    <div
      style={{ backgroundColor: "#0a0928" }}
      className="theme-pluto flex flex-col w-full h-full"
    >
      <div
        className="relative flex flex-col items-start gap-3 pb-3 overflow-x-hidden overflow-y-auto text-gray-100 bg-gray-900 select-none scrollbar-none"
        style={{ width: "100%", height: "" }}
      >
        <div className="flex items-center justify-between w-full gap-2 px-3 py-2 text-sm font-semibold text-gray-200 bg-gray-800">
          <div className="flex items-center gap-1 whitespace-nowrap w-fit">
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-400"
              >
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
            </span>
          </div>
          <div className="flex items-center justify-end flex-grow gap-1 overflow-x-auto lg:w-full">
            <div className="w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-400"
              >
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
              </svg>
            </div>
            <div className="userName-text-container">
              <div id="user" className="w-full">
                <span id="user-span" className>
                  b41.91_9967222220
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-400"
            >
              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            </svg>
            <div
              id="balanceAmountContainer"
              className="text-yellow-500 relative w-fit"
            >
              <span>₹574.00</span>
              <div>
                <div className="absolute right-0 z-50 text-sm font-semibold text-green-500 animate__animated animate__fadeOutUp animate__slow -bottom-6">
                  +49
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <button
                onClick={() => setMyBet(true)}
                className="transition-all duration-100 ease-in-out cursor-pointer hover:scale-125"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pb-0 text-gray-400 hover:text-gray-300"
                >
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              </button>
              {/* my bets start  */}
              {myBet && (
                <div className="fixed top-0 left-0 z-50 w-screen h-screen p-0"></div>
              )}
              {myBet && (
                <ul
                  onClick={() => navigate("/my-bets")}
                  ref={myBetRef}
                  className=" absolute w-64  border-[1px] border-white/30 top-7 right-0  py-2 text-sm font-semibold text-white rounded-md shadow backdrop-blur-lg bg-gray-100/30 animate__animated animate__bounceIn hover:bg-gray-100/20"
                  style={{ zIndex: 1000 }}
                >
                  <li>
                    <div className="block px-4 py-2 cursor-pointer ">
                      My Bets
                    </div>
                  </li>
                </ul>
              )}
              {/* my bets ends  */}
              {/* my bet details start  */}

              {/* my bets details ends */}
            </div>
          </div>
        </div>
        <div id="step-gameHistory" className="w-full px-3">
          <div className="relative w-full">
            <span className="absolute top-0 left-0 z-40 w-8 h-full bg-gradient-to-r to-transparent from-gray-900" />
            {/* <div
                      className="autoAnimate flex items-center justify-start gap-1 pr-12  scrollbar-none overflow-y-scroll  ">
                      <span className="px-2 py-[6px] z-50"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-history">
                              <path d="M12 8l0 4l2 2"></path>
                              <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
                          </svg></span><span
                          className="px-3 py-[6px]  rounded-md  text-sm  text-gray-600 font-semibold bg-gray-800 z-50">History
                          will be displayed here.</span></div> */}
            <div className="autoAnimate flex items-center justify-start gap-1 pr-12 scrollbar-none overflow-y-scroll">
              <span className="px-2 py-[6px] z-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-history"
                >
                  <path d="M12 8l0 4l2 2" />
                  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                </svg>
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-50 animate__fadeInLeft bg-green-500">
                H
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-50 bg-green-500">
                H
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-30 bg-slate-800">
                T
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-30 bg-slate-800">
                T
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-30 bg-slate-800">
                T
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-30 bg-green-500">
                T
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-30 bg-slate-800">
                H
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-30 bg-green-500">
                T
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-30 bg-green-500">
                H
              </span>
              <span className="px-3 py-[6px] animate__animated rounded-md text-sm text-white font-semibold z-30 bg-green-500">
                T
              </span>
            </div>
            <div className="absolute top-0 right-0 z-40 flex items-center h-full">
              <span className="w-8 h-full bg-gradient-to-r from-transparent to-gray-900" />
              <button className="flex items-start p-2 h-full text-xs font-medium text-center text-gray-300 bg-gray-900">
                Show All
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2 md:flex-row md:px-2">
          <div className="w-full md:w-[60%] px-3 md:px-0 h-fit">
            <div
              id="70003Parent"
              className="relative flex flex-col w-full gap-1 rounded-lg aspect-[4/3] overflow-clip"
              style={{
                backgroundImage: 'url("/src/assets/img/cointoss-bg.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                overflow: "hidden",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black/50">
                <div className="px-2 py-1 font-extrabold tracking-tighter text-white">
                  Coin Toss
                  <span className="ml-1 text-xs font-medium tracking-wider">
                    #
                  </span>
                </div>
              </div>
              <div
                id="step-gameSettings"
                className="animate__animated animate__bounceIn origin-top-right absolute z-50 flex gap-[1px] rounded-bl-lg overflow-clip right-0 top-0 h-fit w-fit"
              >
                <button className="flex items-center justify-center h-8 px-2 text-white rounded-bl-lg w-fit bg-white/20 backdrop-blur-sm active:bg-white/10 lg:hover:bg-white/10">
                  <div className="flex items-center gap-1 py-1 text-sm font-normal tracking-tight rounded-md w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-users"
                    >
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                    59
                  </div>
                </button>
                <button className="flex items-center justify-center h-8 px-2 text-white w-fit bg-white/20 backdrop-blur-sm active:bg-white/10 lg:hover:bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-volume-off"
                  >
                    <path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464" />
                    <path d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615" />
                    <path d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664" />
                    <path d="M3 3l18 18" />
                  </svg>
                </button>
                <button className="flex items-center justify-center h-8 px-2 text-white w-fit bg-white/20 backdrop-blur-sm active:bg-white/10 lg:hover:bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-shield-check"
                  >
                    <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                    <path d="M15 19l2 2l4 -4" />
                  </svg>
                </button>
                <button className="flex items-center justify-center h-8 px-2 text-white w-fit bg-white/20 backdrop-blur-sm active:bg-white/10 lg:hover:bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-question-mark"
                  >
                    <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                    <path d="M12 19l0 .01" />
                  </svg>
                </button>
                <button className="flex items-center justify-center h-8 px-2 text-white w-fit bg-white/20 backdrop-blur-sm active:bg-white/10 lg:hover:bg-white/10">
                  <span className="relative flex w-3 h-3">
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-green-500" />
                    <span className="relative inline-flex w-3 h-3 rounded-full bg-green-500" />
                  </span>
                </button>
              </div>
              <div className="absolute flex items-end pb-8 animate__animated animate__bounceInDown justify-center top-0 left-0 w-full h-full">
                {/*  coinContainer*/}

                {placeBet ? (
                  <div className="coinContainer toss_coin">
                    <div
                      className="text-yellow-200 coin"
                      style={{
                        animation:
                          "0.6s ease 0s 1 normal none running coinFlipAnimation",
                      }}
                    >
                      <span
                        className="absolute w-full h-full p-2 bg-yellow-400 border-2 border-yellow-200 rounded-full"
                        style={{ transform: "translateZ(8px)", zIndex: 1000 }}
                      >
                        <span className="relative flex items-center justify-center w-full h-full font-black border-4 border-yellow-200 border-double rounded-full text-7xl overflow-clip">
                          H<span className="shimmer" />
                        </span>
                      </span>
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(1px)", zIndex: 1000 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(2px)", zIndex: 999 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(3px)", zIndex: 998 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(4px)", zIndex: 997 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(5px)", zIndex: 996 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(6px)", zIndex: 995 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(7px)", zIndex: 994 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(8px)", zIndex: 993 }}
                      />
                      <span
                        className="absolute flex items-center justify-center w-full h-full p-2 bg-yellow-400 border-2 border-yellow-200 rounded-full"
                        style={{ transform: "translateZ(0px)", zIndex: 990 }}
                      >
                        <span className="relative flex items-center justify-center w-full h-full font-black border-4 border-yellow-200 border-double rounded-full text-7xl overflow-clip">
                          T<span className />
                        </span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="coinContainer  ">
                    <div className="text-yellow-200 coin">
                      <span
                        className="absolute w-full h-full p-2 bg-yellow-400 border-2 border-yellow-200 rounded-full"
                        style={{ transform: "translateZ(0px)", zIndex: 990 }}
                      >
                        <span className="relative flex items-center justify-center w-full h-full font-black border-4 border-yellow-200 border-double rounded-full text-7xl overflow-clip ">
                          {headsTailTab === "heads" ? "H" : "H"}
                          <span />
                        </span>
                      </span>
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(1px)", zIndex: 1000 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(2px)", zIndex: 999 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(3px)", zIndex: 998 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(4px)", zIndex: 997 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(5px)", zIndex: 996 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(6px)", zIndex: 995 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(7px)", zIndex: 994 }}
                      />
                      <span
                        className="absolute w-full h-full bg-yellow-500 border-2 border-yellow-400 border-dashed rounded-full"
                        style={{ transform: "translateZ(8px)", zIndex: 993 }}
                      />
                      <span
                        className="absolute flex items-center justify-center w-full h-full p-2 bg-yellow-400 border-2 border-yellow-200 rounded-full"
                        style={{ transform: "translateZ(8px)", zIndex: 1000 }}
                      >
                        <span className="relative flex items-center justify-center w-full h-full font-black border-4 border-yellow-200 border-double rounded-full text-7xl overflow-clip">
                          {headsTailTab === "heads" ? "H" : "T"}
                          <span className="shimmer" />
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div
                id="step-selectOption"
                className="absolute bottom-0 z-50 flex items-center w-full gap-1 p-1 font-semibold h-fit backdrop-blur-md bg-black/40"
              >
                <div
                  onClick={() => setHeadsTailTab("heads")}
                  className={`flex relative items-center  justify-center flex-grow px-3 py-2 rounded-md active:scale-90 autoAnimate bg-orange-600 ${
                    headsTailTab === "heads" ? "border-white border-2" : ""
                  }`}
                >
                  {headsTailTab === "heads" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute w-6 h-6 left-2"
                    >
                      <path
                        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </svg>
                  )}
                  HEADS
                </div>
                <div
                  onClick={() => setHeadsTailTab("tails")}
                  className={`flex relative items-center justify-center flex-grow px-3 py-2 rounded-md active:scale-90 autoAnimate bg-blue-600 border-blue-600 ${
                    headsTailTab === "tails" ? "border-white border-2" : ""
                  }`}
                >
                  {headsTailTab === "tails" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute w-6 h-6 left-2"
                    >
                      <path
                        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </svg>
                  )}
                  TAILS
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-[40%] gap-2 md:py-3 md:border-gray-700 md:border-2 rounded-lg">
            <div className="flex items-center justify-between w-full px-4 text-white">
              <span className="text-xs font-semibold">Amount</span>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                Bet Limits
                <span className="text-gray-200">
                  <span className="text-gray-200">₹50.00</span> -
                  <span className="text-gray-200">₹10,000.00</span>
                </span>
              </div>
            </div>
            <span className="flex-col w-full flex gap-2">
              <div className="flex w-full gap-1 px-3">
                <div
                  id="step-betInput"
                  className="relative flex items-center flex-grow h-12 gap-1"
                >
                  <input
                    placeholder="Amount"
                    className="z-40 text-center input-originals"
                    type="text"
                    defaultValue={50}
                  />
                  <button
                    className="btn-pill animate__animated animate__fadeIn w-fit opacity-20 cursor-not-allowed cursor-not-allowed flex items-center justify-center p-3 transition-all ease-in-out active:scale-75"
                    disabled
                  >
                    /2
                  </button>
                  <button className="btn-pill animate__animated animate__fadeIn w-fit opacity-100 cursor-pointer flex items-center justify-center p-3 transition-all ease-in-out active:scale-75">
                    x2
                  </button>
                </div>
                <button className="w-1/3 btn-originals btn-purple">
                  All In
                </button>
              </div>
              <div className="w-full px-3 h-fit">
                <div className="grid grid-cols-4 gap-1">
                  <button
                    value={50}
                    className="btn-pill animate__animated animate__fadeIn"
                  >
                    50
                  </button>
                  <button
                    value={250}
                    className="btn-pill animate__animated animate__fadeIn"
                  >
                    250
                  </button>
                  <button
                    value={1250}
                    className="btn-pill animate__animated animate__fadeIn"
                  >
                    1250
                  </button>
                  <button
                    value={2500}
                    className="btn-pill animate__animated animate__fadeIn"
                  >
                    2500
                  </button>
                </div>
              </div>
            </span>
            <div
              id="step-placeBet"
              className="flex flex-col w-full h-12 px-3 relative"
            >
              <button
                onClick={() => setPlaceBet(true)}
                className="w-full btn-originals animate__animated animate__headShake btn-green relative overflow-hidden"
              >
                Bet
              </button>
            </div>
            <div
              id="step-selectMode"
              className="relative flex w-full bg-gray-950 overflow-clip"
            >
              <button
                className="flex items-center justify-center w-full gap-2 p-3 text-sm font-semibold tracking-wider text-green-500"
                disabled
                style={{ zIndex: 998 }}
              >
                Manual
              </button>
              <button
                className="flex items-center justify-center w-full gap-2 p-3 text-sm font-semibold tracking-wider text-gray-400"
                style={{ zIndex: 998 }}
              >
                Auto
              </button>
              <div
                className="absolute z-10 h-full transition-all ease-in-out p-1 cursor-pointer"
                style={{ zIndex: 996, width: "50%", left: "0%", bottom: "0px" }}
              >
                <div className="w-full h-full bg-gray-800 rounded-lg" />
              </div>
            </div>
            <div>
              <div
                id="step-selectMode"
                className="relative flex w-full bg-gray-950 overflow-clip"
              >
                <button
                  className="flex items-center justify-center w-full gap-2 p-3 text-sm font-semibold tracking-wider text-white"
                  disabled
                  style={{ zIndex: 998 }}
                >
                  All Bets
                </button>
                <button
                  className="flex items-center justify-center w-full gap-2 p-3 text-sm font-semibold tracking-wider text-gray-400"
                  style={{ zIndex: 998 }}
                >
                  Description
                </button>
                <div
                  className="absolute z-10 h-[2px] transition-all ease-in-out bg-green-500"
                  style={{
                    zIndex: 996,
                    width: "50%",
                    left: "0%",
                    bottom: "0px",
                  }}
                />
              </div>
              <div
                id="step-gameParticipants"
                className="relative overflow-auto w-full h-[420px] scrollbar-none"
              >
                <table className="w-full table-auto animate__animated animate__fadeIn animate__faster">
                  <tbody className>
                    <tr className="sticky top-0 w-full h-12 text-xs font-medium text-gray-300 bg-gray-800">
                      <th className="p-2 pl-4 text-left">User</th>
                      <th className="p-2 text-left">Amount</th>
                      <th className="p-2 text-left">Multiplier</th>
                      <th className="p-2 text-left">Profit</th>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        io69***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>250.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹245.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        io69***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>250.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹245.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        REHA***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Sand***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        muno***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>400.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹392.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        io69***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>250.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹245.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        REHA***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Sand***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Sand***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        muno***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>200.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹196.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        REHA***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Sand***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        io69***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>125.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹122.50</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Sand***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        io69***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>125.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹125.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Rahu***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        REHA***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        muno***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>200.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹196.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        io69***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>125.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹125.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Sand***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        REHA***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        muno***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Sand***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        muno***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        REHA***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Rahu***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        REHA***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Sand***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        io69***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>250.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹250.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        REHA***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        io69***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>250.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹250.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        muno***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 1.98
                      </td>
                      <td className="p-2 font-semibold text-start text-green-500">
                        <span>₹98.00</span>
                      </td>
                    </tr>
                    <tr className="w-full text-xs font-medium odd:bg-gray-800 even:bg-gray-900">
                      <td className="p-2 pl-4 text-sm text-white text-start">
                        Tahi***
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        <span>100.00</span>
                      </td>
                      <td className="p-2 font-semibold text-white text-start">
                        x 0
                      </td>
                      <td className="p-2 font-semibold text-start text-red-500">
                        <span>₹100.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="sticky bottom-0 z-40 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-24 mx-auto w-fit">
          <svg
            className
            width={122}
            height={24}
            viewBox="0 0 122 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2239_2484)">
              <path
                d="M8.14 17.8973C6.13286 17.2752 4.4511 15.8883 3.45814 14.0363C2.46518 12.1844 2.24074 10.0161 2.83333 8C4.91035 8.09504 6.94278 7.37772 8.5 6C10.0572 7.37772 12.0896 8.09504 14.1667 8C14.6191 9.53941 14.5982 11.1793 14.1067 12.7067"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 16.6667L11.8333 18L14.5 15.3333"
                stroke="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M20.8711 16.9453C20.5065 16.4961 20.3242 16.0078 20.3242 15.4805C20.3242 14.9531 20.4121 14.4974 20.5879 14.1133C20.7702 13.7292 21.0111 13.4069 21.3105 13.1465C21.61 12.8861 21.9551 12.6647 22.3457 12.4824C23.0684 12.1439 23.8854 11.9681 24.7969 11.9551C24.8555 10.8809 25.0996 9.85872 25.5293 8.88867C25.9655 7.91211 26.5352 7.05924 27.2383 6.33008C27.9414 5.5944 28.7975 5.00846 29.8066 4.57227C30.8223 4.13607 31.903 3.91797 33.0488 3.91797C34.123 3.91797 35.1094 4.18164 36.0078 4.70898C36.457 4.9694 36.8184 5.32422 37.0918 5.77344C37.3717 6.21615 37.5117 6.76953 37.5117 7.43359C37.5117 8.09766 37.3457 8.77799 37.0137 9.47461C36.6882 10.1647 36.2552 10.7539 35.7148 11.2422C34.569 12.2643 33.2669 12.8568 31.8086 13.0195C31.2357 14.6927 30.2786 15.9915 28.9375 16.916C27.5964 17.8405 25.998 18.3027 24.1426 18.3027C22.6973 18.3027 21.6068 17.8503 20.8711 16.9453ZM22.3848 13.5859C21.9811 13.7747 21.6491 14.0417 21.3887 14.3867C21.1283 14.7253 20.998 15.0931 20.998 15.4902C20.998 15.8874 21.1055 16.2324 21.3203 16.5254C21.5417 16.8118 21.8216 17.0365 22.1602 17.1992C22.8503 17.5312 23.5632 17.6973 24.2988 17.6973C25.4772 17.6973 26.5514 17.3262 27.5215 16.584C28.498 15.8353 29.2337 14.888 29.7285 13.7422C29.9238 13.2865 30.1322 12.5866 30.3535 11.6426C30.5749 10.6921 30.7474 10.0378 30.8711 9.67969C31.6068 7.47917 32.6322 5.95898 33.9473 5.11914C33.8626 5.03451 33.6576 4.95964 33.332 4.89453C33.0065 4.82943 32.6452 4.79688 32.248 4.79688C31.3887 4.79688 30.5391 5.00521 29.6992 5.42188C28.8659 5.83854 28.1367 6.37891 27.5117 7.04297C26.8867 7.70703 26.3822 8.47852 25.998 9.35742C25.6139 10.2298 25.4219 11.1022 25.4219 11.9746C26.3854 12.1243 27.3262 12.5052 28.2441 13.1172L27.8242 13.7617C26.9453 13.2604 26.1738 13.0098 25.5098 13.0098C25.5098 13.153 25.5618 13.446 25.666 13.8887C25.7702 14.3314 25.8906 14.7383 26.0273 15.1094L25.4512 15.2852C25.2949 15.0378 25.1582 14.6667 25.041 14.1719C24.9303 13.6706 24.8587 13.2832 24.8262 13.0098C24.0189 13.0098 23.2051 13.2018 22.3848 13.5859ZM34.6699 5.48047C33.9603 6.20964 33.3743 7.1862 32.9121 8.41016C32.4564 9.6276 32.1341 10.972 31.9453 12.4434C32.4531 12.4434 32.9577 12.2969 33.459 12.0039C33.9603 11.7044 34.39 11.3301 34.748 10.8809C35.1061 10.4251 35.3958 9.92383 35.6172 9.37695C35.8385 8.83008 35.9492 8.38737 35.9492 8.04883C35.9492 7.70378 35.9329 7.43359 35.9004 7.23828C35.8678 7.04297 35.8125 6.82812 35.7344 6.59375C35.5521 6.0599 35.1973 5.6888 34.6699 5.48047ZM40.5293 13.3809C40.2819 13.3809 39.9889 13.5404 39.6504 13.8594C39.3118 14.1719 38.9831 14.556 38.6641 15.0117C38.1562 15.7409 37.6387 16.5807 37.1113 17.5312L36.8477 18H35.4707C35.4707 18 35.5716 17.694 35.7734 17.082C36.3398 15.3893 36.623 14.3867 36.623 14.0742C36.623 13.7552 36.571 13.5957 36.4668 13.5957C36.278 13.5957 36.0534 13.8203 35.793 14.2695C35.7344 14.3737 35.6855 14.4583 35.6465 14.5234C35.6074 14.582 35.5618 14.6569 35.5098 14.748C35.4642 14.8327 35.4349 14.8848 35.4219 14.9043L34.7676 14.5234C35.2754 13.6966 35.7409 13.0879 36.1641 12.6973C36.5872 12.3001 37.0202 12.1016 37.4629 12.1016C37.6647 12.1016 37.8372 12.1862 37.9805 12.3555C38.1302 12.5247 38.2051 12.7266 38.2051 12.9609C38.2051 13.1888 38.1921 13.3939 38.166 13.5762C38.14 13.752 38.1107 13.9147 38.0781 14.0645C38.0456 14.2142 38 14.3932 37.9414 14.6016C37.8828 14.8099 37.834 14.9694 37.7949 15.0801C37.7624 15.1908 37.7168 15.3405 37.6582 15.5293C37.5996 15.7181 37.5638 15.8288 37.5508 15.8613C37.668 15.627 37.8665 15.2819 38.1465 14.8262C38.4264 14.3704 38.6087 14.084 38.6934 13.9668C38.778 13.8496 38.8952 13.6934 39.0449 13.498C39.1947 13.3027 39.3249 13.153 39.4355 13.0488C39.5527 12.9382 39.6895 12.8145 39.8457 12.6777C40.0085 12.5345 40.1615 12.4271 40.3047 12.3555C40.6693 12.1862 41.0208 12.1016 41.3594 12.1016C41.6979 12.1016 41.9681 12.2025 42.1699 12.4043C42.3783 12.5996 42.4824 12.8307 42.4824 13.0977C42.4824 13.3581 42.3978 13.5892 42.2285 13.791C42.0658 13.9863 41.8737 14.084 41.6523 14.084C41.4375 14.084 41.2682 14.0482 41.1445 13.9766C41.0208 13.8984 40.9362 13.8171 40.8906 13.7324C40.7539 13.498 40.6335 13.3809 40.5293 13.3809ZM42.209 15.6758C42.209 15.1875 42.3262 14.7188 42.5605 14.2695C42.8014 13.8138 43.1107 13.4297 43.4883 13.1172C44.3216 12.4401 45.1712 12.1016 46.0371 12.1016C46.903 12.1016 47.6126 12.3327 48.166 12.7949C48.7194 13.2572 48.9961 13.8366 48.9961 14.5332C48.9961 15.2233 48.804 15.8451 48.4199 16.3984C48.0423 16.9518 47.541 17.3848 46.916 17.6973C46.291 18.0033 45.6074 18.1562 44.8652 18.1562C44.1296 18.1562 43.5013 17.9251 42.9805 17.4629C42.4661 16.9941 42.209 16.3984 42.209 15.6758ZM45.4023 17.5508C45.7018 17.5508 45.9818 17.4531 46.2422 17.2578C46.5091 17.0625 46.7109 16.8086 46.8477 16.4961C47.1146 15.8971 47.248 15.2786 47.248 14.6406C47.248 14.0026 47.1309 13.5208 46.8965 13.1953C46.6621 12.8633 46.3301 12.6973 45.9004 12.6973C45.4707 12.6973 45.0443 12.9772 44.6211 13.5371C44.2044 14.097 43.9961 14.8099 43.9961 15.6758C43.9961 16.9258 44.4648 17.5508 45.4023 17.5508ZM52.4531 17.0625C53.0065 17.0625 53.5664 16.8672 54.1328 16.4766C54.6992 16.0859 55.1517 15.6302 55.4902 15.1094C55.8288 14.582 55.998 14.1133 55.998 13.7031C55.959 13.7552 55.8158 13.7812 55.5684 13.7812C55.3275 13.7812 55.1322 13.7031 54.9824 13.5469C54.8327 13.3841 54.7578 13.1921 54.7578 12.9707C54.7578 12.7428 54.8424 12.541 55.0117 12.3652C55.181 12.1895 55.4154 12.1016 55.7148 12.1016C56.5417 12.1016 56.9551 12.554 56.9551 13.459C56.9551 13.8691 56.8281 14.3379 56.5742 14.8652C56.3203 15.3926 55.972 15.9036 55.5293 16.3984C55.0931 16.8932 54.5267 17.3099 53.8301 17.6484C53.14 17.987 52.4076 18.1562 51.6328 18.1562C50.8646 18.1562 50.4805 17.7819 50.4805 17.0332C50.4805 16.61 50.6009 16.0371 50.8418 15.3145C51.0892 14.5853 51.2129 14.1198 51.2129 13.918C51.2129 13.7161 51.1543 13.6152 51.0371 13.6152C50.8613 13.6152 50.513 14.0384 49.9922 14.8848L49.3574 14.5234C50.3145 12.9089 51.1934 12.1016 51.9941 12.1016C52.209 12.1016 52.3945 12.1829 52.5508 12.3457C52.7135 12.502 52.7949 12.7624 52.7949 13.127C52.7949 13.485 52.6647 14.1491 52.4043 15.1191C52.1439 16.0892 52.0137 16.6035 52.0137 16.6621C52.0137 16.929 52.1602 17.0625 52.4531 17.0625ZM62.8145 12.3164H64.3379L63.5664 15.2363C63.4427 15.6465 63.3809 16.0208 63.3809 16.3594C63.3809 16.6914 63.4395 16.8574 63.5566 16.8574C63.6738 16.8574 63.8333 16.7565 64.0352 16.5547C64.2435 16.3464 64.4193 16.138 64.5625 15.9297L64.7871 15.6172L65.207 16.0078C64.9922 16.4245 64.7188 16.8053 64.3867 17.1504C63.7422 17.821 63.1823 18.1562 62.707 18.1562C62.1471 18.1562 61.8672 17.7233 61.8672 16.8574C61.8672 16.7142 61.8737 16.6068 61.8867 16.5352C61.7891 16.8672 61.6035 17.1602 61.3301 17.4141C60.8092 17.9089 60.2201 18.1562 59.5625 18.1562C58.9115 18.1562 58.3874 17.9349 57.9902 17.4922C57.5996 17.043 57.4043 16.4831 57.4043 15.8125C57.4043 14.7708 57.7428 13.8919 58.4199 13.1758C59.097 12.4596 59.8913 12.1016 60.8027 12.1016C61.2585 12.1016 61.6361 12.2285 61.9355 12.4824C62.235 12.7298 62.4303 13.0553 62.5215 13.459L62.8145 12.3164ZM61.1836 12.9414C60.806 12.9414 60.4512 13.1009 60.1191 13.4199C59.7936 13.7324 59.543 14.1133 59.3672 14.5625C59.1914 15.0052 59.1035 15.4382 59.1035 15.8613C59.1035 16.2845 59.1947 16.6263 59.377 16.8867C59.5658 17.1471 59.8522 17.2773 60.2363 17.2773C60.627 17.2773 60.9785 17.1016 61.291 16.75C61.8835 16.0729 62.1797 15.2689 62.1797 14.3379C62.1797 13.4069 61.8477 12.9414 61.1836 12.9414ZM71.418 16.8574C71.099 17.2415 70.6758 17.554 70.1484 17.7949C69.6211 18.0358 69.0124 18.1562 68.3223 18.1562C67.6322 18.1562 67.0462 17.9512 66.5645 17.541C66.0892 17.1309 65.8516 16.61 65.8516 15.9785C65.8516 15.9069 65.8646 15.7734 65.8906 15.5781C66.1576 13.7878 66.6426 11.8281 67.3457 9.69922C68.0488 7.5638 68.804 5.97201 69.6113 4.92383H71.2715C70.7832 5.4707 70.1973 6.63281 69.5137 8.41016C68.8366 10.1875 68.2897 11.9388 67.873 13.6641C68.6608 12.6224 69.5462 12.1016 70.5293 12.1016C71.1413 12.1016 71.61 12.3099 71.9355 12.7266C72.2676 13.1367 72.4336 13.6087 72.4336 14.1426C72.4336 14.6764 72.3457 15.168 72.1699 15.6172C71.9941 16.0599 71.7435 16.4733 71.418 16.8574ZM67.5703 15.5781C67.5182 15.8516 67.4922 16.1185 67.4922 16.3789C67.4922 16.6328 67.5866 16.8932 67.7754 17.1602C67.9642 17.4206 68.2539 17.5508 68.6445 17.5508C69.0352 17.5508 69.3932 17.3815 69.7188 17.043C70.3438 16.3854 70.6562 15.5163 70.6562 14.4355C70.6562 13.9928 70.5814 13.6315 70.4316 13.3516C70.2819 13.0651 70.0508 12.9219 69.7383 12.9219C69.4258 12.9219 69.0352 13.1725 68.5664 13.6738C68.1042 14.1751 67.7721 14.8099 67.5703 15.5781ZM76.8477 5.01172H78.4297C78.1497 5.49349 77.7201 6.56445 77.1406 8.22461C76.5612 9.87826 76.0306 11.5449 75.5488 13.2246C75.0736 14.8978 74.8359 15.9232 74.8359 16.3008C74.8359 16.6719 74.8815 16.8574 74.9727 16.8574C75.2461 16.8574 75.6725 16.444 76.252 15.6172L76.6621 16.0078C76.3757 16.5026 76.0664 16.9193 75.7344 17.2578C75.1484 17.8568 74.6732 18.1562 74.3086 18.1562C73.6445 18.1562 73.3125 17.7559 73.3125 16.9551C73.3125 15.7637 73.7064 13.8854 74.4941 11.3203C75.2884 8.75521 76.0729 6.65234 76.8477 5.01172ZM77.6387 14.6211L77.0039 14.2402C77.3294 13.6738 77.7331 13.1758 78.2148 12.7461C78.7031 12.3164 79.1393 12.1016 79.5234 12.1016C80.1484 12.1016 80.4609 12.3815 80.4609 12.9414C80.4609 13.1758 80.2982 13.7454 79.9727 14.6504C79.6536 15.5553 79.4941 16.1283 79.4941 16.3691C79.4941 16.61 79.5104 16.7663 79.543 16.8379C79.5755 16.903 79.6471 16.9355 79.7578 16.9355C80.3503 16.9355 80.959 16.7142 81.584 16.2715C82.2155 15.8223 82.6257 15.3275 82.8145 14.7871L83.498 12.7949C83.5697 12.5931 83.6803 12.4336 83.8301 12.3164C83.9798 12.1992 84.123 12.1406 84.2598 12.1406C84.403 12.1406 84.5169 12.1862 84.6016 12.2773C84.6927 12.3685 84.7383 12.4889 84.7383 12.6387C84.7383 12.7884 84.709 12.9447 84.6504 13.1074L83.9082 15.2754C83.498 16.5514 82.8633 17.8079 82.0039 19.0449C82.7526 19.123 83.4199 19.2565 84.0059 19.4453L83.9277 19.9922C83.0293 19.8099 82.235 19.7025 81.5449 19.6699C80.9134 20.4837 80.2656 21.1315 79.6016 21.6133C78.944 22.1016 78.3678 22.3457 77.873 22.3457C77.3848 22.3457 77.0202 22.2448 76.7793 22.043C76.5319 21.8477 76.4082 21.5775 76.4082 21.2324C76.4082 20.8874 76.5384 20.5716 76.7988 20.2852C77.0592 20.0052 77.4076 19.7773 77.8438 19.6016C78.7292 19.237 79.7448 19.0286 80.8906 18.9766C80.9818 18.8724 81.1999 18.5078 81.5449 17.8828C81.89 17.2513 82.0755 16.8542 82.1016 16.6914C80.9492 17.668 79.9336 18.1562 79.0547 18.1562C78.6966 18.1562 78.4362 18.0358 78.2734 17.7949C78.1107 17.5475 78.0293 17.2448 78.0293 16.8867C78.0293 16.5286 78.1628 15.9167 78.4297 15.0508C78.7031 14.1784 78.8398 13.6836 78.8398 13.5664C78.8398 13.4427 78.8105 13.3809 78.752 13.3809C78.6999 13.3809 78.6413 13.3971 78.5762 13.4297C78.5111 13.4557 78.446 13.5013 78.3809 13.5664C78.3223 13.625 78.2669 13.6836 78.2148 13.7422C78.1628 13.7943 78.1042 13.8691 78.0391 13.9668C77.9805 14.0645 77.9349 14.1393 77.9023 14.1914C77.7656 14.4062 77.6777 14.5495 77.6387 14.6211ZM80.4609 19.6699C79.9336 19.7025 79.3965 19.7969 78.8496 19.9531C77.7949 20.2526 77.2676 20.6042 77.2676 21.0078C77.2676 21.2487 77.4173 21.3691 77.7168 21.3691C78.0163 21.3691 78.5046 21.151 79.1816 20.7148C79.8587 20.2852 80.2852 19.9368 80.4609 19.6699ZM104.963 4.10352L105.402 4.50391C104.875 5.48698 103.97 5.97852 102.688 5.97852C102.531 5.97852 102.303 5.96549 102.004 5.93945C101.242 6.81836 100.767 8.14323 100.578 9.91406C100.539 10.2852 100.516 10.64 100.51 10.9785L103.049 10.8809L102.365 11.7207H100.471C100.282 14.3444 99.0417 16.2422 96.75 17.4141C95.4349 18.0846 93.9342 18.4199 92.248 18.4199C91.2129 18.4199 90.2852 18.2181 89.4648 17.8145C89.0482 17.6126 88.7129 17.3359 88.459 16.9844C88.2116 16.6328 88.0879 16.2129 88.0879 15.7246C88.0879 15.2363 88.1888 14.8001 88.3906 14.416C88.5924 14.0319 88.8464 13.7357 89.1523 13.5273C89.4583 13.3125 89.8424 13.1432 90.3047 13.0195C91.0339 12.8177 91.9616 12.7168 93.0879 12.7168C92.3522 11.7533 91.9844 10.7539 91.9844 9.71875C91.9844 8.96354 92.1699 8.22786 92.541 7.51172C92.9121 6.79557 93.4004 6.17708 94.0059 5.65625C94.6178 5.12891 95.334 4.70898 96.1543 4.39648C96.9811 4.07747 97.7493 3.91797 98.459 3.91797C99.1751 3.91797 100.074 4.05794 101.154 4.33789C102.242 4.61784 103.039 4.75781 103.547 4.75781C104.055 4.75781 104.527 4.53971 104.963 4.10352ZM89.4648 14.709C89.3216 15.015 89.25 15.3568 89.25 15.7344C89.25 16.112 89.3542 16.4375 89.5625 16.7109C89.7708 16.9779 90.0378 17.1862 90.3633 17.3359C91.0078 17.6289 91.7174 17.7754 92.4922 17.7754C93.2669 17.7754 94.0026 17.668 94.6992 17.4531C95.3958 17.2318 96.0208 16.8867 96.5742 16.418C97.7201 15.4544 98.4362 13.8822 98.7227 11.7012H96.623L97.0137 11.0762L98.791 10.9785C98.8822 10.1517 99.0449 9.46484 99.2793 8.91797C99.5137 8.37109 99.709 7.94792 99.8652 7.64844C100.028 7.34896 100.188 7.08854 100.344 6.86719C100.604 6.48958 100.878 6.13477 101.164 5.80273C100.168 5.38607 99.2174 5.17773 98.3125 5.17773C97.4141 5.17773 96.6523 5.27214 96.0273 5.46094C95.4023 5.64974 94.8392 5.92643 94.3379 6.29102C93.8366 6.64909 93.4395 7.12435 93.1465 7.7168C92.8535 8.30924 92.707 8.98307 92.707 9.73828C92.707 10.4805 92.821 11.0599 93.0488 11.4766C93.14 11.6393 93.2181 11.7793 93.2832 11.8965C93.3483 12.0137 93.4557 12.1471 93.6055 12.2969C93.7617 12.4401 93.8822 12.554 93.9668 12.6387C94.0579 12.7233 94.2044 12.8405 94.4062 12.9902C94.6732 13.179 94.9141 13.3451 95.1289 13.4883C95.3438 13.6315 95.4577 13.7096 95.4707 13.7227C95.4837 13.7292 95.4967 13.7357 95.5098 13.7422L95.2266 14.1035C94.1654 13.5827 93.2507 13.3223 92.4824 13.3223C90.9134 13.3223 89.9076 13.7845 89.4648 14.709ZM105.92 12.3164H107.443L106.672 15.2363C106.548 15.6465 106.486 16.0208 106.486 16.3594C106.486 16.6914 106.545 16.8574 106.662 16.8574C106.779 16.8574 106.939 16.7565 107.141 16.5547C107.349 16.3464 107.525 16.138 107.668 15.9297L107.893 15.6172L108.312 16.0078C108.098 16.4245 107.824 16.8053 107.492 17.1504C106.848 17.821 106.288 18.1562 105.812 18.1562C105.253 18.1562 104.973 17.7233 104.973 16.8574C104.973 16.7142 104.979 16.6068 104.992 16.5352C104.895 16.8672 104.709 17.1602 104.436 17.4141C103.915 17.9089 103.326 18.1562 102.668 18.1562C102.017 18.1562 101.493 17.9349 101.096 17.4922C100.705 17.043 100.51 16.4831 100.51 15.8125C100.51 14.7708 100.848 13.8919 101.525 13.1758C102.202 12.4596 102.997 12.1016 103.908 12.1016C104.364 12.1016 104.742 12.2285 105.041 12.4824C105.34 12.7298 105.536 13.0553 105.627 13.459L105.92 12.3164ZM104.289 12.9414C103.911 12.9414 103.557 13.1009 103.225 13.4199C102.899 13.7324 102.648 14.1133 102.473 14.5625C102.297 15.0052 102.209 15.4382 102.209 15.8613C102.209 16.2845 102.3 16.6263 102.482 16.8867C102.671 17.1471 102.958 17.2773 103.342 17.2773C103.732 17.2773 104.084 17.1016 104.396 16.75C104.989 16.0729 105.285 15.2689 105.285 14.3379C105.285 13.4069 104.953 12.9414 104.289 12.9414ZM110.578 18.1562C110.305 18.1562 110.09 18.0716 109.934 17.9023C109.777 17.7331 109.699 17.502 109.699 17.209C109.699 16.9095 109.774 16.5059 109.924 15.998C110.08 15.4837 110.233 15.0182 110.383 14.6016C110.539 14.1849 110.617 13.9082 110.617 13.7715C110.617 13.6283 110.572 13.5566 110.48 13.5566C110.253 13.5566 109.885 14.0059 109.377 14.9043L108.723 14.5234C109.68 12.9089 110.559 12.1016 111.359 12.1016C111.906 12.1016 112.18 12.4466 112.18 13.1367C112.18 13.3385 112.115 13.6608 111.984 14.1035L111.281 16.1152C111.21 16.304 111.174 16.4766 111.174 16.6328C111.174 16.7826 111.232 16.8574 111.35 16.8574C111.571 16.8574 111.978 16.4473 112.57 15.627L112.98 16.0078C112.629 16.6589 112.209 17.1797 111.721 17.5703C111.239 17.9609 110.858 18.1562 110.578 18.1562ZM113.361 9.2207C113.361 9.48112 113.273 9.71875 113.098 9.93359C112.922 10.1484 112.684 10.2559 112.385 10.2559C112.085 10.2559 111.861 10.168 111.711 9.99219C111.561 9.8099 111.486 9.58203 111.486 9.30859C111.486 9.03516 111.577 8.79427 111.76 8.58594C111.949 8.37109 112.189 8.26367 112.482 8.26367C112.775 8.26367 112.993 8.35807 113.137 8.54688C113.286 8.72917 113.361 8.95378 113.361 9.2207ZM118.928 13.3809C118.68 13.3809 118.387 13.5404 118.049 13.8594C117.71 14.1719 117.382 14.556 117.062 15.0117C116.555 15.7409 116.037 16.5807 115.51 17.5312L115.246 18H113.869C113.869 18 113.97 17.694 114.172 17.082C114.738 15.3893 115.021 14.3867 115.021 14.0742C115.021 13.7552 114.969 13.5957 114.865 13.5957C114.676 13.5957 114.452 13.8203 114.191 14.2695C114.133 14.3737 114.084 14.4583 114.045 14.5234C114.006 14.582 113.96 14.6569 113.908 14.748C113.863 14.8327 113.833 14.8848 113.82 14.9043L113.166 14.5234C113.674 13.6966 114.139 13.0879 114.562 12.6973C114.986 12.3001 115.419 12.1016 115.861 12.1016C116.063 12.1016 116.236 12.1862 116.379 12.3555C116.529 12.5247 116.604 12.7266 116.604 12.9609C116.604 13.1888 116.59 13.3939 116.564 13.5762C116.538 13.752 116.509 13.9147 116.477 14.0645C116.444 14.2142 116.398 14.3932 116.34 14.6016C116.281 14.8099 116.232 14.9694 116.193 15.0801C116.161 15.1908 116.115 15.3405 116.057 15.5293C115.998 15.7181 115.962 15.8288 115.949 15.8613C116.066 15.627 116.265 15.2819 116.545 14.8262C116.825 14.3704 117.007 14.084 117.092 13.9668C117.176 13.8496 117.294 13.6934 117.443 13.498C117.593 13.3027 117.723 13.153 117.834 13.0488C117.951 12.9382 118.088 12.8145 118.244 12.6777C118.407 12.5345 118.56 12.4271 118.703 12.3555C119.068 12.1862 119.419 12.1016 119.758 12.1016C120.096 12.1016 120.367 12.2025 120.568 12.4043C120.777 12.5996 120.881 12.8307 120.881 13.0977C120.881 13.3581 120.796 13.5892 120.627 13.791C120.464 13.9863 120.272 14.084 120.051 14.084C119.836 14.084 119.667 14.0482 119.543 13.9766C119.419 13.8984 119.335 13.8171 119.289 13.7324C119.152 13.498 119.032 13.3809 118.928 13.3809Z"
              fill="#6B7280"
            />
            <defs>
              <clipPath id="clip0_2239_2484">
                <rect
                  width={16}
                  height={16}
                  fill="white"
                  transform="translate(0.5 4)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <div className="react-joyride" />
        </div>
      </div>
      <audio src="https://cdn.mac1j.com/fawk/Music/BlastOff.mp3" loop />
      <audio src="https://cdn.mac1j.com/fawk/Music/cashout.mp3" />
      <canvas
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: "0px",
          left: "0px",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default Home;
