"use strict";
var Firework_Fun;
(function (Firework_Fun) {
    let maximalParticles = 1000;
    let RocketAmount = 1;
    let addButton;
    let colorSlider;
    let secondColorSlider;
})(Firework_Fun || (Firework_Fun = {}));
class Firework {
    constructor(x, y, size, startColor, endColor) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.startColor = startColor;
        this.endColor = endColor;
    }
    render(ctx) {
        // code to render a single firework particle
    }
}
class FireworkParticles {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
    }
    spawn(x, y, size, startColor, endColor, amount) {
        for (let i = 0; i < amount; i++) {
            this.particles.push(new Firework(x, y, size, startColor, endColor));
        }
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const particle of this.particles) {
            particle.render(this.ctx);
        }
    }
}
const fireworkParticles = new FireworkParticles("canvas");
const startColorInput = document.getElementById("startColor");
const endColorInput = document.getElementById("endColor");
const particleSizeInput = document.getElementById("particleSize");
const spawnAmountInput = document.getElementById("spawnAmount");
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
    localStorage.setItem("startColor", startColorInput.value);
    localStorage.setItem("endColor", endColorInput.value);
    localStorage.setItem("particleSize", particleSizeInput.value);
    localStorage.setItem("spawnAmount", spawnAmountInput.value);
});
const loadBtn = document.getElementById("loadBtn");
loadBtn.addEventListener("click", () => {
    startColorInput.value = localStorage.getItem("startColor") || "#ffffff";
    endColorInput.value = localStorage.getItem("endColor") || "#ffffff";
    particleSizeInput;
});
//# sourceMappingURL=main.js.map