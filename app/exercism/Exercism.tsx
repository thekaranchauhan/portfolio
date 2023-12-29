import ExercsimGrid from "./ExercismGrid";

const Exercism = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
      id="exercsim"
    >
      <ExercsimGrid />
    </section>
  );
};

export default Exercism;