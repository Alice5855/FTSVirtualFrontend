import React, { Component } from 'react';
import {
    Collapse
} from 'reactstrap';

// WIP
class SubHeader extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse:false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render(){
        return (
            <>
                <div className='menu'>
                    <div className='menua'>
                        <a onClick={this.toggle}>Menu1</a>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <div className='subMenu'>
                            <a>submenu1</a>
                            <a>submenu2</a>
                            <a>submenu3</a>
                        </div>
                    </Collapse>
                </div>
            </>
        )
    }
}

export default SubHeader;