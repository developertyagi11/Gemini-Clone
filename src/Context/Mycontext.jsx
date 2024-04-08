import { createContext, useState } from "react";
import runChat from "../Config/gemini";



export const Mycontext = createContext();

export function MycontextProvider({ children }) {
  const [input, setinput] = useState("");
  const [recentprompt, setrecentprompt] = useState("");
  const [previousprompt, setpreviousprompt] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");

  const onsent = async (prompt) => {
    setresultdata("")
    setloading(true) 
    setshowresult(true)
    let response;
    if (prompt !== undefined) {
      response=await runChat(prompt);
      setrecentprompt(prompt)
    }else{
      setpreviousprompt(prev=>[...prev,input])
      setrecentprompt(input)
      response=await runChat(input)
    }
  
  let responsearray=response.split("**");
  let newresponse;
  for (let i = 0; i < responsearray.length; i++) {
    if (i === 0 || i%2 !==1) {
      newresponse +=responsearray[i]
    }else{
      newresponse+="<b>"+responsearray[i]+"</b>";
    }
  }
  let newresponse2=newresponse.split("*").join("</br>");
  
  let newsResponseArray=newresponse2.split(" ");


  for (let i = 0; i < newsResponseArray.length; i++) {
    const nextword=newsResponseArray[i];
    delaypara(i,nextword+" ")
    
  }
  setloading(false)
  setinput("")
  };


  const delaypara=(index,nextword)=>{

    setTimeout(() => {
      setresultdata(prev=>prev+nextword);
    }, 75*index);
  };

  const newchat=()=>{
    setloading(false);
    setshowresult(false)
  }

  const values = {
    input,
    setinput,
    recentprompt,
    setrecentprompt,
    previousprompt,
    setpreviousprompt,
    showresult,
    setshowresult,
    loading,
    setloading,
    resultdata,
    setresultdata,
    onsent,
    newchat
  };

  return <Mycontext.Provider value={values}>{children}</Mycontext.Provider>;
}
