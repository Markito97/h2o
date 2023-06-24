import { Box, styled } from "@mui/material";
import { ReactComponent as H2O } from "../../assets/H2O.svg";
import { ReactComponent as Calender } from "../../assets/Calendar.svg";
import { ReactComponent as Questionnaires } from "../../assets/Questionnaires.svg";
import { ReactComponent as GeneralEmployees } from "../../assets/GeneralEmployees.svg";
import { ReactComponent as Employees } from "../../assets/Employees.svg";
import { ReactComponent as Analytics } from "../../assets/Analytics.svg";
import { ReactComponent as Graphs } from "../../assets/Graphs.svg";
import { ReactComponent as Settings } from "../../assets/Settings.svg";

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Box
        sx={{
          maxWidth: "127px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <H2O />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "42px",
            pt: "84px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Calender />
          <Questionnaires />
          <GeneralEmployees />
          <Employees />
          <Analytics />
          <Graphs />
          <Settings />
        </Box>
      </Box>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "267px",
  height: "100%",
  background: "linear-gradient(#54D3C2, #30898A)",
  borderTopLeftRadius: "56px",
  borderBottomLeftRadius: "56px",
  display: "flex",
  flexDirection: "column",
  paddingTop: "55px",
}));
