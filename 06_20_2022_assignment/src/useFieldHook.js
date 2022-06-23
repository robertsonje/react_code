import {useState, useEffect} from 'react';

function useFieldHook(initializer, componentName) {
    const [fieldValue, setFieldValue] = useState(initializer);
    const handleFieldValue = (value) => setFieldValue(value);
    useEffect(() => {
        console.log('The user changed their ' + componentName + ' to "' + fieldValue + '" .');
    }, [fieldValue, componentName]);
    return handleFieldValue;
}

export default useFieldHook;