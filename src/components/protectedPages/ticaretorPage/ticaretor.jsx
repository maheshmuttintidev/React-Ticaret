
import {withRouter, useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Header from '../../home/header'
import Hero from '../../home/hero'
import Section1 from '../../home/section1'
import Section2 from '../../home/section2'
import Section3 from '../../home/section3'
import Footer from '../../home/footer'

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