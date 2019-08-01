import React from 'react'

const Component1 = props => (
    <div>
    {/* Welcome, {props.name}! 
    <br></br>
    {props.qs} */}
    Component {props.match.params.id}
    </div>
);

export default Component1;