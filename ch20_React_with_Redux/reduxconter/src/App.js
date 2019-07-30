import { connect } from "react-redux";
import Counter from "./Counter";

// 리덕스 상태를 컴포넌트 속성에 매핑
function mapStateToProps(state) {
    return {
        countValue: state.count,
    };
}

// 액션
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };

// 리덕스 액션을 컴포넌트 속성에 매핑
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: function () {
            return dispatch(increaseAction);
        },
        decreaseCount: function () {
            return dispatch(decreaseAction);
        }
    };
}

// HOC
var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connectedComponent;