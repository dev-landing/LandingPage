
import Image from "next/image";

const PageFour = () => {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh', 
    }}>
      <div className="flex justify-between w-[95%] gap-20">
        <Image src="blogs.svg" alt="Meet the Artist" width={500} height={500} />
        <div className="flex flex-col justify-center items-end text-end">
          <p className="text-highlight text-4xl font-semibold">3BX is a Marketing Tool</p>
          <p>Our groundbreaking platform empowers indie creators to invest in creating the most innovative content for audiences to enjoy. We help you break the mold, without breaking the bank.</p>
          <p>Discover the latest in indie creator marketing.</p>
          <button className="button-orange mt-4">Learn more</button>
        </div>
        
      </div>
    </div>
  );
};

export default PageFour;