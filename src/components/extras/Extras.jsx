import React, { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";

const Extras = ({idx}) => {
    const { score } = useContext(ScoreContext);

    return (
        <table className="table__block">
            <thead>
                <tr>
                    <th>EXTRAS</th>
                    <th>B</th>
                    <th>W</th>
                    <th>NB</th>
                    <th>LB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{score?.innings[idx].extra_runs.total}</td>
                    <td>{score?.innings[idx].extra_runs.byes}</td>
                    <td>{score?.innings[idx].extra_runs.wides}</td>
                    <td>{score?.innings[idx].extra_runs.noballs}</td>
                    <td>{score?.innings[idx].extra_runs.legbyes}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Extras