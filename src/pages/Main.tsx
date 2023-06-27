import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Добро пожаловать</h1>
      <Button onClick={() => navigate("/general_employees_base")}>
        Перейти на вкладку с таблицей
      </Button>
    </Box>
  );
};

export default Main;
