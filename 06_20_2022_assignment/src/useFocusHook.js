import {useState} from 'react';

function useFocusHook(initializer, componentName) {
    const [enterCounter, setEnterCounter] = useState(initializer);
    const [leaveCounter, setLeaveCounter] = useState(initializer);
    
    function enterFocusCounter() {
        setEnterCounter(enterCounter + 1);
        console.log('The ' + componentName + ' has gained the user\'s focus. The ' + componentName + ' has gained focus ' + enterCounter + ' times.');
    }
    function leaveFocusCounter() {
        setLeaveCounter(leaveCounter + 1);
        console.log('The user switched focus away from the ' + componentName + '. ' + componentName + ' has lost focus ' + leaveCounter + ' times.');
    }
    return [enterFocusCounter, leaveFocusCounter];
}

export default useFocusHook;