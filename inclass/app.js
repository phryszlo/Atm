const computeArea = (width, height) => { 
  console.log(arguments.length)
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }

  return `the area of the rectangle with width ${width} amd height ${height} is ${width * height}`; 
}


computeArea(8, 6);