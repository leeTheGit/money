import React, { Component } from 'react'
import { Slider } from 'react-compound-slider'

const sliderStyle = {
    position: 'relative',
    width: '100%',
    height: 80,
    border: '1px solid steelblue'
};

const railStyle = {
    position: 'absolute',
    width: '100%',
    height: 10,
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: '#8B9CB6'
};

export const CoolSlider = () => {
    return (
        <Slider
            rootStyle={sliderStyle}
            domain={[0,100]}
            values={[10]}
        >
            <div style={railStyle} />
        </Slider>
    )
}


