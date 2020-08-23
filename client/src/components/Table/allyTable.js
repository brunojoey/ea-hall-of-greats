// import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import gamesAPI from "../../utils/gamesAPI";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSort } from '@fortawesome/free-solid-svg-icons';

// function AllyTable() {
//   const [ally, setAlly] = useState([]);

// let allyToRender;
// if (ally) {
//   allyToRender = ally.map((ally) => {
//     return (
//       <tbody key={ally._id}>
//         <tr>
//         <td
//             style={{
//               textAlign: "center",
//               padding: "1em",
//               borderBottom: "1px solid black",
//             }}
//           >
//             {ally.hallOfGreat}
//           </td>
//           <td
//             style={{
//               borderBottom: "1px solid black",
//               borderLeft: "1px solid black",
//               padding: ".5em",
//             }}
//           >
//             <span onClick={() => history.push(`/games/${ally._id}`)} className='gameLink'>{ally.game}</span>
//           </td>
//           <td
//             style={{
//               textAlign: "center",
//               borderBottom: "1px solid black",
//               borderLeft: "1px solid black",
//             }}
//           >
//             {ally.votes}
//           </td>
//           <td
//             style={{
//               textAlign: "center",
//               borderBottom: "1px solid black",
//               borderLeft: "1px solid black",
//               padding: ".5em",
//             }}
//           >
//             {ally.victory}
//           </td>
//           <td
//             style={{
//               textAlign: "center",
//               borderBottom: "1px solid black",
//               borderLeft: "1px solid black",
//               padding: ".5em",
//             }}
//           >
//             {ally.banned}
//           </td>
//           <td
//             style={{
//               textAlign: "center",
//               borderBottom: "1px solid black",
//               borderLeft: "1px solid black",
//               padding: ".5em",
//             }}
//           >
//             {ally.wonByPatreonVote}
//           </td>
//         </tr>
//       </tbody>
//     );
//   });
// }

// return (
//   <div>
//     <h2 style={{textAlign: 'center'}}>Daniel Bloodworth's Picks</h2>
//     <Table striped style={{margin: '0 auto'}}>
//       <thead>
//         <tr>
//         <th
//             style={{
//               borderBottom: "1px solid black",
//               padding: "0 1em 0 1em",
//             }}
//           >
//             Ceremony
//             <FontAwesomeIcon
//               size="1x"
//               style={{marginLeft: '.25em'}}
//               className="feed-user-icon"
//               icon={faSort}
//             ></FontAwesomeIcon>
//           </th>
//           <th
//             style={{ borderBottom: "1px solid black" }}
//           >
//             Game
//             <FontAwesomeIcon
//               size="1x"
//               style={{marginLeft: '.25em'}}
//               className="feed-user-icon"
//               icon={faSort}
//             ></FontAwesomeIcon>
//           </th>
//           <th
//             style={{
//               borderBottom: "1px solid black",
//               padding: "0 1em 0 1em",
//             }}
//           >
//             Votes Received
//             <FontAwesomeIcon
//               size="1x"
//               style={{marginLeft: '.25em'}}
//               className="feed-user-icon"
//               icon={faSort}
//             ></FontAwesomeIcon>

//           </th>
//           <th
//             style={{
//               borderBottom: "1px solid black",
//               padding: "0 1em 0 1em",
//             }}
//           >
//             Inducted
//             <FontAwesomeIcon
//               size="1x"
//               style={{marginLeft: '.25em'}}
//               className="feed-user-icon"
//               icon={faSort}
//             ></FontAwesomeIcon>

//           </th>
//           <th
//             style={{
//               borderBottom: "1px solid black",
//               padding: "0 1em 0 1em",
//             }}
//           >
//             Banned
//             <FontAwesomeIcon
//               size="1x"
//               style={{marginLeft: '.25em'}}
//               className="feed-user-icon"
//               icon={faSort}
//             ></FontAwesomeIcon>

//           </th>
//           <th
//             style={{
//               borderBottom: "1px solid black",
//               padding: "0 1em 0 1em",
//             }}
//           >
//             Won By Patreon Vote
//             <FontAwesomeIcon
//               size="1x"
//               style={{marginLeft: '.25em'}}
//               className="feed-user-icon"
//               icon={faSort}
//             ></FontAwesomeIcon>

//           </th>
//         </tr>
//       </thead>
//       {allyToRender}
//     </Table>
//   </div>
// );
// };

// export default AllyTable;
