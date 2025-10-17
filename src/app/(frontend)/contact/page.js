import React from 'react'
import Solution_calender from '../components/Solution_calender'
import Contact_banner from '../components/Contact_banner'
import Contact_expertise from '../components/Contact_expertise'
import Contact_deliver from '../components/Contact_deliver'
import Contact_faq from '../components/Contact_faq'
import Contact_industry from '../components/contact_industry'

const page = () => {

    const comp = [Contact_banner, Contact_industry, Contact_deliver, Contact_faq, Solution_calender]
    return (
        <>
            {
                comp && comp.map((Section, index) => {
                    const props = {}
                    if (Section === Contact_industry) {
                        props.listData = [
                            { title: 'Finance', desc: 'Track market trends and analyze data with our intuitive, user-friendly interface' },
                            { title: 'Healthcare', desc: 'Track market trends and analyze data with our intuitive, user-friendly interface' },
                            { title: 'Healthcare', desc: 'Track market trends and analyze data with our intuitive, user-friendly interface' },
                            { title: 'Healthcare', desc: 'Track market trends and analyze data with our intuitive, user-friendly interface' },
                            { title: 'Education', desc: 'Track market trends and analyze data with our intuitive, user-friendly interface' }
                        ]
                    }
                    return <Section id={`section_${index + 1}`} key={index} {...props}/>
                })
            }
        </>
    )
}

export default page