import React, { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";
import "./yetBat.scss";

const YetBat = ({idx}) => {
    const { score } = useContext(ScoreContext);

    return (
        <div className="yetbat__container">
            <div className="yetbat__wrapper">
                {score?.innings[idx]?.did_not_bat.map((player)=>(
                    <div className="player-block" key={player.player_id}>
                        <img src={player.player_img} alt="" />
                        <span className="player-name">{player.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default YetBat