import { useEffect, useState } from "react";
import Card from "./components/Card";


function App() {
  const [advice, setAdvice] = useState({})
  const [role, setRole] = useState(false)
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchdata = async ()=>{
    await fetch('https://api.adviceslip.com/advice').then(res => res.json())
    .then(data => setAdvice(data))
    if(advice === null){
      setisLoading(true)
    }else{
      setisLoading(false)
    }
    }
    fetchdata()
    
  }, [role])
  
  return (
    
    <div className="h-screen w-full p-4 bg-[#202632] flex justify-center items-center">
      {console.log(advice)}
      { !isLoading && <Card advice={advice} roldeDice={setRole} role={role} />}
    </div>
  );
}

export default App;
