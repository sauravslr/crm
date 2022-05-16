import React from "react"
import TicketCard from "../components/TicketCard"

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title : 'samsung galaxy',
            owner: 'saurav roy',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'is samsung the apple of android',
            timestamp: '2022-02-11T07:36:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'red',
            title : 'GOOGLE PIXEL 6A',
            owner: 'saurav roy',
            status: 'working on it',
            priority: 2,
            progress: 70,
            description: 'CHEAPER AND BETTER PIXEL',
            timestamp: '2022-02-13T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'GREEN',
            title : 'REACT AND NEXT.JS',
            owner: 'saurav roy',
            status: 'working on it',
            priority: 3,
            progress: 10,
            description: 'CHEAPER AND BETTER PIXEL',
            timestamp: '2022-02-13T07:36:17+0000'
        }
    ] 

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]

    console.log(uniqueCategories)


    return(
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket=> ticket.category === uniqueCategory).map((filteredTicket, _index) => (
                            <TicketCard
                                id= {_index}
                                color= {colors[categoryIndex] || colors[0]}
                                ticket = {filteredTicket}
                            />

                        )) }
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Dashboard