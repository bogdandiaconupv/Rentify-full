import StepsCard from "./Cards/StepsCard";

export default function Steps() {
  return (
    <div
      id="moneypg"
      className="relative flex flex-wrap justify-center place-items-center mt-0 h-[calc(100vh-8vh)]  overflow-y-auto"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <StepsCard key={index} number={index} className="my-4" />
      ))}
    </div>
  );
}
