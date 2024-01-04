import Button from "./Button";

const Heroe = () => {
  return (
    <div className="flex items-center flex-col gap-[50px] mb-5">
      <p className="text-4xl md:text-5xl xl:text-8xl lg:text-5xl max-w-[50%] w-auto tracking-tighter text-white text-center">
        We're building the foundations for a better future
      </p>
      <Button textColor="text-[#353535] mb-[70px]" bgColor="bg-[#fff]" path="/">
        Find Out How
      </Button>
      <img
        className="max-w-400"
        src="src/assets/Manner_Hero_Web_3-1 1 (1).png"
        alt=""
      />
      <p className="max-w-[50%] font-light text-4xl w-auto text-center ">
        Across the ‘Living’ sectors, we create exceptional places, designed to
        enrich the living experiences for people, today, tomorrow and for
        generations to come.
      </p>
      <Button textColor="text-black" bgColor="bg-white" path="/about">More About Banner</Button>
    </div>
  );
};

export default Heroe;
