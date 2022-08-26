import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

// WIP

class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <a onClick={this.toggle}>
                    Toggle
                </a>
                <Collapse isOpen={this.state.collapse}>
                    <div className='d-inline-block row'>
                        <div className='col'>
                            <a>
                                subMenu
                            </a>
                            <a>
                                subMenu
                            </a>
                            <a>
                                subMenu
                            </a>
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}
export default SubHeader