import { Box } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

const Sidebar = ({ toggle, links, showMenu }) => {
   return (
      <Box className={`sidebar ${showMenu === true ? "active" : ""}`}>
         <div className="sidebar_close" onClick={toggle}>
            <CloseOutlined />
         </div>
         <ul className="sidebar_links">
            {links.map(link => (
               <li key={link.id} onClick={toggle}>
                  <a href={link.path}>{link.name}</a>
               </li>
            ))}
         </ul>
      </Box>
   );
};

export default Sidebar;
