import { Button, Slider } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import useOutsideClick from './useClickOutside';

function SliderS({ day }) {
    // const SliderComponent = ({ start, end }) => {
    //     function sliderMark(index, lf) {
    //         return (
    //             <span data-index={index} className="MuiSlider-mark" style={{ left: lf * 25 + "%" }}></span>
    //         )
    //     }

    //     function sliderLabel(index, lf) {
    //         return (
    //             <span data-index={index} className="MuiSlider-markLabel" style={{ left: lf * 25 + "%" }}>{index * 6}</span>
    //         )
    //     }

    //     const i = [0, 1, 2, 3, 4]

    //     return (
    //         <div>
    //             {i.map(x => {
    //                 return (
    //                     <Fragment key={"slider" + x}>
    //                         {sliderMark(x, x)}
    //                         {sliderLabel(x, x)}
    //                     </Fragment>
    //                 )
    //             })}
    //             <span className="MuiSlider-thumb MuiSlider-thumbColorPrimary jss7 jss6" role="slider" data-index="0" aria-labelledby="range-slider" aria-orientation="horizontal" aria-valuemax="24" aria-valuemin="0" aria-valuenow={start} aria-valuetext={start + "'s"} style={{ left: start / 24 * 100 + "%" }} tabindex="0">
    //                 <span className="jss8 MuiSlider-valueLabel">
    //                     <span className="jss9">
    //                         <span className="jss10">
    //                             {start}
    //                         </span>
    //                     </span>
    //                 </span>
    //             </span>
    //             <span className="MuiSlider-thumb MuiSlider-thumbColorPrimary jss7 jss6" tabindex="0" role="slider" data-index="1" aria-labelledby="range-slider" aria-orientation="horizontal" aria-valuemax="24" aria-valuemin="0" aria-valuenow={end} aria-valuetext={end + "'s"} style={{ left: end / 24 * 100 + "%" }}>
    //                 <span className="jss8 MuiSlider-valueLabel">
    //                     <span className="jss9">
    //                         <span className="jss10">{end}</span>
    //                     </span>
    //                 </span>
    //             </span>
    //         </div>
    //     )
    // }


    const [value, setValue] = useState([20, 37])
    const [color, setColor] = useState("blue");
    const [isActivated, setActivated] = useState(false);
    const [customStyle, setStyle] = useState(null);
    const [reason, setReason] = useState("");

    const outClickRef = useOutsideClick(() => setActivated(false))
    const handleInsideClick = (e) => {
        e.stopPropagation();
    }


    const marks = [
        {
            value: 0,
            label: "0",
        },
        {
            value: 6,
            label: "6",
        },
        {
            value: 12,
            label: "12",
        },
        {
            value: 18,
            label: "18",
        },
        {
            value: 24,
            label: "24",
        }

    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const colorChange = (color) => {
        setColor(color);
    }

    const changeReason = (e) => {
        setReason(e.target.value)
    }

    useEffect(() => {
        setStyle(
            {
                "& .MuiSlider-track": {
                    color: color,
                },
                "& .MuiSlider-thumb": {
                    color: color
                },
            }
        )
    }, [color])

    return (
        <div className='slider-s'>
            <div className="first-part" align={"left"}>
                <span className="sliderSpan">{day}</span>
                <span className="checkbox">
                    <input className="input-checkbox" type="checkbox"></input>
                </span>
            </div>

            <div className="slider-part" align={""} onClick={() => handleInsideClick}>
                <Slider
                    aria-label="Always visible"
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                    step={1}
                    min={0}
                    max={24}
                    marks={marks}
                    title={reason}
                    getAriaValueText={() => value}
                    sx={customStyle}
                    onMouseOver={() => setActivated(true)}
                />
                <div className={"additional-info " + isActivated} ref={outClickRef}>
                    <div className='color-choose d-inline'>
                        <p className='d-inline'>Choose color:</p>
                        <Button className='d-inline' onClick={() => colorChange("red")} >Red</Button>
                        <Button className='d-inline' onClick={() => colorChange("green")}>Green</Button>
                        <Button className='d-inline' onClick={() => colorChange("blue")}>Blue</Button>
                    </div>
                    <div className='reason'>
                        <p className='d-inline'>Reason:</p>
                        <input type="text" name="reason" onChange={changeReason} value={reason}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderS;