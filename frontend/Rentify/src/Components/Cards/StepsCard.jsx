

export default function StepsCard({ number }) {
  let h5Text = [
    "Capture High-Quality Photos ",
    "Create a Listing ",
    "Connect with Potential Renters ",
    "Secure Your Deal Using Rentify ",
  ];

     let subtext = [
       "Begin by taking clear and enticing photos of your product. Showcase its features and quality.",
       "Craft a detailed and appealing product listing. Highlight the key selling points and benefits.",
       "Interact with potential renters and answer their questions promptly. Establish trust and transparency.",
       "Finalize the rental agreement, payment terms, and security approach.",
     ];
  
  

  return (
    <div
      className={`max-w-sm max-h-sm border-4 border-theme rounded-lg shadow m-7 viewport${number} overflow-hidden flex justify-center items-center`}
    >
      <div
        className="background-image  sm:w-[50vh] lg:w-[50vw] sm:h-[30vh] lg:h-[20vw] bg-center bg-cover transition-background-position duration-300 ease-in-out"
        style={{ backgroundImage: `url(../../src/assets/photo${number}.jpg)` }}
      ></div>
      <div className="absolute max-w-sm p-5 ">
        <h5 className="relative mb-2 sm:text-[4vw] lg:text-[3vh] font-bold tracking-tight text-[burlywood] top-[-30px] text-center">
          {h5Text[number]}
        </h5>

        <p className="mb-3 font-normal sm:text-[2.1vw] lg:text-[2vh] text-[cadetblue]  p-4">
        
          {subtext[number]}
        </p>
      </div>
    </div>
  );
}
