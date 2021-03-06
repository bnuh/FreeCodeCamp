// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    if(/[aeiou]/i.test(str.charAt(0))){ str += "way" }
    else {
        var i = 0;
        while (!(/[aeiou]/i.test(str.charAt(i)))){ i++ }
        str = str.substr(i) + str.substr(0, i) + "ay";
    }
  return str;
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("paragraphs");
// should return "aragraphspay".
translatePigLatin("glove");
// should return "oveglay".
translatePigLatin("eight");
// should return "eightway".
