import { useContext } from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router";
import { GamerContext } from "../context/GamerContext";

const Sidebar = () => {
  const { user } = useContext(GamerContext);
  const genres = ["action", "adventure", "open world", "fps"];
  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Sidebar content here */}
        <ul className="menu w-full grow mt-12 gap-10">
          {/* HomePage */}
          <li>
            <Link
              to={"/"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Homepage"
            >
              <FiHome size={20} />
              <span className="is-drawer-close:hidden">Homepage</span>
            </Link>
          </li>
          {user ? (
            <>
              {/* Favorites */}
              <li>
                <Link
                  to={"/favorites"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Favorites"
                >
                  <MdOutlineFavorite size={20} />
                  <span className="is-drawer-close:hidden">Favorites</span>
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
          {/* Categories */}
          {genres.map((genre, key) => (
            <li key={key}>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip={genre}
              >
                <MdOutlineFavorite size={20} />
                <span className="is-drawer-close:hidden">{genre}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
