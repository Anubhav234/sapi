import React from "react";


const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
       <div>Home</div>
    )
}

export default NavBar