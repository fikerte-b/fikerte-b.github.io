/* eslint-disable*/

function calcDistance(x1,y1,x2,y2){
    let xCor = Math.pow((x2-x1),2);
    let YCor =Math.pow((y2-y1),2);
    let distance =Math.sqrt((xCor+YCor));
    return distance;
}

console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
