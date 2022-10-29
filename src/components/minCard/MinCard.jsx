import React from "react";
import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";
import "./minCard.scss";
import { FiChevronLeft } from "react-icons/fi";

const MinCard = () => {
    const { score } = useContext(ScoreContext);

    return (
        <div className="min__container">
            <FiChevronLeft className="left-icon" />
            <div className="min__wrapper">
                <div className="min__data">
                    <img src={score?.innings[0]?.team.logo_url} alt="" />
                    <span>{score?.innings[0]?.scores}</span>
                </div>
                <div className="circle">
                    <span>vs</span>
                </div>
                <div className="min__data">
                    <span>{score?.innings[1]?.scores}</span>
                    <img src={score?.innings[1]?.team.logo_url} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MinCard