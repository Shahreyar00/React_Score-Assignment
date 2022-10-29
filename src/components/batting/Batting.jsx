import React, { useContext } from "react";
import { useState } from "react";
import { ScoreContext } from "../../context/ScoreContext";
import "./batting.scss";

const Batting = ({ idx }) => {
    const { score } = useContext(ScoreContext);
    const [out, setOut] = useState("Not out");

    return (
        <table className="table__block">
            <thead>
                <tr>
                    <th>BATSMAN</th>
                    <th>R</th>
                    <th>B</th>
                    <th>4R</th>
                    <th>6S</th>
                    <th>SR</th>
                </tr>
            </thead>
            {score?.innings[idx]?.batsmen.map((batsman)=>(
                <tbody key={batsman.name}>
                    <tr>
                        <td>
                            <span className="name">
                                {batsman.name}
                            </span>  <br/>
                            <span 
                                className={batsman.how_out===out?`active out`:`inactive out`}
                            >
                                {batsman.how_out}
                            </span>
                        </td>
                        <td>{batsman.runs}</td>
                        <td>{batsman.balls_faced}</td>
                        <td>{batsman.fours}</td>
                        <td>{batsman.sixes}</td>
                        <td>{batsman.strike_rate}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default Batting