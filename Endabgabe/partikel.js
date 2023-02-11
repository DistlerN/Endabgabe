"use strict";
var Particle_Draw;
(function (Particle_Draw) {
    let radius;
    let x;
    let y;
    let canvas;
    let ctx;
    drawHeart: void {
        draw(canvas, particle, radius) {
            const x = -radius, y = -radius;
            ctx.moveTo(x, y + radius / 2);
            ctx.quadraticCurveTo(x, y, x + radius / 2, y);
            ctx.quadraticCurveTo(x + radius, y, x + radius, y + radius / 2);
            ctx.quadraticCurveTo(x + radius, y, x + (radius * 3) / 2, y);
            ctx.quadraticCurveTo(x + radius * 2, y, x + radius * 2, y + radius / 2);
            ctx.quadraticCurveTo(x + radius * 2, y + radius, x + (radius * 3) / 2, y + (radius * 3) / 2);
            ctx.lineTo(x + radius, y + radius * 2);
            ctx.lineTo(x + radius / 2, y + (radius * 3) / 2);
            ctx.quadraticCurveTo(x, y + radius, x, y + radius / 2);
            ctx.fillStyle = currentColor;
            draw();
        },
        if: 
    };
})(Particle_Draw || (Particle_Draw = {}));
//# sourceMappingURL=partikel.js.map