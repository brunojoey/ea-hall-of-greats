import React from "react";
import NomineeTable from "../components/Table/nomineeTable";
import StarDecoration from "../components/StarDecoration";
import './Pages.scss';

function Nominations(props) {
  const { history } = props;

  return (
    <div>
        <StarDecoration />
        <h2 className='nominee-heading'>The Notorious Nominees</h2>
        <NomineeTable history={history} />
        <StarDecoration />
    </div>
  );
}

export default Nominations;
