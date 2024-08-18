function calculateCircleArea(radius) {
    const pi = Math.PI;
    const area = pi * (radius ** 2);
    return area;
  }
  
  const radius = prompt("Enter the radius of the circle: ");
  const area = calculateCircleArea(radius);
  console.log(`The area of the circle is: ${area.toFixed(2)}`);