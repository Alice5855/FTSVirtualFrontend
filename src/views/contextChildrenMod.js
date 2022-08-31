import React from 'react';
import {Consumer} from './ContextApiMod';

class contextChildrenMod extends React.Component {
    render() {
        return (
            // Consumer 태그로 출력할 element를 감싸고
            // ContextApiMod 컴포넌트에서 value에 할당했던
            // 데이터를 contextValue 변수로 받아 사용합니다.
            <Consumer>
                {contextValue => 
                // 버튼(button태그)을 클릭하면, 파라미터로 전달받은
                // ContextApiMod 컴포넌트의 setStateFunc("react2021")을 호출합니다. 이때, ContextApiMod 컴포넌트의 state 변수 name 값을 react2021로 할당합니다.
                <button onClick={e => contextValue.setStateFunc("react2021")}>
                    {/* 버튼(button)을 누르기 전에
                      contextValue.name 값이 없기 때문에
                      버튼명이 _button으로 표시됩니다.
                      버튼을 누르면 변경된 ContextApiMod 컴포넌트의
                      state 변수 name 값인 react2021을 가져오고
                      버튼명이 react2021_button으로 표시됩니다. */}
                    {contextValue.name}_button
                </button>
                }
            </Consumer>
        );
    };
};

export default contextChildrenMod;