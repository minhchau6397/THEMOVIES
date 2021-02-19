import React, { useEffect, memo } from 'react'

export default memo(function CircleStore({ score }) {
    let tranformStyle = ['-webkit-transform', 'transform', '-ms-transform'];
    let circle = [];

    useEffect(() => {
        handleCircle();
    });
    const handleCircle = () => {
        let rotation = score * 100 / 10 * 1.8;
        let fill_rotation = rotation;
        tranformStyle.forEach((tranformItem) => {
            circle.forEach((elementItem) => {
                if (elementItem) {
                    elementItem.style.cssText += tranformItem + ":rotate(" + fill_rotation + "deg);";
                }
            });
        });
    }

    return (
        <>
            <div className="circle">
                <div className="wraps">
                    <div className="bar" />
                    <div ref={el => circle.push(el)} className="mask full">
                        <div ref={el => circle.push(el)} className="fill" />
                    </div>
                    <div className="mask half">
                        <div ref={el => circle.push(el)} className="fill" />
                    </div>
                </div>
                <span className="score">5.6</span>
            </div>
        </>
    )
})
