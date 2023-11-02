import imageSrc from "../assets/pexels-william-fortunato-6140469.jpg";
export default function Main() {
  return (
    <div
      id="heropg"
      className="relative flex justify-center items-baseline mt-0 h-[calc(100vh-8vh)] bg-cover bg-center aspect-w-16 aspect-h-9"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <h1
        id="mainTitle"
        className="absolute font-champ top-32 sm:text-[3.5vh] lg:text-[3.5vw] text-header_color z-10"
      >
        Renting has never been easier!
      </h1>
    </div>
  );
}
