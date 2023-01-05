import React, { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { TableBody } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [viewallData, setViewAllData] = useState();

  const getRecords = () => {
    // setLoading(true);
    fetch("http://api.catalysis.foxberry.link/project/viewall", {
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          alert("Error while loading data...!");
          // setLoading(false);
        }
      })
      .then((data) => {
        console.log("Response", data);
        setViewAllData(data);
        // setPages(data.length / 10);
        // setRecord(data.filter((item, index) => index >= 0 && index < 10));
        // setLoading(false);
        // console.log(data.filter((item,index)=>index>si&&index<=ei))
      })
      .catch((err) => console.warn("Error", err.typeError));
  };

  return (
    <>
      <Paper sx={{ width: "60%", margin: "50px" }}>
        <TableContainer sx={{ maxHeight: 440 }} style={{ marginTop: "20px" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Environment</TableCell>
                <TableCell>API URL</TableCell>
                <TableCell>plateform</TableCell>
                <TableCell>plateform</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log("####", viewallData)}

              {viewallData !== undefined &&
                viewallData.map((vals) => {
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

              {/* {totalRecords
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
          })} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default Projects;
