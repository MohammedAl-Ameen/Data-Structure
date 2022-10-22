const anagrams = (string1, string2) => {

    let string1Value = 0, string2Value = 0;

    for (let i = 0; i < string1.length; i++) {
        if (string1.length != string2.length) {
            return false;
        }

        string1 = string1.toLowerCase();
        string2 = string2.toLowerCase();

        string1Value += string1[i].charCodeAt();
        string2Value += string2[i].charCodeAt();
    }

    if (string1Value == string2Value) {
        return true;
    } else {
        return false;
    }
}


console.log(anagrams("monkeyswrite", "newyorktimes"));