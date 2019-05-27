import * as React from "react";
import { TravelCard } from "./TravelCard";
import { ITravelCardProps } from "../interfaces/ITravelCardProps";

export interface TravelDestinationListProps { list: ITravelCardProps[];}

function TravelCardComponent(props : {list: ITravelCardProps[]}) {
    const {list} = props;
    const listItems = list.map((card) =>
        <TravelCard
            destination={card.destination}
            imgSrc={card.imgSrc}
            currentTemperature={card.currentTemperature}
            temperatureInTwoWeeks={card.temperatureInTwoWeeks}
            description={card.description}
            priceTicket={card.priceTicket}            
        />
    );

    return (
        <div className="travelCards">{listItems}</div>
    );
}


export class TravelDestinationList extends React.Component<TravelDestinationListProps, {}> {

    render() {
        return <div className="travelContent">
            <div className="travelHeader" />

            <TravelCardComponent list={this.props.list}/>
        </div>

    }
}

