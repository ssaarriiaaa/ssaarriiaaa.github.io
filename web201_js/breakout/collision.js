function collisionOnTop(circle,rect) {
    return circle.x>=rect.x // left edge
    && circle.x<=rect.x+rect.w // right edge
    && circle.y+circle.r>=rect.y // hit on top
    && circle.y+circle.r<=rect.y+rect.h; // bottom edge
}

function collisionOnLeft(circle,rect) {
    return circle.x+circle.r>=rect.x 
    && circle.y>=rect.y 
    && circle.y<=rect.y+rect.h 
    && circle.x+circle.r<rect.x+rect.w;
}

function collisionOnRight(circle,rect) {
    return circle.x-circle.r<=rect.x+rect.w
    && circle.y>=rect.y 
    && circle.y<=rect.y+rect.h 
    && circle.x-circle.r>rect.x;
}

function collisionOnBottom(circle,rect) {
    return circle.x>=rect.x 
    && circle.x<=rect.x+rect.w 
    && circle.y-circle.r<=rect.y+rect.h 
    && circle.y-circle.r>rect.y;
}

export {collisionOnTop, collisionOnLeft, collisionOnRight, collisionOnBottom};