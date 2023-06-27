import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  FormControl,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
  Typography,
  styled,
} from "@mui/material";
import "./Table.scss";
import { data } from "../../store/mockdata";
import { useMemo, useState } from "react";

import { ReactComponent as PrevPag } from "../../assets/PrevPagination.svg";
import { ReactComponent as NextPag } from "../../assets/NextPagination.svg";

interface TableInfoProps {
  query: string;
  isEdit: boolean;
}

interface CurrentEdit {
  id: string;
  property: string;
}

export const TableInfo: FC<TableInfoProps> = ({ query, isEdit }): JSX.Element => {
  const [isCurrentEdit, setIsCurrentEdit] = useState<CurrentEdit | null>(null);
  const [tableData, setTableData] = useState(data);
  const [dataPage, setDataPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(8);

  const onDataPageChange = (event: React.ChangeEvent<unknown>, page: number) =>
    setDataPage(page - 1);

  const handleChange = (event: SelectChangeEvent) => {
    setRowsPerPage(Number(event.target.value));
  };

  const filterData = useMemo(() => {
    if (query) return tableData.filter((el) => el.name.includes(query));
    return tableData;
  }, [query, tableData]);

  const handleInput = (event: React.FocusEvent<HTMLTableCellElement>): void => {
    if (!isEdit || !isCurrentEdit) return;
    const updatedValue = tableData.map((item) => {
      if (item.id === isCurrentEdit.id) {
        const prop = isCurrentEdit.property;
        item[prop as keyof typeof item] = event.target.innerHTML;
      }
      return item;
    });
    setTableData(updatedValue);
  };

  const handleClick = (event: React.SyntheticEvent<EventTarget>, id: string) => {
    if (!(event.target instanceof HTMLElement)) return;
    if (!isEdit) return;

    if (event.target.dataset.test) {
      setIsCurrentEdit({
        id: id,
        property: event.target.dataset.test,
      });
    }
  };

  const currentRows = filterData.slice(
    dataPage * rowsPerPage,
    dataPage * rowsPerPage + rowsPerPage
  );

  return (
    <div className="tables-wrapper">
      <Box sx={{ display: "flex", minHeight: "594px" }}>
        <Box>
          <TableContainer>
            <Table aria-label="sticky table">
              <TableHead sx={{ height: "94px" }}>
                <TableRow>
                  <TableHeaderCell colSpan={1} rowSpan={2}>
                    №
                  </TableHeaderCell>
                  <TableHeaderCell colSpan={1} rowSpan={2}>
                    Имя сотрудника
                  </TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRows.map((row, index) => (
                  <TableRow
                    key={index}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    sx={{
                      background: index % 2 === 0 ? "rgba(248, 248, 248, 0.50)" : "white",
                    }}
                  >
                    <TableBodyCell>{index + 1}</TableBodyCell>
                    <TableBodyCell>{row.name}</TableBodyCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ overflow: "auto" }}>
          <TableContainer className="table-container-data">
            <Table aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableHeaderCell colSpan={6}>Основная информация</TableHeaderCell>
                  <TableHeaderCell colSpan={2}>Банковская информация</TableHeaderCell>
                  <TableHeaderCell colSpan={11}>Докумнты сотрудника</TableHeaderCell>
                  <TableHeaderCell colSpan={6}>Информация от HR</TableHeaderCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableHeaderCell style={{ minWidth: column.minWidth }} key={column.id}>
                      {column.label}
                    </TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRows.map((row, index) => (
                  <TableRow
                    key={index}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    sx={{
                      background:
                        index % 2 === 0 ? "rgba(248, 248, 248, 0.50)" : "rgba(229, 248, 246, 0.50)",
                    }}
                  >
                    {columns.map((column, index) => (
                      <TableBodyCell
                        onBlur={handleInput}
                        onClick={(event) => handleClick(event, row.id)}
                        key={index}
                        data-test={column.id}
                        contentEditable={isEdit}
                        suppressContentEditableWarning={true}
                      >
                        {row[column.id as keyof typeof row]}
                      </TableBodyCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <div className="tables-wrapper__navigation">
        <NavigationHelperText>
          Показано 1-{rowsPerPage} из {filterData.length} результатов
        </NavigationHelperText>
        {rowsPerPage > filterData.length ? null : (
          <Pagination
            page={dataPage + 1}
            count={Math.ceil(filterData.length / rowsPerPage)}
            onChange={onDataPageChange}
            renderItem={(item) => (
              <PaginationItem slots={{ previous: PrevPag, next: NextPag }} {...item} />
            )}
          />
        )}
        <div className="tables-wrapper__navigation__select-rows">
          <NavigationHelperText>отображать на странице</NavigationHelperText>
          <FormControl size="small">
            <Select
              value={String(rowsPerPage)}
              onChange={handleChange}
              sx={{
                borderRadius: "6px",
                border: "1.5px solid #F8F8F8",
                padding: 0,
              }}
            >
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={16}>16</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

const TableHeaderCell = styled(TableCell)(({ theme }) => ({
  color: "#54d3c2",
  fontSize: "12px",
  fontWeight: 700,
  minWidth: "46px",
  borderRight: "1.5px solid #e5e5e5",
  lineHeight: "120%",
  fontFamily: "Proxima Nova",
  textAlign: "center",
}));

const TableBodyCell = styled(TableCell)(({ theme }) => ({
  whiteSpace: "nowrap",
  borderRight: "1.5px solid #e5e5e5",
  textAlign: "center",
}));

const NavigationHelperText = styled(Typography)(({ theme }) => ({
  color: "#6D7986",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "44px",
  letterSpacing: "-0.56px",
}));

interface Column {
  id: string;
  label: string;
  minWidth?: number;
}

const columns: Column[] = [
  { id: "idNumber", label: "ID номер", minWidth: 97 },
  {
    id: "phone",
    label: "Телефон",
    minWidth: 170,
  },
  {
    id: "gender",
    label: "Пол",
    minWidth: 170,
  },
  {
    id: "dateOfBirth",
    label: "Дата рождения",
    minWidth: 170,
  },
  { id: "subway", label: "Метро", minWidth: 170 },
  { id: "address", label: "Адрес проживания", minWidth: 170 },
  { id: "bank", label: "Банк", minWidth: 170 },
  { id: "cardNumber", label: "Номер карты", minWidth: 170 },
  { id: "citizenship", label: "Гражданство", minWidth: 170 },
  { id: "passport", label: "Паспорт", minWidth: 170 },
  { id: "issuedBy", label: "Кем выдан", minWidth: 170 },
  { id: "validity", label: "Срок действия", minWidth: 170 },
  { id: "placeOfBirth", label: "Место рождения", minWidth: 170 },
  { id: "placeOfResidence", label: "Адрес прописки", minWidth: 170 },
  { id: "patent", label: "Патент", minWidth: 170 },
  { id: "validityPatent", label: "Срок действия", minWidth: 170 },
  { id: "SNILS", label: "СНИЛС", minWidth: 170 },
  { id: "INN", label: "ИНН", minWidth: 170 },
  { id: "medicalBook", label: "Мед. книжка", minWidth: 170 },
  // Информация от HR
  { id: "job", label: "Должность", minWidth: 170 },
  { id: "subdivision", label: "Подразделение", minWidth: 170 },
  { id: "solution", label: "Решение", minWidth: 170 },
  { id: "source", label: "Источник", minWidth: 170 },
  { id: "decisionDate", label: "Дата", minWidth: 170 },
  { id: "note", label: "Примечание", minWidth: 170 },
];
