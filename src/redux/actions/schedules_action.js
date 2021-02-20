import {
    GET_SCHEDULES, GET_SCHEDULES_ERROR, GET_SCHEDULES_DETAIL
} from '../constants/actionType'
import { dateToString } from '../../utility'

//------------get schedules data with cinema, location, operator to get date('>=' or '==')
export const getSchedulesByLocation = (idCinema, idLocation) => {
    return (dispatch, getState, { getFirebase }) => {
        dispatch({ type: GET_SCHEDULES, data: { home: undefined } })
        const firestore = getFirebase().firestore();
        const todayString = dateToString(new Date());
        let data = {};

        firestore.collection(`cinemas/${idCinema}/locations/${idLocation}/broadcast`).where('expireTime', '>=', todayString).get().then(querySnapshot => {
            if (!querySnapshot.empty) {
                Promise.all(querySnapshot.docs.map(doc => {
                    return doc.ref.collection('schedules').doc(todayString).get().then(schedule => {
                        if (schedule.exists) {
                            let array = {}
                            array[doc.id] = schedule.data();
                            return array
                        }
                        return null
                    })
                })).then(result => {
                    result.forEach(item => {
                        if (item) {
                            data = { ...data, ...item }
                        }
                    })
                    dispatch({ type: GET_SCHEDULES, data: { home: data } })
                })
            } else {
                data = null
                dispatch({ type: GET_SCHEDULES, data: { home: data } })
            }
        }).catch(err => {
            dispatch({ type: GET_SCHEDULES_ERROR, err })
        })
    }
}

export const getSchedulesByMovie = (idMovie) => {
    return (dispatch, getState, { getFirebase }) => {
        dispatch({ type: GET_SCHEDULES_DETAIL, data: { detail: undefined } })
        const firestore = getFirebase().firestore();
        const todayString = dateToString(new Date());
        let data = {};

        firestore.collectionGroup("broadcast").where('movie', '==', idMovie).where('expireTime', '>=', todayString).get().then(querySnapshot => {
            if (!querySnapshot.empty) {
                Promise.all(querySnapshot.docs.map(doc => {
                    const info = doc.data()
                    return doc.ref.collection('schedules').where('__name__', '>=', todayString).get().then(query => {
                        if (!query.empty) {
                            let array = {}
                            array.cinema = info.cinema;
                            array.location = info.location;
                            query.forEach(schedule => {
                                array.date = {
                                    ...array.date,
                                    [schedule.id]: schedule.data()
                                }
                            })
                            return array
                        }
                        return null
                    })
                })).then(result => {
                    result.forEach(item => {
                        if (item) {
                            (data[item.cinema]) ? data[item.cinema] = { ...data[item.cinema] } : data[item.cinema] = {};
                            Object.keys(item.date).forEach(keyDate => {
                                let date = item.date[keyDate]
                                if (data[item.cinema][keyDate]) {
                                    if (!data[item.cinema][keyDate][item.location]) {
                                        data[item.cinema][keyDate][item.location] = { ...date }
                                    }
                                } else {
                                    data[item.cinema][keyDate] = {
                                        [item.location]: date
                                    }
                                }
                            })
                        }
                    })
                    dispatch({ type: GET_SCHEDULES_DETAIL, data: { detail: data } })
                })
            } else {
                data = null
                dispatch({ type: GET_SCHEDULES_DETAIL, data: { detail: data } })
            }
        }).catch(err => {
            dispatch({ type: GET_SCHEDULES_ERROR, err })
        })
    }
}

export const addSchedule = (id, schedule, sub, sub2) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const today = new Date()

        //--------INSERT DOC
        // firestore.collection(`cinemas/${id}`).doc(dateToString(today)).set({
        //     ...schedule
        // }).then(res => {
        //     console.log(schedule, res);
        // }).catch(err => {
        //     console.log(err);
        // })
        // today.setDate(today.getDate() + 1)
        // firestore.collection(`cinemas/${id}`).doc(dateToString(today)).set({
        //     ...schedule
        // }).then(res => {
        //     console.log(schedule, res);
        // }).catch(err => {
        //     console.log(err);
        // })
        // today.setDate(today.getDate() + 2)
        // firestore.collection(`cinemas/${id}`).doc(dateToString(today)).set({
        //     ...schedule
        // }).then(res => {
        //     console.log(schedule, res);
        // }).catch(err => {
        //     console.log(err);
        // })

        firestore.collection(`cinemas/${id}`).doc("Pshi7tywwPLu9fHcTH1f").set({
            expireTime: '2021-04-20',
            movie: 'Pshi7tywwPLu9fHcTH1f',
            cinema: sub,
            location: sub2
        }).then(res => {
            console.log(schedule, res);
        }).catch(err => {
            console.log(err);
        })
        firestore.collection(`cinemas/${id}`).doc("blpfNZIEPaqq8oMT0S0M").set({
            expireTime: '2021-04-20',
            movie: 'blpfNZIEPaqq8oMT0S0M',
            cinema: sub,
            location: sub2
        }).then(res => {
            console.log(schedule, res);
        }).catch(err => {
            console.log(err);
        })


        //--------DELETE DOC
        // firestore.collection(`cinemas/${id}`).doc("2021-02-13").delete().then(res => {
        //     console.log(schedule, res);
        // }).catch(err => {
        //     console.log(err);
        // })
        // firestore.collection(`cinemas/${id}`).doc("2021-02-14").delete().then(res => {
        //     console.log(schedule, res);
        // }).catch(err => {
        //     console.log(err);
        // })
    }
}