// Translate the provided string to pig latin.
<<<<<<< HEAD
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
=======
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
>>>>>>> 5140f322bd34bbebc50878c18978993a3854883b
  return str;
}

translatePigLatin("consonant");
<<<<<<< HEAD
// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
=======
translatePigLatin("california");
translatePigLatin("paragraphs");
// should return "aragraphspay".
translatePigLatin("glove");
// should return "oveglay".
translatePigLatin("eight");
// should return "eightway".
>>>>>>> 5140f322bd34bbebc50878c18978993a3854883b
