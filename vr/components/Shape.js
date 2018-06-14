import React, { Component } from 'react';
import { Box, Cylinder, Sphere } from 'react-vr';

const shapes = [Box, Cylinder, Sphere];

export default class Shape extends Component {
    render() {
        let Component = shapes[this.props.shapeNum];

        return (
            <Component 
                style={{ 
                    color: '#fff',
                    transform: this.props.transform
                }}
            />
        )
    };
};