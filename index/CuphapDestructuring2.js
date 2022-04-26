function detectCollision(objects, point) {
    //ham find tra ve phan tu trong mang thoa man dieu kien
    return objects.find((object) => {
        return point.x >= object.x
            && point.x <= object.x + object.width
            && point.y >= object.y
            && point.y <= object.y + object.height;
    });
}

const myObjects = [
    {x: 10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x: 0, y: 0, width: 10, height: 5}
]

let result = detectCollision(myObjects, {x: 4, y: 2});
let {x, y, width, height} = result;
console.log(x);