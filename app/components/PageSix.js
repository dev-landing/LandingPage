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
      <div className="flex justify-center gap-12 phone:gap-4 bg-inactive w-full h-36 phone:h-40 py-4 mt-20">
        <Image src="./genius_is_common.svg" alt="Genius Is Common" width={130} height={130}/>
        <p className="w-[45%] pt-8 phone:pt-0 phone:text-sm"><span className="font-semibold ">&quot;The Genius is Common Movement</span> is about tearing down the Berlin Wall of the word genius.&quot;<span className="font-semibold">Be inspired - Be engaged - Be empowered...</span></p>
      </div>

    {/* Submit Form */}
    <div className="border-4 shadow-custom p-6 rounded-tr-lg rounded-bl-lg rounded-br-lg w-[50%] phone:w-[90%] mt-10 ml-20 phone:ml-0">
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

      <h3 className="mt-3">By subscribing you agree to the <span className="text-cyan-500 hover:cursor-pointer">terms of use</span> and <span className="text-cyan-500 hover:cursor-pointer">privacy policy</span>.</h3>
    </div>
  </div>
);
};

export default PageSix;