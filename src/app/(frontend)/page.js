import '../../../public/sass/pages/home.scss';
import Home_book_call from './components/Home_book_call';
import Home_cards_section from './components/Home_cards_section';
import Home_choose from './components/Home_choose';
import Home_connect from './components/Home_connect';
// import Home_counter from './components/Home_counter';
import Home_hero from './components/Home_hero';
import Home_industry from './components/Home_industry'; // this is blogs section in home page add it bfore solution calender
import Home_service_banner from './components/Home_service_banner';
import Home_startup from './components/Home_startup';
import Home_trust from './components/Home_trust';
import Similar_news from './components/similar_news';
import Solution_calender from './components/Solution_calender';
import Home_ai_academy from './components/Home_ai_academy';
import Home_ai_solutions from './components/Home_ai_solutions';
import Home_Work from './components/Home_Work';

export default function Home() {
    const comp = [
        Home_hero, Home_service_banner,Home_startup, Home_cards_section, Home_book_call, Home_trust,Home_Work, Home_ai_academy,Home_ai_solutions, Home_industry, Solution_calender
    ]
    return (
        <>
            {
                comp && comp.map((Section, index) => {
                    const props = {}
                    if (Section === Similar_news) {
                        props.sec_title = 'Blogs'
                        props.btn_text = 'View All'
                    }
                    return (
                        <Section key={index} id={`section_${index + 1}`} {...props}/>
                    )
                })
            }
        </>
    );
}
