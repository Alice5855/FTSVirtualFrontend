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

// WIP
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.collapse1 = this.collapse1.bind(this);
        this.collapse2 = this.collapse2.bind(this);
        this.collapse3 = this.collapse3.bind(this);
        this.state = {
            isOpen: false,
            collapse1: false,
            collapse2: false,
            collapse3: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    collapse1() {
        this.setState({collapse1: !this.state.collapse1})
        this.setState({collapse2: false})
        this.setState({collapse3: false})
    }
    collapse2() {
        this.setState({collapse1: false})
        this.setState({collapse2: !this.state.collapse2})
        this.setState({collapse3: false})
    }
    collapse3() {
        this.setState({collapse1: false})
        this.setState({collapse2: false})
        this.setState({collapse3: !this.state.collapse3})
    }
    
    render(){
        return(
            <>
                <header>
                    <Navbar light expand="md">
                        <NavbarBrand href="/">
                            <div className="imgWrapper">
                                <img src = "Logonshit.png" alt="logo"></img>
                            </div>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <a id="navmenu" onClick={this.collapse1}>
                                        Toggle
                                    </a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <a id="navmenu" onClick={this.collapse2}>
                                        Toggle
                                    </a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <a id="navmenu" onClick={this.collapse3}>
                                        Toggle
                                    </a>
                                </NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    User
                                </DropdownToggle>
                                <DropdownMenu right style={{right: '0%'}}>
                                <DropdownItem>
                                    Sign in
                                </DropdownItem>
                                <DropdownItem>
                                    Sign up
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <Collapse isOpen={this.state.collapse1}>
                        <div className='py-2 subHeader'>
                            <div className="subMenu1">
                                <a id="navmenu">
                                    subMenu
                                </a>
                                <a id="navmenu">
                                    subMenu
                                </a>
                                <a id="navmenu">
                                    subMenu
                                </a>
                            </div>
                        </div>
                    </Collapse>
                    <Collapse isOpen={this.state.collapse2}>
                        <div className='py-2 subHeader'>
                            <div className="subMenu2">
                                <a id="navmenu">
                                    subMenu
                                </a>
                                <a id="navmenu">
                                    subMenu
                                </a>
                                <a id="navmenu">
                                    subMenu
                                </a>
                            </div>
                        </div>
                    </Collapse>
                    <Collapse isOpen={this.state.collapse3}>
                        <div className='py-2 subHeader'>
                            <div className="subMenu3">
                                <a id="navmenu">
                                    subMenu
                                </a>
                                <a id="navmenu">
                                    subMenu
                                </a>
                                <a id="navmenu">
                                    subMenu
                                </a>
                            </div>
                        </div>
                    </Collapse>
                </header>
            </>
        );
    };
};
export default Header;