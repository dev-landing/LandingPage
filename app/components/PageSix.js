import Image from "next/image";

const PageSix = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#000041' 
    }}>
      {/* Gray banner */}
      <div className="flex justify-center gap-12 sm:gap-4 bg-inactive w-full h-36 sm:h-40 py-4 mt-20">
        <Image src="./genius_is_common.svg" alt="Genius Is Common" width={130} height={130}/>
        <p className="w-[45%] pt-8 sm:pt-0 sm:text-sm"><span className="font-semibold ">&quot;The Genius is Common Movement</span> is about tearing down the Berlin Wall of the word genius.&quot;<span className="font-semibold">Be inspired - Be engaged - Be empowered...</span></p>
      </div>

    {/* Submit Form */}

    <div className="flex flex-row items-center justify-center mt-48">
      
      <h1 className="text-6xl overflow-hidden font-bold">Be <span style={{background: "-webkit-linear-gradient(360deg, orange, blue)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>first</span> to hear about our drops <span className="text-sky-600 text-8xl">.</span></h1>


      <div className="border-4 shadow-custom p-6 rounded-tr-lg rounded-bl-lg rounded-br-lg w-[50%] sm:w-[90%] mt-10 ml-20 sm:ml-0">
        <h2 className="text-lg font-semibold mb-4">Join our email list to get updates</h2>
        <form>
          
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>

          <div className="mb-4 flex justify-between items-center">
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="flex justify-end mt-auto">
            <button type="submit" className="button-custom font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Subscribe
            </button>
          </div>
        </form>
        <h4 className="mt-4">By subscribing you are agreeing to the <span className="text-cyan-500">terms of use</span> and <span className="text-cyan-500">privacy policy</span></h4>
      </div>

    </div>
    
  </div>
);
};

export default PageSix;