import React from 'react';
import CompA from './CompA';
import CompB from './CompB';
const components = {
    compA: CompA,
    compB: CompB
}

function DynamicComponent(props) {
    const SelectComponent = components[props.comp]
    return (
        <SelectComponent />
    );
}

export default DynamicComponent;