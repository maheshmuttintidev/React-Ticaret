
import {withRouter, useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Header from './header'
import Hero from './hero'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Footer from './footer'

const Ticaretor = () => {
    const fullName = JSON.parse(sessionStorage.getItem("userData"))?.name
    const isUserLoggedIn = useSelector(state => state.isLoggedin)
    const history = useHistory()

    if(!isUserLoggedIn) {
        history.push('/')
    }

    return (
        <>
            <Header fullName={fullName} />
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </>
    )
}

export default withRouter(Ticaretor)