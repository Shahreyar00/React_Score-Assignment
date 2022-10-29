import { useState } from "react";
import "./topBox.scss";
import MinCard from "../minCard/MinCard";
import MatchCard from "../matchCard/MatchCard";

const TopBox = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset===0?false:true);
        return () => (window.onscroll=null);
    };

    return (
        <div className="topbox__container">
            {isScrolled ? (
                <MinCard />
            ) : (
                <MatchCard />
            )}
        </div>
    )
}

export default TopBox