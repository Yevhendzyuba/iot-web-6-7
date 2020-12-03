import React from "react";
import {CardItem} from "./Card.styled";
import CosmIcon from "../../icons/cosmetology_icon_card.jpeg";
import Button from "../Button/Button";

function Card(props) {
    return (
        <CardItem>
            <img src={CosmIcon} alt="cosmIcon"/>
            <h3>
                {props.cosmetologyName}
            </h3>
            <p>For what:{props.forWhat}</p>
            <p>Capacity In Ml:{props.capacityInMl}</p>
            <h5>Price In $:{props.price}</h5>
            <Button buttonText="View more" backgroundColor="#ffb6c1" color="#fff" fontSize="13px"
                    padding="10px 45px"
                    border="none"/>
        </CardItem>
    );
}

export default Card;
