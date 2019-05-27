import * as React from "react";

import { ITravelCardProps } from "../interfaces/ITravelCardProps"


export class TravelCard extends React.Component<ITravelCardProps, {}> {

    render() {
        const rootStyle = {
            backgroundImage: `url(${this.props.imgSrc})`
        }       

        return <div style={rootStyle} className="travelDestination">
            <div className="destination">{this.props.destination}</div>
            <div className="description">{this.props.description}</div>
            <div className="info">
                <div className="currentTemperature">Now: {this.props.currentTemperature}°</div>
                <div className="temperatureInTwoWeeks">In two weeks: {this.props.temperatureInTwoWeeks}°</div>
                <div className="priceTicket">£{this.props.priceTicket}</div>
            </div>
        </div>;
    }
}