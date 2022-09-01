import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@mui/icons-material";

const Sidebar = ({ toggle, links, showMenu }) => {
   return (
      <>
         <Box
            sx={{ display: { sm: "none" } }}
            className={`sidebar ${showMenu === true ? "active" : ""}`}
         >
            <div className="close" onClick={toggle}>
               <CloseOutlined />
            </div>
            <ul className="sidebar_links">
               {links.map(link => (
                  <li key={link.id} onClick={toggle}>
                     <Link to={link.path}>{link.name}</Link>
                  </li>
               ))}
            </ul>
         </Box>
         <Box
            sx={{ display: { sm: "none" } }}
            className={`overlay ${showMenu === true ? "active" : ""}`}
            onClick={toggle}
         />
      </>
   );
};

export default Sidebar;
