import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";

const Header = () => {
    return (
        <header className = "bg-red-300 border-b border-b-gray-400 py-5">
            <Container>
                <HeaderMenu />
                <Logo />
                <div>right</div>
            </Container>
        </header>
    );
};

export default Header;