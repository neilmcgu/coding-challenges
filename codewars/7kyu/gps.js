function gps(s, x) {
  // your code
  /*
  PREP
  Parameters
    s - integer - the recording interval in seconds
    x - array - distance traveled from origin
  Return
    maximum average speed per hour (rounded down with Math.floor())
  Example
    s = 15
    x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
    maximum average speed = 74
  Pseudo Code
    get an array of sections
    calculate the average speed on each second
    return the maximum value rounded down
  */
  if (x.length <= 1) return 0;

  let distArr = [];

  for (let i = 0; i < x.length - 1; i++) {
    let dist = x[i + 1] - x[i];
    distArr.push(dist);
  }

  let speeds = [];

  for (let i = 0; i < distArr.length; i++) {
    // average speed in seconds = dist/s * 60 * 60
    let averageSpeed = (3600 * distArr[i]) / s;
    speeds.push(averageSpeed);
  }

  return Math.floor(Math.max(...speeds));
}
