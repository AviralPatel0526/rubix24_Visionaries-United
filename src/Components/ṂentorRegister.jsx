import Navbar from "./Navbar";
// import { useState } from "react";
import SignInclipart from "../assets/Mentor.png"
import line from "../assets/line.png"
import Google from "../assets/googleLogo.svg"
function MentorRegister() {
    
    
    return (
        < >
            <Navbar/>
            
            <div className="bg-primary h-[87vh] w-[100%] flex justify-around font-playfair">
            <div className="bg-primary h-[87.9vh] w-[100%] flex justify-around font-playfair">
                <div className="w-[50vw] h-[100%] lg:flex hidden">
                {/* <img className="drop-shadow-2xl w-[90%] relative left-16 bottom-16" src={SignInclipart} alt="" /> */}
                <img className="drop-shadow-2xl w-[90%] h-[80%] relative  " src={SignInclipart} alt="" />

                </div>
                <div className="lg:w-[50vw] md:w-[60vw] sm:w-[75vw] w-[95vw] flex flex-col lg:justify-start pt-2 lg:items-start items-center justify-center">
                <div className="text-white text-[25px] pl-[8vw] " > Create a Mentor Account </div>
                    <div className="rounded-[35px] bg-tertiary sm:w-[70%] w-[100%] h-[68vh] flex flex-col gap-1 p-8">
                    <div className="">                            
                        <div className="pl-1 pb-2">Name</div>
                        <input className="rounded-lg h-[45px] w-[100%]" type="text" name="name"  />
                        </div>

                        <div className="">                            
                        <div className="pl-1 pb-2">Email</div>
                        <input className="rounded-lg h-[45px] w-[100%]" type="text" name="email"  />
                        </div>
                        
                        <div>
                        <div className="pl-1 pb-2">Password</div>
                        <input className="h-[45px] w-[100%]  rounded-lg " type="text" name="password"  />
                        </div>
                        <button  className="drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] px-4 py-3 w-[120px] bg-secondary text-white  rounded-3xl  self-center mt-4" >
                           Register
                        </button>
                        <img className=" drop-shadow-2xl " src={line} alt="" />
                        <button className=" flex justify-center gap-4 rounded-3xl border-[2px] border-black items-center bg-white drop-shadow-2xl w-[80%] self-center p-2" >
                            <img className="h-[32px]" src={Google} alt="Google" />
                            <p className="">Register with Google</p>
                        </button>
                    </div>
                    <div className=" w-[80%] flex flex-col items-center lg:pr-12 gap-1 pt-2">
                        <div className="text-white  text-[24px] ">Already Have Account ?</div>
                        
                        <a href="/SignIn">
                            <button className=" flex    border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-3xl border-[2px] px-3 py-2 text-white " >
                                <p className=" pr-4 pl-4 ">SignIn</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default  MentorRegister