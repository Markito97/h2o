import UserImg from "../../assets/image 1.png";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import "./UserProfile.scss";
import { IconButton } from "@mui/material";

export const UserProfile = () => {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__img">
          <img src={UserImg} alt="" />
        </div>
        <div className="profile__content">
          <div className="profile__name">Кристина 🐰</div>
          <div className="profile__post">менеджер продаж</div>
        </div>
      </div>
      <IconButton>
        <ArrowDown />
      </IconButton>
    </div>
  );
};
