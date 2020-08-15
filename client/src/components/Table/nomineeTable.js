import React, { useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { Table } from "react-bootstrap";
import {
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TableSortLabel,
  makeStyles,
  Paper
} from "@material-ui/core";
import gamesAPI from "../../utils/gamesAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort([], comparator) {
//   const stabilizedThis = [].map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// function NomineeTableHead(props) {
//   const {
//     classes,
//     order,
//     orderBy,
//     onRequestSort,
//   } = props;
//   console.log("props", props);
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   const headCells = [
//     { id: "ceremony", numeric: false, label: "Ceremony" },
//     { id: "nominated", numeric: false, label: "Nominated By" },
//     { id: "game", numeric: false, label: "Game" },
//     { id: "votes", numeric: true, label: "Votes Received" },
//     { id: "inducted", numeric: false, label: "Inducted" },
//     { id: "banned", numeric: false, label: "Banned" },
//   ];

//   return (
//     <>
//       <TableHead>
//         <TableRow>
//           {headCells.map((headCell) => (
//             <TableCell
//               key={headCell.id}
//               sortDirection={orderBy === headCell.id ? order : false}
//             >
//               <TableSortLabel
//                 active={orderBy === headCell.id}
//                 direction={orderBy === headCell.id ? order : "asc"}
//                 onClick={createSortHandler(headCell.id)}
//               >
//                 {headCell.label}
//                 {orderBy === headCell.id ? (
//                   <span className={classes.visuallyHidden}>
//                     {order === "desc"
//                       ? "sorted descending"
//                       : "sorted ascending"}
//                   </span>
//                 ) : null}
//               </TableSortLabel>
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHead>
//     </>
//   );
// };

// NomineeTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: 'rect(0 0 0 0)',
//     height: 1,
//     margin: -1,
//     overflow: 'hidden',
//     padding: 0,
//     position: 'absolute',
//     top: 20,
//     width: 1,
//   },
// }));

// function NomineeTable() {
//   const classes = useStyles();
//   const [order, setOrder] = useState('asc');
//   const [orderBy, setOrderBy] = useState('ceremony');
//   const [selected, setSelected] = useState([]);
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       let { data } = await gamesAPI.getGames();
//       console.log("DATA", data);
//       setGames(data);
//     }

//     fetchData();
//   }, []);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const isSelected = (games) => selected.indexOf(games) !== -1

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <TableContainer>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             // size={dense ? 'small' : 'medium'}
//             aria-label="enhanced table"
//           >
//             <NomineeTableHead
//               classes={classes}
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onRequestSort={handleRequestSort}
//             />
//             <TableBody>
//               {stableSort(getComparator(order, orderBy))
//                 // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((index) => {
//                   const isItemSelected = isSelected(games.game);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, games.game)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={games._id}
//                       selected={isItemSelected}
//                     >
//                       <TableCell component="th" id={labelId} scope="row" padding="none">
//                         {games.hallOfGreat}
//                       </TableCell>
//                       <TableCell align="right">{games.ally}</TableCell>
//                       <TableCell align="right">{games.game}</TableCell>
//                       <TableCell align="right">{games.votes}</TableCell>
//                       <TableCell align="right">{games.victory}</TableCell>
//                       <TableCell align="right">{games.banned}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//     </div>
//   );}

function NomineeTable(props) {
  const [games, setGames] = useState([]);
  const [sortedField, setSortedField] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      setGames(data);
    }

    fetchData();
  }, []);

  let nomineesToRender;
  if (games) {
    nomineesToRender = games.map((nominee) => {
      return (
        <tbody key={nominee._id}>
          <tr>
            <td
              style={{
                textAlign: "center",
                padding: "1em",
                borderBottom: "1px solid black",
              }}
            >
              {nominee.hallOfGreat}
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {nominee.ally}
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {nominee.game}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
              }}
            >
              {nominee.votes}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {nominee.victory}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {nominee.banned}
            </td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
              Ceremony
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => setSortedField()}
              ></FontAwesomeIcon>
            <th
              style={{ borderBottom: "1px solid black", paddingBottom: "1em" }}
            >
              Nominated By
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{ borderBottom: "1px solid black", paddingBottom: "1em" }}
            >
              Game
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
                padding: "0 1em 1em 1em",
              }}
            >
              Votes Received
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
                padding: "0 1em 1em 1em",
              }}
            >
              Inducted
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
                padding: "0 1em 1em 1em",
              }}
            >
              Banned
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        {nomineesToRender}
      </Table>
    </div>
  );
}

export default NomineeTable;
