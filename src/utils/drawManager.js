export const drawHero = (ctx, x, y) => {
    if(ctx){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo((x + 50), y);
        ctx.lineTo((x + 25), (y - 25));
        ctx.fill();
    }
}

export const drawEnemy = (ctx, x, y) => {
    if(ctx){
        ctx.beginPath();
        ctx.rect(x, y, 45, 45);
        ctx.stroke();
        ctx.fill();
    }
}

export const drawBullet = (ctx, x, y) => {
    if(ctx){
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
}