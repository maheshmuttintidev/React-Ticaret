
import {withRouter} from 'react-router-dom'
import Header from '../../home/header'
import Hero from '../../home/hero'
import Section1 from '../../home/section1'
import Section2 from '../../home/section2'
import Section3 from '../../home/section3'
import Footer from '../../home/footer'

const Ticaretor = (props) => {
    const fullName = JSON.parse(sessionStorage.getItem("userData"))?.name
    return (
        <>
            <Header fullName={fullName} history={props.history} onLogout={() => sessionStorage.removeItem("userData")}/>
            <Hero fullName={fullName} />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </>
    )
}

export default withRouter(Ticaretor)