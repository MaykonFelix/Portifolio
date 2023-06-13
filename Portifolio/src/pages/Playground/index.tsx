import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

export const Playground = () => {
  return (
    <>
      <Link to="/">
        <HomeIcon />
      </Link>
      <div>PlayGround</div>
    </>
  );
};
