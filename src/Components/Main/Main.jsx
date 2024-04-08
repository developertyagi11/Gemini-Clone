import React, { useContext } from "react";
import { Mycontext } from "../../Context/Mycontext";

const Main = () => {
  const context=useContext(Mycontext);
  const {onsent,recentprompt,showresult,resultdata,setinput,input,loading}=context;
  return (
    <div className="main flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="nav flex items-center justify-between p-5 text-[3vh] text-[#585858]">
        <p>Gemini</p>
        <img
          width={40}
          className="rounded-full"
          src="images\user_icon.png"
          alt="user_icon"
        />
      </div>
      <div className="main-container  max-w-[123vh] mx-auto">

        {!showresult?(<>
          <div className="greet my-[7vh] text-[56px] text-[#c4c7c5] font-medium p-5">
          <p className=" bg-gradient-to-br from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent" >Hello,Chirag</p>
          <p>How Can I Help You Today?</p>
        </div>
        <div className="cards  grid grid-cols-16 gap-4 p-5">
          <div className="card p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea] ">
            <p className=" text-[#585858] text-[17px]">
              Suggest Some Beautifull Place To See On An Upcomming Road Trip
            </p>
            <img className=" w-9 bg-white rounded-3xl p-2 absolute bottom-5 right-2"  src="images\compass_icon.png" alt="compass_image" />
          </div>
          <div className="card hover:bg-[#dfe4ea] p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer ">
            <p className=" text-[#585858] text-[17px]">
              Briefly Summarize This Concept : urban planing
            </p>
            <img  className=" w-9 bg-white rounded-3xl p-2 absolute bottom-5 right-2" src="images\bulb_icon.png" alt="bulb_image" />
          </div>
          <div className="card hover:bg-[#dfe4ea] p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer">
            <p className=" text-[#585858] text-[17px]">
              Brainstrom Team Bonding Activity For Our Work Retreat
            </p>
            <img className=" w-9 bg-white rounded-3xl p-2 absolute bottom-5 right-2"  src="images\message_icon.png" alt="message_image" />
          </div>
          <div className="card hover:bg-[#dfe4ea] p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer">
            <p className=" text-[#585858] text-[17px]" >
              Improve The Readibility Of Follwing Code
            </p>
            <img className=" w-9 bg-white rounded-3xl p-2 absolute bottom-5 right-2"  src="images\code_icon.png" alt="code_image" />
          </div>
        </div>
        </>):(<div className="result px-[5%] max-h-[75vh] overflow-y-scroll no-scrollbar">
          <div className="result-title py-[40px] flex items-center gap-[20px]">
            <img className=" w-10 rounded-3xl" src="images\user_icon.png" alt="user_icon" />
            <p>{recentprompt}</p>
          </div>
          <div className="result-data text-[17px] font-light snap-none flex items-start gap-5 ">
            <img width={50} src="images\gemini_icon.png" alt="gemini_icons" />
            { loading ?
            (<div className="loader w-full flex flex-col gap-3">
              <hr className="  animate-flow rounded-sm border-none  bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] to-[#ffffff] h-4" />
              <hr className=" animate-flow rounded-sm border-none  bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] to-[#ffffff] h-4" />
              <hr className=" animate-flow rounded-sm border-none  bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] to-[#ffffff] h-4" />
            </div>):
            (<p dangerouslySetInnerHTML={{__html:resultdata}}></p>) }
            

          </div>
        </div>)}
       
        <div className="main-bottom absolute bottom-0 w-full max-w-[900px] px-[20px] mx-auto">
            <div className="search-box flex justify-between items-center gap-5 p-3 bg-[#f0f4f9] px-[20px] py-[10px] rounded-3xl">
                <input value={input} onChange={(e)=>{setinput(e.target.value)}} className="flex bg-transparent border-none outline-none text-[18px]" type="text" placeholder="enter your prompt here" />
                <div className=" flex items-center gap-4">
                    <img  className="w-[24px] cursor-pointer" src="images\gallery_icon.png" alt="gallery_icon" />
                    <img className="w-[24px] cursor-pointer" src="images\mic_icon.png" alt="mic_icon" />
                    {input?(<img onClick={()=>(onsent())} className="w-[24px] cursor-pointer" src="images\send_icon.png" alt="send_icon" />):""}
                    
                </div>
            </div>
            <p className="buttom-info text-[13px] text-center my-[15px]  font-light ">
                gemini may display inaccurate info, including abou people so , so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
