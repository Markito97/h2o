import { Box, styled } from "@mui/material";
import { Sidebar } from "./Sidebar/Sidebar";
import { Navbar } from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <MainWrapper component="main">
        <Navbar />
        <Outlet />
      </MainWrapper>
    </Box>
  );
};

const MainWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  bgcolor: "background.default",
  p: 3,
  marginLeft: "127px",
  background: "white",
  zIndex: 2000,
  height: "100vh",
  borderTopLeftRadius: "56px",
  width: "100%",
}));
