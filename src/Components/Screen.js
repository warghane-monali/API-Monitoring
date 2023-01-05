import React, { useState } from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { TableBody } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const StickySideBar = styled.div`
  width: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
`;

const SideBar = styled.div`
  width: 15%;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  align-items: center;
`;

const SubTitile = styled.div``;

const Menus = styled.p`
  margin-bottom: 10px;
  font-weight: 800px;
`;

const MenusTitile = styled.p`
  color: blue;
`;

const Select = styled.select``;
const Option = styled.option``;

const Pages = styled.div`
  margin: 20px;
`;

const TitleAudit = styled.h2``;

const Title = styled.h1``;

function Screen() {
  const [items, setItems] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = React.useState([]);
  const navigate = useNavigate();

  return (
    <>
      <MainPage>
        <StickySideBar>
          <HomeOutlinedIcon
            className="logo"
            fontSize="large"
            style={{ marginBottom: "20px" }}
            onClick={() => navigate("/home")}
          />
          <HowToRegOutlinedIcon
            className="logo"
            fontSize="large"
            style={{ marginBottom: "20px" }}
            onClick={() => navigate("/profile")}
          />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 35, height: 35 }}
            style={{ marginBottom: "20px" }}
          />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 35, height: 35 }}
            style={{ marginBottom: "20px" }}
          />
          <LogoutOutlinedIcon fontSize="large" />
        </StickySideBar>

        <SideBar>
          <Title>Settings</Title>
          <SubTitile>
            <Menus>Projects</Menus>
            <Menus>Audit logs</Menus>
            <Menus>settings</Menus>
            <Menus>profile</Menus>
            <Menus>Logout</Menus>
          </SubTitile>
        </SideBar>

        <Pages>
          <TitleAudit>Audit Logs</TitleAudit>
          <Menus>
            Monitor any changes made to your project, schema and content with
            audit logs.
          </Menus>
          <MenusTitile>Learn More</MenusTitile>
          <Select className="container-input">
            <Option selected>Filter</Option>
            <Option>1</Option>
            <Option>2</Option>
          </Select>

          <TableContainer sx={{ maxHeight: 440 }} style={{ marginTop: "20px" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Profile</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Entitiy ID</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Environment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {console.log("####", items)}

                {items !== undefined &&
                  items.map((vals) => {
                    return (
                      <TableRow>
                        <TableCell>{vals.firstName}</TableCell>
                        <TableCell>{vals.lastName}</TableCell>
                        <TableCell>{vals.action}</TableCell>
                        <TableCell>{vals.type}</TableCell>
                        <TableCell>{vals.environment}</TableCell>
                      </TableRow>
                    );
                  })}

                {totalRecords
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((vals) => {
                    return (
                      <TableRow hover role="checkbox">
                        <TableCell>
                          <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
                        </TableCell>
                        <TableCell>{vals.firstName}</TableCell>
                        <TableCell>{vals.lastName}</TableCell>
                        <TableCell>{vals.action}</TableCell>
                        <TableCell>{vals.type}</TableCell>
                        <TableCell>{vals.environment}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Pages>
      </MainPage>
    </>
  );
}

export default Screen;
