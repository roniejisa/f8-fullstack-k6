export const showRipple = (e, config) => {
    const { bgColor, time, opacityStart, opacityEnd, borderColor, easing } = {
        bgColor: "#00000050",
        time: 400,
        opacityStart: 1,
        opacityEnd: 0,
        borderColor: "#00000050",
        easing: "linear",
        ...config,
    };
    const current = e.target;
    current.style.position = "relative";
    current.style.overflow = "hidden";
    const children = e.target.children;
    Array.from(children).forEach((el) => {
        !el.getAttribute("running") && el.remove();
    });
    const { offsetWidth } = current;
    const { offsetX, offsetY } = e.nativeEvent;
    const spanRounded = document.createElement("span");
    spanRounded.className = `absolute rounded-full border inline-block`;
    spanRounded.setAttribute("running", null);
    Object.assign(spanRounded.style, {
        position: "absolute",
        width: offsetWidth + "px",
        height: offsetWidth + "px",
        pointerEvents: "none",
        transform: "scale(0)",
        backgroundColor: bgColor,
        borderColor: borderColor,
        top: offsetY - offsetWidth / 2 + "px",
        left: offsetX - offsetWidth / 2 + "px",
        animation: "rounded 300ms ease-in-out forwards",
    });
    spanRounded.animate(
        [
            { transform: "scale(0)", opacity: opacityStart },
            { transform: "scale(2)", opacity: opacityEnd },
        ],
        {
            duration: time,
            fill: "forwards",
            easing: easing,
        }
    ).finished.then(() => {
        spanRounded.remove();
    });
    e.target.append(spanRounded);
};
