import { Button, Typography } from "@mui/material";
import Link from "next/link";
import Links from "./LinksData.json";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        {Links.map((items) => {
          return (
            <li key={items.id} tabIndex={items.id}>
              <Link href={items.path} className="p-1 font-boldtracking-tighter">
                {items.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
