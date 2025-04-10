// Better performance - separate monomorphic functions
function processCircle(circle) {
  return Math.PI * circle.radius * circle.radius;
}

function processRectangle(rect) {
  return rect.width * rect.height;
}

// Worse performance - polymorphic function
function processShape(shape) {
  if (shape.type === 'circle') {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.width * shape.height;
  }
}