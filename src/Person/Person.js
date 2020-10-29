import React from 'react'

const Person = (props) => {
    return (
        <>
            <p> I am {props.name} and i am {props.age} year!!</p>
            <p>{props.children}</p>
        </>

    )
}

export default Person;
