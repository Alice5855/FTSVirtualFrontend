import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import "./Header.css";
import SubHeader from "./SubHeader";

// WIP
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    const 
    render(){
        return(
            <>
                <div className="">
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">
                            <div className="imgWrapper">
                                <img src = "Logonshit.png"></img>
                            </div>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <a>Page1</a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <a>Page2</a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <a>Page3</a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <a>Page4</a>
                                </NavLink>
                            </NavItem>
                            
                            {/* 4 페이지 이상 권장하지 않음 */}

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                User
                                </DropdownToggle>
                                <DropdownMenu end>
                                <DropdownItem>
                                    Sign in
                                </DropdownItem>
                                <DropdownItem>
                                    Sign up
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Something i dont know
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </>
        );
    };
};
export default Header;