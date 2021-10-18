import Search from "./Search";
import "./sidebar.scss";
import Trending from "./Trending";

const Sidebar = () => (
  <aside className="sidebar">
    <Search />
    <Trending />
  </aside>
);

export default Sidebar;
