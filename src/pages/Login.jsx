import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Login = ({ setIsAuth }) => {
   let navigate = useNavigate();

   const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then(result => {
         localStorage.setItem("isAuth", true);
         setIsAuth(true);
         navigate("/");
      });
   };

   return (
      <Box
         className="login"
         sx={{
            width: { sm: "400px" },
            m: { xs: "50px", sm: "50px auto" },
         }}
      >
         <Typography component="p" fontSize="16px">
            Sign In With Google to Continue
         </Typography>
         <button className="login-btn" onClick={signInWithGoogle}>
            Sign In With Google
         </button>
      </Box>
   );
};

export default Login;
