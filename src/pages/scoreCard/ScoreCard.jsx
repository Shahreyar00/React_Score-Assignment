import React, { useContext } from "react";
import { useState } from "react";
import Batting from "../../components/batting/Batting";
import Bowling from "../../components/bowling/Bowling";
import Extras from "../../components/extras/Extras";
import YetBat from "../../components/yetBat/YetBat";
import { ScoreContext } from "../../context/ScoreContext";
import "./scoreCard.scss";

const ScoreCard = () => {
    const { score } = useContext(ScoreContext);
    const [inNumber, setInNumber] = useState(0);

    return (
        <div className="scorecard__container">
            <div className="scorecard__wrapper">
                <div className="scorecard__top">
                    <div 
                        className={`${inNumber===0?"card active":"card inactive"}`}
                        onClick={()=>setInNumber(0)}
                    >
                        <img src={score?.innings[0].team.logo_url} alt="" />
                        <div className="cardText">
                            <span className="teamName">{score?.innings[0].name}</span>
                            <span className="teamTotal">{score?.innings[0].scores_full}</span>
                        </div>
                    </div>
                    <div 
                        className={inNumber===1?`card active`:`card inactive`}
                        onClick={()=>setInNumber(1)}    
                    >
                    <img src={score?.innings[1].team.logo_url} alt="" />
                        <div className="cardText">
                            <span className="teamName">{score?.innings[1].name}</span>
                            <span className="teamTotal">{score?.innings[1].scores_full}</span>
                        </div>
                    </div>
                </div>
                <div className="title1">
                    <span>Batting</span>
                </div>
                <Batting idx={inNumber} />
                <Extras idx={inNumber} />
                <div className="title1">
                    <span>Yet to bat</span>
                </div>
                <YetBat idx={inNumber} />
                <div className="title1">
                    <span>Bowling</span>
                </div>
                <Bowling idx={inNumber} />
            </div>
        </div>
    )
}

export default ScoreCard