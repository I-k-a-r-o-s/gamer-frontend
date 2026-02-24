import GameCard from "../components/GameCard";

const Home = () => {
  const gamesNumbers = [1, 2, 3, 4, 5];
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gamesNumbers.map((number) => (
            <GameCard key={number} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
