import { Box, IconButton, styled } from "@mui/material";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../../assets/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/ArrowRight.svg";

import "./Navbar.scss";
import { UserProfile } from "../UserProfile/UserProfile";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__actions">
        <ScrollBtn>
          <ArrowLeft />
        </ScrollBtn>
        <ScrollBtn>
          <ArrowRight />
        </ScrollBtn>
      </div>
      <ul className="nav__menu">
        {links.map((link) => (
          <li key={link.path} className="nav__menu__item">
            <Link className="nav__menu__link" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <UserProfile />
    </nav>
  );
};

const links = [
  {
    path: "calendar",
    name: "Календарь сотрудников",
  },
  { path: "questionnaires", name: "База анкет сотрудников" },
  { path: "general_employees_base", name: "Общая база сотрудников" },
  { path: "employees_base", name: "База сотрудников" },
  { path: "analytics", name: "Аналитка" },
  { path: "graphs", name: "Графики" },
];

const ScrollBtn = styled(IconButton)(({ theme }) => ({
  width: "40px",
  height: "40px",
  boxShadow: "0px 4px 18px 0px rgba(210, 209, 209, 0.50)",
}));
