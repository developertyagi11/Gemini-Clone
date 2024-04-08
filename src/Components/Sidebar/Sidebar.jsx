import React, { useContext, useState } from 'react';
import { Mycontext } from '../../Context/Mycontext';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const {onsent, previousprompt,setrecentprompt,newchat}=useContext(Mycontext);

    const openNav = () => {
      setIsOpen(!isOpen);
    };
    const loadprompt=async(prompt)=>{
        setrecentprompt(prompt)
       await onsent(prompt);
    }
  return (
    <div className='min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] px-[20px] py-[15px]'>
        <div className='top'>
            <img onClick={openNav} className='menu block ml-3 cursor-pointer' width={25} src='images\menu_icon.png' alt='menu_icon'/>
            <div onClick={()=>newchat()} className='newchat inline-flex mt-3 items-center gap-3 px-[12px] py-[13px] bg-[#e6eaf1] rounded-3xl text-[14px] text-gray-500 cursor-pointer'> 
                <img width={20}  src='images\plus_icon.png' alt='plus_icon'/>
                {isOpen?(<p>New Chat</p>):""}
            </div>
            {isOpen?(<div className=' recent flex flex-col '>
                <p className='recent-title  mt-7 mb-5'>Recent</p>
                { previousprompt.map((item,index)=>{
                    return(
                        <div onClick={()=>(loadprompt(item))} className='recent-entry flex items-start gap-3 p-[10px] pr-[40px] rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                    <img width={25} src='images\message_icon.png' alt='message_icon'/>
                    <p>{item.slice(0,18)}...</p>
                </div>
                    )
                })}
                
            </div>):""}
        </div>
        <div className='bottom flex flex-col'>
            <div className='bottom-item recent-entry  flex  items-center gap-3 p-[10px] pr-[40px] rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img width={25} src='images\question_icon.png'alt='question_icon'/>
                {isOpen?(<p >Help</p>):""}
            </div>
            <div className='bottom-item recent-entry  flex items-center gap-3 p-[10px] pr-[40px] rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img width={25} src='images\history_icon.png'alt='history_icon'/>
                {isOpen?(<p>Activity</p>):""}
            </div>
            <div className='bottom-item recent-entry  flex items-center  gap-3 p-[10px] pr-[40px] rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img width={25} src='images\setting_icon.png'alt='setting_icon'/>
                {isOpen?(<p>Setting</p>):""}
            </div>
        </div>
    </div>
  )
}

export default Sidebar;