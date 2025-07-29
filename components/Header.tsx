import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import "../app/globals.css"; // importing global styles
const Header = () => {
    return (
        <header className = "border-b border-b-gray-400 py-5">
            <Container className = "flex items-center justify-between gap-7 text-light-color">
                <HeaderMenu />
                <Logo />
                <div>right</div>
            </Container>
        </header>
    );
};

export default Header;