import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [personState, setPersonsState] = useState({
        persons: [
            { name: "Les", age: "32" },
            { name: "Har", age: "33" },
            { name: "Brye", age: "4" }
        ]
    });

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: "Father", age: "32" },
                { name: "Mother", age: "33" },
                { name: "Daughter", age: "4" }
            ]
        })
    }


    return (
        <div className="App">
            <h1>Hi there!!!</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age} />
            <Person name={personState.persons[1].name} age={personState.persons[1].age} />
            <Person name={personState.persons[2].name} age={personState.persons[2].age} />
        </div>


    )
}

// class App extends Component {

//     state = {
//         persons: [
//             { name: "Les", age: "32" },
//             { name: "Har", age: "33" },
//             { name: "Brye", age: "4" }
//         ]
//     }

//     switchNameHandler = () => {
//         this.setState({
//             persons: [
//                 { name: "Father", age: "32" },
//                 { name: "Mother", age: "33" },
//                 { name: "Daughter", age: "4" }
//             ]
//         })

//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1>Hi there!!!</h1>
//                 <button onClick={this.switchNameHandler}>Switch Name</button>
//                 <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//                 <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
//                 <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//             </div>

//         )
//     }
// }

export default App;

