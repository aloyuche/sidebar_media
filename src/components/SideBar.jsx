import {
  BsFillCameraReelsFill,
  BsMusicNoteList,
  BsLayerBackward,
} from "react-icons/bs";
import { FaBars, FaTh } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "dashboard",
      icons: <FaTh />,
    },
    {
      path: "/christianmuz",
      name: "ChristianMuz",
      icons: <BsMusicNoteList />,
    },
    {
      path: "/jazmuz",
      name: "JazMuz",
      icons: <BsFillCameraReelsFill />,
    },
    {
      path: "/raggae",
      name: "Raggae",
      icons: <BsLayerBackward />,
    },
  ];
  return (
    <div className="flex bg-gray-500">
      <div className="sidebar">
        <div className="top-session">
          <h1 className="logo">CHELOYTEC</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icons">{item.icons}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main className="w-full p-3">{children}</main>
    </div>
  );
};

export default SideBar;
