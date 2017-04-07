// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  function upperToHyphenLower(match, offset, string) {
    return (offset ? '-' : '') + match.toLowerCase();
  }
  str = str.replace(/[A-Z]/g, upperToHyphenLower);
  str = str.replace(/ -/g, '-');
  str = str.replace(/ /g, '-');
  str = str.replace(/_/g, '');
  return str;
}

spinalCase("This Is Spinal Tap");
// should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap");
// should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show");
// should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh");
// should return "teletubbies-say-eh-oh".
