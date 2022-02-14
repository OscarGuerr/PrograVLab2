//ejercicio3
import React from "react";

//importamos lista de usuarios.
import UserList from '../components/UsersList/UsersList.js';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Carlos Rodriguez',
            image: 'https://image.shutterstock.com/image-photo/businessman-posing-confident-positive-professional-260nw-550143553.jpg',
            date: '1990-02-01'
        },
        
        {
            id: 'u2',
            name: 'Ursula Martinez',
            image: 'https://st.depositphotos.com/1011643/2348/i/950/depositphotos_23483051-stock-photo-modern-businesswoman-holding-tablet-computer.jpg',
            date: '1988-08-01'  
        },
        {
            id: 'u3',
            name: 'Maria Gutierrez',
            image: 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home.jpg',
            date: '1991-11-11'  
        },
        {
            id: 'u4',
            name: 'Carla Escobar',
            image: 'https://media.istockphoto.com/photos/young-businesswoman-in-a-modern-office-picture-id1291622774?b=1&k=20&m=1291622774&s=170667a&w=0&h=h9-SLbC5ZWfsqsOuCtBzbRNbnk97L1DzcxAV_oo9u24=',
            date: '1989-12-12'  
        }

    ]

    return(
        <UserList items={USERS} />
    );
}

export default Users;