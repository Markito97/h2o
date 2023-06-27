import { Button, InputAdornment, TextField } from "@mui/material";
import { ReactComponent as Label } from "../assets/Label.svg";
import { TableInfo } from "../components/Table/TableInfo";
import "./GeneralEmployeesBase.scss";
import { useState } from "react";

const GeneralEmployeesBase = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  return (
    <div className="general-employess">
      <h1 className="general-employess__title">Общая база сотрудников</h1>
      <div className="general-employess__toolbar">
        <div
          style={{
            display: "flex",
            columnGap: "39px",
          }}
        >
          <div className="general-employess__toolbar__count">
            <div>2345</div>
            <div className="general-employess__toolbar__count-helper-text">Контактов</div>
          </div>
          <TextField
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            size="small"
            sx={{
              "& fieldset": { border: "none" },
            }}
            placeholder="Поиск"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    paddingLeft: "22px",
                  }}
                >
                  <Label />
                </InputAdornment>
              ),
              style: {
                borderRadius: "24px",
                background: "#F8F8F8",
              },
            }}
          />
        </div>

        <Button
          variant="outlined"
          sx={{
            borderRadius: "24px",
            textTransform: "none",
            color: "#54d3c2",
            borderColor: "#54d3c2",
          }}
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {isEditMode ? "Сохранить" : "Режим редактирования"}
        </Button>
      </div>
      <TableInfo query={searchQuery} isEdit={isEditMode} />
    </div>
  );
};

export default GeneralEmployeesBase;
