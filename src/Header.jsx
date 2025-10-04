import { useState } from "react"
import { HiMiniBars3 } from "react-icons/hi2"
// import { HiBars3 } from "react-icons/hi2"
import { VscChromeClose } from "react-icons/vsc"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const [navOptions, setNavOptions] = useState([
        {title: "home", isActive: true},
        {title: "about", isActive: false},
        {title: "timeline", isActive: false},
        {title: "testimonials", isActive: false},
        {title: "booking", isActive: false},
        {title: "contact", isActive: false},
    ])

    return(
        <header>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto">
                        <a href="/" className="logo text-primary text-capitalize fw-bold text-center">
                            medic care
                            <span className="d-block" style={{color: "#717275", fontSize: "12px"}}>health specialist</span>
                        </a>
                    </div>
                    <div className={`pointer menu-btn d-flex flex-column justify-content-between ${isOpen && "open"}`} onClick={() => setIsOpen((prev) => !prev)}
                        style={{transform: open ? "rotate(180deg)" : "rotate(0deg)"}}>
                        {/* {isOpen ? <VscChromeClose /> :<HiMiniBars3 />} */}
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}