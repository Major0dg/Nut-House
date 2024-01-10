import image from "../src/assets/photo.png";

function App() {
  return (
    <div className="bg-gradient-to-bl from-cyan-300 via-transparent to-transparent w-screen h-screen bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        {/* nav */}
        <div className="flex justify-between p-6 py-10">
          {/* logo */}
          <h3 className="text-[20px] font-bold">Nut Heads</h3>

          {/* links */}
          <ul className="hidden md:flex space-x-10 text-[14px] font-normal">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Support</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="p-6 flex flex-col md:flex-row justify-between items-center py-8 md:py-40 text-[24px] font-semibold font-mono">
          {/* left */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <p className=" text-red-600"> Hello, Welcome To "Hut Head!" </p>
            <h1 className="text-black font-extrabold font-mono text-[24px] md:text-[40px] mb-4">
              Begin Your Coding Adventure with "Hello World" <br />
            </h1>
            <p className="text-[18px] font-normal">
              Learn the Basics of Programming in a Friendly Environment
            </p>
            <br />
            <button className="bg-green-400 text-[14px] font-bold px-5 py-3 rounded-md">
              Let's Get Started
            </button>{" "}
            {""}
            <button className="bg-slate-50 text-[14px] font-bold px-5 py-3 rounded-md border-2 border-green-600 mt-4 md:mt-0 md:ml-4">
              Community
            </button>
          </div>

          {/* right */}
          <div className="text-center md:text-right">
            <img src={image} alt="image" className="mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
