import React from 'react'
import Footer from '../../ticaretorPage/footer'
import Header from '../../ticaretorPage/header'
import style from './index.module.css'
export default function AccountDetails() {
    const fullName = JSON.parse(sessionStorage.getItem("userData"))?.name
    return (
        <>
        <Header fullName={fullName} />
        <div style={{margin: "3rem 0"}}>
            <form className="form-control">
                <div>
                    <input className="input-field" type="number" placeholder="Account Number" />
                </div>
                <div>
                    <input className="input-field" type="text" placeholder="Card Holder Name" />
                </div>
                <div>
                    <input className="input-field" type="number" placeholder="IFSC Code" />
                </div>
                <div style={{marginTop: "1rem"}}>
                    <button className={style.formBtn} type="submit">Submit</button>
                </div>
            </form>
        </div>
        <Footer />
        </>
    )
}
