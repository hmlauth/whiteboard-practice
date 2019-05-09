function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    const sqrt = Math.sqrt(sq)
    if (Number.isInteger(sqrt)) {
      return Math.pow((sqrt + 1), 2)
    } else {
      return -1;
    }
  }