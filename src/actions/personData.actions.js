export function getAllPeople() {

    const people = [
        { name: "Salmin", age: 28, city: "Helsingborg", children: [] },
        { name: "Test", age: 15, city: "Malmö", children: [] },
        { name: "Bengt", age: 31, city: "Lund", children: [] },
        { name: "Åsa", age: 44, city: "Malmö", children: [
            { name: "Albert", age: 12, city: "Helsingborg", children: [] },
            { name: "Test", age: 15, city: "Malmö", children: [] },
            { name: "Bengt", age: 31, city: "Lund", children: [] }
        ]}
    ];

    return (dispatch) => {
        dispatch({
            type: 'GET_ALL_PEOPLE',
            payload: people
        });
    }
}

export function selectPerson(person) {
    return (dispatch) => {
        dispatch({
            type: 'SELECT_PERSON',
            payload: person
        })
    }
}