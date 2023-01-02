import React, {useState, useEffect} from "react";

//create your first component
const Home = () => {
       
	const [timer, setTimer] = useState(0);
	const [isRunning, setIsRunning] = useState(true); // nueva variable de estado para indicar si el cronómetro está en funcionamiento o no

	useEffect(() => {
    
		const interval = setInterval(() => {
		  if (isRunning == false) {
		  setTimer((x) => x + 1);
		  }}, 100);
		  console.log(timer)
		  return () => clearInterval(interval); 
	  }, [isRunning]); 


	const reset = () => {
			    setTimer (0)
				setIsRunning(true);
				};		
	
return (
		<div className=" m-5 p-5 container-flex">
			<div className="container-sm d-flex flex-row justify-content-center bg-dark p-5">
				<div className="icon text-white container-flex border border-light alert alert-dark">
				<i class="fa-solid fa-clock"></i></div>
				
				<div className="digit text-white p-5 fs-1 border border-light">{Math.floor(timer/100000)%10}</div>
				<div className="digit text-white p-5 fs-1 border border-light">{Math.floor(timer/10000)%10}</div>
				<div className="digit text-white p-5 fs-1 border border-light">{Math.floor(timer/1000)%10}</div>
				<div className="digit text-white p-5 fs-1 border border-light">{Math.floor(timer/100)%10}</div>
				<div className="digit text-white p-5 fs-1 border border-light">{Math.floor(timer/10)%10}</div>
				<div className="digit text-white p-5 fs-1 border border-light">{Math.floor(timer/1)%10}</div>
		
			</div>
			<div class="d-grid gap-2 m-5">
			
			<button className={`btn ${isRunning ? "bg-primary" : "bg-danger"} btn-lg`} onClick={() =>setIsRunning(!isRunning)}>{isRunning ? "Start" : "Stop"}</button>
            <button className="btn btn-success btn-lg" onClick={reset}>Reset</button>
			
			</div>
		
		</div>
	);
};


export default Home;
