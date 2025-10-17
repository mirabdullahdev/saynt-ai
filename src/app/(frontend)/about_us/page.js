import React from 'react'
import About_banner from '../components/About_banner'
import About_what_we_do from '../components/About_what_we_do'
import About_work_together from '../components/About_work_together'
import About_partners from '../components/About_partners'
import Contact_expertise from '../components/Contact_expertise'
import About_current_work from '../components/About_current_work'
import About_meet_team from '../components/About_meet_team'
import AboutMakeSection from '../components/AboutMakeSection'
import AboutVision from '../components/AboutVision'
import AboutVideo from '../components/AboutVideo'

const About_us = () => {
    const comp = [About_banner, AboutVideo, AboutMakeSection, AboutVision  , About_what_we_do, About_meet_team, About_work_together]
    return (
        <>
            {
                comp && comp.map((Section, index) => {
                    const props = {};
                    if(Section === Contact_expertise){
                        props.title = 'Core '
                        props.subtitle = 'Expertise'
                    }
                    return <Section id={`section_${index + 1}`} key={index} {...props} />
                })
            }

        </>
    )
}

export default About_us