import Button from "./Button";

const Heroe = () => {
  return (
    <div className="flex items-center flex-col gap-[50px]">
      <p className="text-8xl space-y-3 w-full tracking-tighter text-white text-center">
        <span className="block">We're building the</span>{" "}
        <span className="block">foundations for a</span>{" "}
        <span className="block">better future</span>
      </p>
      <Button textColor="text-[#353535]" bgColor="bg-[#fff]" path="/">
        Find Out How
      </Button>
    </div>
  );
};

export default Heroe;
