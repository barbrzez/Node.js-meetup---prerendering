import * as React from "react";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class TopLevelNav extends React.Component<{}> {
    render() {
        return <div className="navbar">
            <div className="companyName">
                React app - no prerender
            </div>
            <ul className="row">
                <li className="btn-info">About</li>
                <li className="btn-info">Log in</li>
                <li className="btn-info">Contact</li>
            </ul>
        </div>;
    }
}