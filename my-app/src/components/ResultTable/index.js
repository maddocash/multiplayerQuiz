import React from 'react';
import PropTypes from 'prop-types';
import './resultTable.css';

const ResultTable = props => {
  let obj = props.players;
  let playerSorted = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      playerSorted.push([key, obj[key]]);
    }
    playerSorted.sort(function(a, b) {
      return b[1] - a[1];
    });
    playerSorted = playerSorted.filter(itm => itm[0] !== 'false');
  }
  let tableData = playerSorted.map((itm, idx) => {
    let medal =
      idx < 3 ? (
        <img
          src={`/${idx}medal.svg`}
          alt="winner"
          height="50%"
          id="finalMedal"
        />
      ) : null;
    return (
      <tr key={idx}>
        <td
          className="tableSpacing"
          id="scoreName"
          style={idx > 2 ? {transform: 'translateY(30%)'} : {}}
        >
          {medal}
          {itm[0]}
        </td>
        <td className="tableSpacing" id="finalScoe">
          {itm[1]}
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table className="resultTable">
        <thead>
          <tr>
            <th className="tableSpacing">Name</th>
            <th className="tableSpacing">Score</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

ResultTable.propTypes = {
  players: PropTypes.object.isRequired
};

export default ResultTable;
