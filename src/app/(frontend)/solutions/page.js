import React from 'react'
import Solution_banner from '../components/solution_banner'
import Solution_about_us from '../components/Solution_about_us'
import Solution_transform from '../components/Solution_transform'
// import Solution_ai from '../components/solution_ai'
import Solution_projects from '../components/solution_projects'
import Solution_action from '../components/Solution_action'
import Solution_calender from '../components/Solution_calender'
import Contact_banner from '../components/Contact_banner'
import Contact_expertise from '../components/Contact_expertise'
import Contact_industry from '../components/contact_industry'
import Contact_deliver from '../components/Contact_deliver'
import SolutionCost from '../components/SolutionCost'
import SolutionTalkSection from '../components/SolutionTalkSection'

const Solutions = () => {
    let bannerData = {
        text: "Welcome to Saynt AI’s Hot Solutions—the next frontier in AI-driven productivity, customer engagement, and brand consistency. We believe in handling the mundane tasks so you can focus on what you do best: closing deals, building relationships, and scaling your business. Ready to see what we’ve got cooking?"
    }
    const comp = [
        Contact_banner, Contact_expertise, Contact_industry, SolutionCost, Contact_deliver, SolutionTalkSection, Solution_calender
    ]
    return (
        <>
            {
                comp && comp.map((Section, index) => {
                    const props = {};
                    if (Section === Contact_banner) {
                        props.propsData = bannerData
                        props.showButtons = false
                    }
                    if(Section === Contact_expertise){
                        props.title = 'Some Hot '
                        props.subtitle = 'Solutions'
                    } 
                    if (Section === Contact_industry){
                        props.listData = [
                            { title: 'Get Up and Running—Fast', desc: 'Optimized for quick deployment, our solutions cut down setup time and eliminate bottlenecks. Start building value right out of the gate.' },
                            { title: 'Seamless Integration with What You Already Use', desc: 'Why replace your system? Our AI integrates seamlessly with your CRM, email, and social channels—no need to change the tools you trust.' },
                            { title: 'No More Missed Opportunities', desc: 'Stay ahead of the curve with tools that help you act fast and smart. Never miss a lead, a sale, or a growth opportunity again.' },
                            { title: 'Get Up and Running—Fast', desc: 'Optimized for quick deployment, our solutions cut down setup time and eliminate bottlenecks. Start building value right out of the gate.' },
                            { title: 'Seamless Integration with What You Already Use', desc: 'Our AI integrates seamlessly with your existing CRM, email, and social channels—no need to change the tools you trust.' }
                        ]
                    }
                    return <Section key={index} id={`section_${index + 1}`}  {...props} />
                })
            }
        </>
    )
}

export default Solutions