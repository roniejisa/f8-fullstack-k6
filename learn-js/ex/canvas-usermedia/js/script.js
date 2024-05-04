const localVideo = document.querySelector('#localVideo');
const canvasVideo = document.querySelector('#canvasVideo');
const remoteVideo = document.querySelector('#remoteVideo');

navigator.mediaDevices.getUserMedia({
    video: true
}).then(stream => {
    localVideo.srcObject = stream;
    localVideo.onloadedmetadata = () => {
        localVideo.play();
    }
});
const ctx = canvasVideo.getContext('2d');
localVideo.onplaying = renderVideo;

function addAlpha(imageData, gFloor = 105, rbCeiling = 80) {
    const { data } = imageData;
    for (let r = 0, g = 1, b = 2, a = 3; a < data.length; r += 4, g += 4, b += 4, a += 4) {
        if (data[r] <= rbCeiling && data[b] <= rbCeiling && data[g] >= gFloor)
            data[a] = 0;
    }
    return imageData
}

var skinColorSample = {
    min: [0.01, 0.2, 0.2], // Giá trị HSV tối thiểu
    max: [0.1, 1, 1] // Giá trị HSV tối đa
};

function renderVideo() {
    canvasVideo.width = localVideo.offsetWidth;
    canvasVideo.height = localVideo.offsetHeight;
    ctx.drawImage(localVideo, 0, 0, canvasVideo.width, canvasVideo.height);
    var frame = ctx.getImageData(0, 0, canvasVideo.width, canvasVideo.height);
    removeBackground(ctx, frame, skinColorSample);
    var canvasStream = canvasVideo.captureStream();
    canvasStream.getTracks().forEach(function (track) {
    });
    requestAnimationFrame(renderVideo)
}

function removeBackground(ctx, frame, skinColor) {
    var l = frame.data.length / 4;

    for (var i = 0; i < l; i++) {
        var r = frame.data[i * 4 + 0];
        var g = frame.data[i * 4 + 1];
        var b = frame.data[i * 4 + 2];

        // Chuyển đổi sang không gian màu HSV
        var hsv = rgbToHsv(r, g, b);

        // Kiểm tra xem pixel có thuộc về phạm vi màu da không
        if (hsv[0] >= skinColor.min[0] && hsv[0] <= skinColor.max[0] &&
            hsv[1] >= skinColor.min[1] && hsv[1] <= skinColor.max[1] &&
            hsv[2] >= skinColor.min[2] && hsv[2] <= skinColor.max[2]) {
            // Không làm gì nếu pixel thuộc về màu da
            continue;
        }

        // Xóa pixel nền bằng cách gán alpha (độ trong suốt) thành 0
        frame.data[i * 4 + 3] = 0;
    }

    ctx.putImageData(frame, 0, 0);
}

// Hàm chuyển đổi RGB sang HSV
function rgbToHsv(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;
    var d = max - min;
    s = max == 0 ? 0 : d / max;
    if (max == min) {
        h = 0; // không có màu
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, v];
}

