import SecurityCard from "./Cards/SecurityCard";

export default function Security() {
  return (
    <div
      id="securitypg"
      className="relative flex justify-center items-baseline mt-0 h-[calc(100vh-8vh)] bg-cover bg-center aspect-w-16 aspect-h-9 bg-theme border-t-[5px] border-b-[5px] border-text_color1 overflow-scroll"
    >
      <h1
        id="securityTitle"
        className="absolute font-champ top-16 sm:text-[3vh] lg:text-[3vw] z-10 text-header_color"
      >
        Security Systems
      </h1>
      <SecurityCard />

    </div>
  );
}
