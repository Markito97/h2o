import { Box, styled } from "@mui/material";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <MainWrapper component="main">
        <Navbar />
        <div style={{ height: "calc(100vh - 175px)" }}>
          <Outlet />
        </div>
      </MainWrapper>
    </Box>
  );
};

const MainWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  zIndex: 1000,
  marginLeft: "127px",
  background: "white",
  height: "100vh",
  borderRadius: "56px",
  width: "calc(100vw - 267px)",
}));
