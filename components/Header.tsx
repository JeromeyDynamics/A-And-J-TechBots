//using "rafce", a basic component with a div can be generated
import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import "../app/globals.css"; // importing global styles
const Header = () => {
    return (
        <header className = "border-b border-b-gray-400 py-5">
            <Container className = "flex items-center justify-between gap-7 text-light">
                <HeaderMenu />
                <div className = "w-auto md:w-1/3 flex items-center justify-center">
                    <Logo>
                        A&J TechBots
                    </Logo>
                </div>
                <div className = "w-auto md:w-1/3 flex items-center justify-between gap-5">
                    right
                </div>
            </Container>
        </header>
    );
};

export default Header;