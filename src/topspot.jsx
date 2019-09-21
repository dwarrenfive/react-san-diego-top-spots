import React from 'react';

export default props => (
    <div className="container">
        <div className="card">
            <center><h4 className="card-header">{props.name}</h4></center>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <center><a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} className="btn btn-primary">Go Here</a></center>
            </div>
        </div>
    </div>
)