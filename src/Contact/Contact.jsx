import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Contact() {
  return (
    <>
      {/* Contact Page Header */}
      <div className="pt-24 text-center md:text-left px-6 mt-20">
        <h1 className="text-3xl font-bold">Contact Page</h1>
        <div className="md:flex justify-between items-center mt-5">
          <p className="font-bold">
            Check out our website for a wide range of self-serve solutions. Please call
            <br />
            customer support or use one of these numbers.
          </p>
          <NavLink to={`/home`}>
            <button className="btn border-2 border-black px-5 py-2 mt-4 md:mt-0 bg-white">
              Home
            </button>
          </NavLink>
        </div>
      </div>

      {/* Contact Forms Section */}
      <div>
      <div>
      <div id="contact">
                <h1 className="mt-28 text-6xl font-bold text-yellow-700 text-center -mb-16">
                 <button className="">   Contact With Us</button>
                </h1>
                <div className="pb-20 mx-4 md:mx-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center mt-10 p-10 md:p-20 text-2xl bg-stone-700 bg-cover pt-24 rounded-xl">
                        <h1 className="btn mx-auto mt-8 p-8 pb-14 bg-slate-500 text-yellow-500 text-xl  rounded-xl">
                            Email: rihabbeg3@gmail.com
                        </h1>
                        <h1 className="btn mx-auto mt-8 pb-14 p-8 bg-slate-500 text-yellow-500 text-xl rounded-xl">
                            Cell: 01305662526
                        </h1>
                        <div className="text-center mt-8">
                            <h1 className="btn mx-auto pb-14 p-8 bg-slate-500 text-yellow-500 text-xl rounded-xl">
                                Mymensing, Bangladesh
                            </h1>
                        </div>
                        <div className="flex gap-4 justify-center mt-10 mb-10">
                            <img
                                src="https://img.icons8.com/ios11/512/facebook-new.png"
                                className="w-12"
                                alt="Facebook"
                            />
                            <img
                                src="https://cdn-icons-png.freepik.com/256/15707/15707843.png?semt=ais_hybrid"
                                className="w-12"
                                alt="Instagram"
                            />
                        </div>
                    </div>
                    <div className="mt-28 text-6xl font-serif text-yellow-500  text-center">
                        Thanks For Contact
                    </div>
                </div>
            </div>

        </div>
      </div>

     
    </>
  );
}
