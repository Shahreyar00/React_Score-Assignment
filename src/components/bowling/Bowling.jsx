import React, { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";

const Bowling = ({idx}) => {
    const { score } = useContext(ScoreContext);

    return (
        <table className="table__block">
            <thead>
                <tr>
                    <th>BOWLER</th>
                    <th>O</th>
                    <th>M</th>
                    <th>R</th>
                    <th>W</th>
                    <th>Econ</th>
                </tr>
            </thead>
            {score?.innings[idx]?.bowlers.map((bowler)=>(
                <tbody key={bowler.bowler_id}>
                    <tr>
                        <td>{bowler.name}</td>
                        <td>{bowler.overs}</td>
                        <td>{bowler.maidens}</td>
                        <td>{bowler.runs_conceded}</td>
                        <td>{bowler.wickets}</td>
                        <td>{bowler.econ}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default Bowling