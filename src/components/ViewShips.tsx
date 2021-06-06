import React from "react";
import {ShipStyle, Image} from '../styles'


interface Ship {
    name: string;
    home_port: string;
    image: string;
}

const ViewShips = ({value, index}: { value: Ship, index: number }) => {

    if (value) return (
        <ShipStyle key={index}>
            Name: {value.name ? value.name: '-'}
            <br/>
            Home port: {value.home_port ? value.home_port: '-'}
            <br/>
            Image: {value.image ? <><br/><Image src={value.image} alt={value.image}/></>: '-'}
        </ShipStyle>
    )
    else return null;
};

export default ViewShips;