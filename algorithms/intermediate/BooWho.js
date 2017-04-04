// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

booWho(null);
booWho(false);
// should return true
booWho([1, 2, 3]);
// should return false.
booWho(1);
// should return false.
