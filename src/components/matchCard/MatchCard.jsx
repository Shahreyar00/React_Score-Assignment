import React, { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";
import "./matchCard.scss";
import { FiChevronLeft } from "react-icons/fi";


const MatchCard = () => {
    const { score } = useContext(ScoreContext);

    return (
        <div className="match__container">
            <FiChevronLeft className="left-icon" />
            <span className="left-title">{score?.matchData?.title}</span>
            <div className="match__wrapper">
                <div className="top">
                    <span>{score?.matchData?.competition.title}-{score?.matchData.title}, {score?.matchData?.subtitle}</span>
                </div>
                <div className="center">
                    {score?.innings?.map((inning)=>(
                        <div className="score__detail" key={inning.iid}>
                            <div className="imgContainer">
                                <img src={inning.team.logo_url} alt="" />
                                <span className="short__name">{inning.team.short_name}</span>
                            </div>
                            <div className="scoreContainer">
                                <span>{inning.scores_full}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bottom">
                    <span className="currentStatus">{score?.matchData?.status_note}</span>
                </div>
            </div>
        </div>
    )
}

export default MatchCard