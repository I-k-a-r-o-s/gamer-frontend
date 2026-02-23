import GameCard from "../components/GameCard";

const Hero = () => {
  const gamesNumbers = [1, 2, 3, 4, 5];
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 m-4">
        {gamesNumbers.map((number) => (
          <GameCard key={number} />
        ))}
      </div>
    </div>
  );
};
export default Hero;
