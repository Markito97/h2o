import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/general_employees_base")}
      >
        Перейти на вкладку с таблицей
      </Button>
    </Box>
  );
};

export default Settings;
