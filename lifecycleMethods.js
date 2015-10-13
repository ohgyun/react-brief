/**
 * Lifecycle Methods
 * @see https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
 */
var MyComponent = React.createClass({
    /**
     * <Mounting> 최초 렌더링 전 한 번만 호출
     *
     * - 여기서 `setState()`로 값을 변경하는 경우, 변경된 값이 최초 렌더링에 반영된다.
     *
     * @callAt client, server
     */
    componentWillMount: function () {},

    /**
     * <Mounting> 최초 렌더링 후 한 번만 호출
     * 
     * - 렌더링된 실제 DOM에 접근할 수 있다. `React.findDOMNode(this)`
     * - 자식 컴포넌트가 있다면, 자식 컴포넌트의 메서드가 먼저 호출된다.
     * - AJAX 등으로 데이터를 가져와 셋팅하는 경우 여기서 처리한다.
     *
     * @callAt client
     */
    componentDidMount: function () {},

    /**
     * <Updating> 컴포넌트가 새 props 를 받을 때 호출 (최초 렌더링엔 호출되지 않음)
     *
     * - render()가 호출되기 전에 state를 변경하는 용도로 사용하면 된다.
     * - 이전의 props는 this.props로 확인할 수 있다.
     * - 이 메서드 내에서 `setState()`를 호출해도 추가적인 렌더링을 발생하지 않는다.
     *
     * @param {Object} nextProps
     * @callAt client
     */
    componentWillReceiveProps: function (nexProps) {},

    /**
     * <Updating> 컴포넌트가 새 props와 state를 받았을 때 호출 (최초 렌더링엔 호출되지 않음)
     *
     * - 최초 렌더링과 `forceUpdate` 옵션이 있을 경우 호출되지 않음
     * - 기본값으로 `true`를 리턴한다.
     * - `false`를 리턴하면 컴포넌트를 업데이트하지 않는다.
     *   (이 경우 이후의 `componentWillUpdate()`와 `componentDidUpdate()`도 호출되지 않는다)
     * - 성능 이슈가 있다면 이 메서드에서 변경 여부를 미리 체크해 개선할 수 있다.
     *
     * @param {Object} nextProps
     * @param {Object} nextState
     * @callAt client
     */
    shouldComponentUpdate: function (nextProps, nextState) {},

    /**
     * <Updating> 새 props와 state로 렌더링 되기 직전에 호출 (최초 렌더링엔 호출되지 않음)
     *
     * - 컴포넌트가 업데이트 전 준비 작업을 수행할 수 있다.
     * - 이 메서드 안에선 `setState()`를 사용할 수 없다.
     *
     * @param {Object} nextProps
     * @param {Object} nextState
     * @callAt client
     */
    componentWillUpdate: function (nextProps, nextState) {},

    /**
     * <Updating> 컴포넌트의 변경된 내용이 DOM에 반영된 후 호출 (최초 렌더링엔 호출되지 않음)
     *
     * - 컴포넌트가 업데이트 된 후에 DOM을 처리하는 작업을 수행할 수 있다.
     *
     * @param {Object} prevProps
     * @param {Object} prevState
     * @callAt client
     */
    componentDidUpdate: function (prevProps, prevState) {},

    /**
     * <Unmounting> 컴포넌트가 DOM에서 마운트 해제될 때 호출
     *
     * - 타이머를 초기화하거나, 별도로 생성한 DOM을 초기화하는 등의 컴포넌트의 클린업 작업을 수행할 수 있다.
     *
     * @callAt client
     */
    componentWillUnmount: function () {}
});