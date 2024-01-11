document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('sakuraCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blossoms = [];

    function createBlossom() {
        return {
            x: Math.random() * canvas.width,
            y: 0,
            size:  Math.random() * 5 + 5,
            speed: Math.random() * 2 + 1,
        };
    }

    function drawBlossom(blossom) {
        ctx.beginPath();
        ctx.arc(blossom.x, blossom.y, blossom.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 204, 255, 0.7)';
        ctx.fill();
        ctx.closePath();
    }

    function updateBlossom(blossom) {
        blossom.y += blossom.speed;

        if (blossom.y > canvas.height + blossom.size) {
            Object.assign(blossom, createBlossom());
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const blossom of blossoms) {
            drawBlossom(blossom);
            updateBlossom(blossom);
        }

        requestAnimationFrame(draw);
    }

    for (let i = 0; i < 60; i++) {
        blossoms.push(createBlossom());
    }

    draw();
});
