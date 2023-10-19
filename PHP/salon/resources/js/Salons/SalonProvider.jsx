import { createContext, useEffect, useState } from 'react';


export const SalonContext = createContext();


export const SalonProvider = (props) => {

    const [salons, setSalons] = useState(null);
    const [salonCreate, setSalonCreate] = useState(null);

    useEffect(_ => {
        axios.get(props.urlSalons + '/list')
            .then(response => {
                setSalons(response.data.salons);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    useEffect(_ => {
        if (null !== salonCreate) {
            axios.post(props.urlSalons, salonCreate)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [salonCreate]);

    
        return (
            <SalonContext.Provider value={{
                setSalonCreate,
                salons
            }}>
                {props.children}
            </SalonContext.Provider>
        );
    
    }
