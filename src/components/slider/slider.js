import React, { Component } from 'react'
import { Slider, Handles } from 'react-compound-slider'


export const Handle = ({handle: {id, value, percent}, getHandleProps}) => {
    return (
        <div
            style={{
                left: `${percent}%`,
                position: 'absolute',
                marginLeft: -15,
                marginTop: 25,
                zIndex: 2,
                width: 30,
                height: 30,
                border: 0,
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                backgroundColor: '#2C4870',
                color: '#333',
            }}
            {...getHandleProps(id)}
        >;
        <div style={{fontFamily:'Roboto', fontSize: 11, marginTop: -35 }}>
            {value}
        </div>
        </div>
    )
}

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
            values={[30]}
            step={1}
            mode={2}
        >
            <div style={railStyle} />
            <Handles>
                {({ handles, getHandleProps }) => (
                    <div className="slider-handles">
                    {handles.map(handle => (
                        <Handle
                        key={handle.id}
                        handle={handle}
                        getHandleProps={getHandleProps}
                        />
                    ))}
                    </div>
                )}
            </Handles>
        </Slider>
    )
}


