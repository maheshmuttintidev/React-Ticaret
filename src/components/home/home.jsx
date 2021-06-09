import {useSelector} from 'react-redux'
import Header from './header'
import Hero from './hero'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Footer from './footer'

export default function Home(props) {
    const isUserLoggedIn = useSelector(state => state.isLoggedin)
    if(isUserLoggedIn) {
        props.history.push('/ticaretor')
    }
    return (
        <>
            <Header />
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </>
    )
}