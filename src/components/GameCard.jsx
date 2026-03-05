import { useContext, useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";

const GameCard = () => {
  const [favorite, setFavorite] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
      <div className="card-body">
        <h2 className="card-title">
          Card Title          
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">  
          {user && (
            <button
              className="btn btn-circle"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? (
                <MdOutlineFavorite size={20} />
              ) : (
                <MdFavoriteBorder size={20} />
              )}
            </button>
          )}      
        </div>
      </div>
    </div>
  );
};
export default GameCard;
