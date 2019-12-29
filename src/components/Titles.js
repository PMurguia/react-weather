import React from 'react';

// class Titles extends React.Component{
//     render() {
//         return(
//             <div>
//                 <h1>Weather Finder</h1>
//                 <p>Find out temperature, conditions and more...</p>
//             </div>
//         )
//     }
// }

const Titles = () => (
    <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <p className="title-container__subtitle">Find out temperature, conditions and more...</p>
    </div>
)

export default Titles;