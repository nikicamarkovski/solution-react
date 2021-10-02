import React from 'react'
import { Clients } from '../Clients'
import { ContactForm } from '../ContactForm'
import { News } from '../News'

export const HomePage = () => {
    return (
        <>
         <News/>
         <Clients/>
         <ContactForm/>
        </>
    )
}
