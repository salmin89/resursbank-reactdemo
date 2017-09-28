import { getFromService, saveToService } from '../utils/FancyService';

export function getAllPeople() {


    return (dispatch) => {
        //fake async
        const people = getFromService("people")
        setTimeout(() => {
            dispatch({
                type: 'GET_ALL_PEOPLE',
                payload: people
            });
        }, (Math.random() * (1000 - 100) + 100));
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

export function savePerson(people) {

    saveToService('people', people);

    return (dispatch) => {
        dispatch({
            type: 'SAVE_PERSON',
            payload: people
        })
    }
}