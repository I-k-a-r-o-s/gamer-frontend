import GameCard from "../components/GameCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const gamesNumbers = [1, 2, 3, 4, 5];
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 m-4">
            {gamesNumbers.map((number) => (
              <GameCard key={number} />
            ))}
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};
export default Home;
