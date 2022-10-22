const mostFrequentChar = (str) => {
    let strTemp = [], max = 0, maxChar = str[0];

    for (i = 0; i < str.length; i++) {
        if (strTemp[str[i]] == undefined) {
            strTemp[str[i]] = 1;
        } else {
            if (max < ++strTemp[str[i]]) {
                maxChar = str[i];
                max = strTemp[str[i]];
            }

        }
    }

    return maxChar;


}


console.log(mostFrequentChar("potato"));