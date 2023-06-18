import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

import HomeIcon from "@mui/icons-material/Home";

export const Playground = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "danger",
        }}
      >
        <Link to="/">
          <HomeIcon />
        </Link>
        <div>PlayGround</div>
      </Box>
    </>
  );
};
