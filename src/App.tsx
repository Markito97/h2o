import { RoutesProvider } from "./routes/router";
import "./App.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesProvider />
    </ThemeProvider>
  );
}

export default App;
