import React from "react";

const Globe = () => {
  // this page is dedicated to channels section

  return (
    <>
    
      <div className="hidden sm:flex flex-col items-center justify-center text-center p-10" style={{ background: 'linear-gradient(to top, #ff4500, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))' }} >
        <div className="flex flex-col items-center justify-center text-center lg:text-7xl text-2xl text-black mt-20 font-extrabold">
          Our Channels
        </div>
        <div>
          <img src="./channels.png" alt="channels" className="w-8/12 flex mx-auto mt-10" />
        </div>
        <div className="relative flex flex-col items-center justify-center text-center mt-52 text-black m-10">
          <img src="./earth.png" alt="earth" className="  w-1/2" />
          <div className="absolute left-[8%] bottom-[60%]" >
            <img src="./UAE-flag.jpeg"    className="sm:w-[100px] w-9 " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-9 font-bold text-sm" >U.A.E</h1>
          </div>

          <div className="absolute left-[10%] bottom-[85%] sm:left-[20%] sm:bottom-[90%]" >
            <img src="./american-flag.png"    className="sm:w-[100px] w-9  " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-9 font-bold text-sm" >U.S.A</h1>
          </div>

          <div className="absolute left-[40%] sm:left-[47%] bottom-[105%]" >
            <img src="./indian-flag.jpeg"   className="sm:w-[100px] w-9 " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-9  font-bold text-sm " >INDIA</h1>
          </div>

          <div className="absolute right-[10%] bottom-[85%] sm:right-[20%] sm:bottom-[90%]" >
            <img src="./uk-image.jpeg"    className="sm:w-[100px] w-10  " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-10  font-bold text-sm " >U.K</h1>
          </div>

          <div className="absolute right-[10%] bottom-[60%] text-center" >
            <img src="./australia-flag.jpeg"    className="sm:w-[100px] w-10 " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-10  font-bold text-xs sm:text-sm " >AUSTRALIA</h1>
          </div>
          
          <p className="mt-20 text-3xl sm:text-5xl lg:text-8xl sm:font-extrabold mb-6 font-bold sm:absolute sm:bottom-10 sm:mt-0">
            Amazon Global SPN certified
          </p>


          <p className=" text-lg lg:text-2xl text-white relative top-10 ">
            At Socially Powerful, we have built a{" "}
            <span className="text-black">global social</span> marketing
            <span className="text-black"> agency</span>. Our social excels in
            social marketing campaigns across, influencer marketing, paid social
            and startegy, that engage global audiences.
          </p>
        </div>
        
      </div>
      <div className="flex mt-10 pb-4" >
        <button className="bg-black text-white px-10 py-2 mx-auto" >LEARN MORE</button>
      </div>

      <div className="sm:hidden" style={{ background: 'linear-gradient(to top, #ff4500, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))' }}>

        <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center text-center lg:text-7xl text-2xl text-black mt-20 font-extrabold">
          Our Channels
        </div>
        <div>
          <img src="./channels.png" className="w-8/12 flex mx-auto mt-10" />
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-10 text-black m-10">
          <img src="./earth.png" className="w-96" />
          <div className="flex flex-row m-10 gap-10 justify-around">
            <img src="./UAE-flag.jpeg" className="w-9 lg:w-24" alt="UAE flag" />
            <img src="./american-flag.png" className="w-9 lg:w-24" />
            <img src="./indian-flag.jpeg" className="w-9 lg:w-24" />
            <img src="./uk-image.jpeg" className="w-9 lg:w-24" />
            <img src="./australia-flag.jpeg" className="w-9 lg:w-24" />
          </div>
          <p className=" text-3xl lg:text-4xl mb-6 font-bold ">
            Amazon Global SPN certified
          </p>

          <p className=" text-lg lg:text-2xl">
            At Socially Powerful, we have built a{" "}
            <span className="text-orange-400">global social</span> marketing
            <span className="text-orange-400"> agency</span>. Our social excels in
            social marketing campaigns across, influencer marketing, paid social
            and startegy, that engage global audiences.
          </p>
        </div>
        <button className="bg-black w-[210px] text-xl lg:mr-10 font-medium py-3 text-white hover:scale-105 duration-300 ease-in-out bg-opacity-80 mt-16">
          Read More
        </button>
      </div>

      </div>
      
      
    </>
  );
};

export default Globe;
