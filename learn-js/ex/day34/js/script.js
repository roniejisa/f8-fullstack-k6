const image = document.querySelector('.image');
const imgEl = image.querySelector('img');
var zoom, preview;
var imageWidth = image.clientWidth;
var imageHeight = image.clientHeight;
var minLenWidth = 10;
var minLenHeight = 10;
var scale = 10;
var widthRatio, heightRatio;
var isShow = false;

window.addEventListener('load', function () {
    image.addEventListener('mousemove', update)
    image.addEventListener('wheel', function (e) {
        e.preventDefault();
        var isZoomSmall = e.deltaY > 0;
        console.log(isZoomSmall);
        changeZoomLen(isZoomSmall);
        setPreview();
        update(e);
    });
    image.addEventListener('mouseleave', function () {
        checkPreview(true);
    })
})

function update(event) {
    checkPreview();
    var data = getCursorPos(event);
    let left = data.x - (zoomWidth / 2);
    let top = data.y - (zoomHeight / 2);
    if (data.x > imageWidth - (zoomWidth / 2)) {
        left = imageWidth - zoomWidth;
    } else if (data.x < (zoomWidth / 2)) {
        left = 0;
    }

    if (data.y > imageHeight - (zoomHeight / 2)) {
        top = imageHeight - zoomHeight;
    } else if (data.y < (zoomHeight / 2)) {
        top = 0;
    }

    zoom.style.left = left + 'px';
    zoom.style.top = top + 'px';

    // Tính toạ độ background position cho preview dựa trên tỉ lệ
    preview.style.backgroundPosition = `-${left * widthRatio}px -${top * heightRatio}px`
}
function checkPreview(isOff = false) {
    if (!isShow) {
        isShow = true;
        preview = document.createElement('div');
        var rect = image.getBoundingClientRect();
        Object.assign(preview.style, {
            position: "fixed",
            top: rect.top + "px",
            width: imageWidth - 50 + "px",
            height: imageHeight - 50 + "px",
            left: rect.left + rect.width + 20 + "px"
        })

        zoom = document.createElement('div');
        Object.assign(zoom.style, {
            border: "1px solid black",
            width: imageWidth / 10 + 'px',
            height: imageHeight / 10 + 'px',
            position: "absolute",
            cursor:"pointer",
            zIndex: 10,
            background: "#80808063"
        })

        image.append(zoom);
        document.body.append(preview);
        zoomWidth = zoom.offsetWidth;
        zoomHeight = zoom.offsetHeight;
        setPreview();
    }

    if (isOff) {
        isShow = false;
        zoom.remove();
        preview.remove();
    }
}
function changeZoomLen(isZoomSmall) {
    if (isZoomSmall) {
        var widthValue = zoomWidth - (zoomWidth / 100 * scale);
        var heighValue = zoomHeight - (zoomHeight / 100 * scale);

        if (widthValue <= minLenWidth) {
            widthValue = minLenWidth;
        }

        if (heighValue <= minLenHeight) {
            heighValue = minLenHeight;
        }

    } else {
        var widthValue = zoomWidth + (zoomWidth / 100 * scale);
        var heighValue = zoomHeight + (zoomHeight / 100 * scale);
        if (widthValue >= imageWidth) {
            widthValue = imageWidth;
        }

        if (heighValue >= imageHeight) {
            heighValue = imageHeight;
        }
    }
    zoomWidth = widthValue;
    zoomHeight = heighValue;
    zoom.style.width = zoomWidth + 'px';
    zoom.style.height = zoomHeight + 'px';
}

function setPreview() {
    widthRatio = preview.offsetWidth / zoomWidth; // Tỉ lệ chiều rộng
    heightRatio = preview.offsetHeight / zoomHeight; // Tỉ lệ chiều cao
    preview.style.backgroundImage = `url(${imgEl.src})`;
    preview.style.backgroundSize = `${imageWidth * widthRatio}px ${imageHeight * heightRatio}px`;
    preview.style.backgroundRepeat = "no-repeat";
}


function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = image.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
}

