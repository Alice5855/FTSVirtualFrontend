// 이번에는 Context로 부모 데이터를 변경해 보겠습니다.
// props는 데이터가 부모에서 자식 컴포넌트로 단방향으로만 이동할 수
// 있습니다. Context를 사용하면 자식 컴포넌트에서 부모 컴포넌트의
// 데이터를 변경할 수 있습니다.

import React from 'react';
import Children from './contextChildrenMod';

const {Provider, Consumer} = React.createContext()
export {Consumer}


class ContextApiMod extends React.Component {

    constructor(props){
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)
    }
    // state 변수 name에 파라미터 value를 할당하는 함수를 선언합니다.
    setStateFunc(value){
        this.setState({name : value});
    }

    render() {
        // content 변수에 ContextApiMod 컴포넌트의 state와
        // setStateFunc 함수를 할당합니다.
        const content = {
            ...this.state,
            setStateFunc: this.setStateFunc
        }
        return (
            // 자식 컴포넌트를 Provider 태그로 감싸고
            // 전달할 데이터인 content를 value 값으로 할당합니다.
            <Provider value = {content}>
                <Children />
            </Provider>
        );
    };
};

export default ContextApiMod;