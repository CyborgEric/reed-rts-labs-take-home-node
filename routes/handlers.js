
module.exports = class Handlers {

    /*
    numbers: Array of ints
    comp: Int comparator
    */
    handleAboveBelow(numbers, comp) {

        let above = 0;
        let below = 0;

        //Spec doesn't say what to do if equal, intentionally ignoring case and asking about it
        numbers.forEach((num) => {
            if (num > comp) {
                above++
            } else if (num < comp) {
                below++
            }
        })
        return ({ above: above, below: below })
    }

    /*
    stringToRot: String to rotate
    rotateAmount: Int to rotate by
    */
    stringRotation(stringToRot, rotateAmount) {
        let initString = stringToRot;
        let modRotAount = initString.length - (rotateAmount % initString.length)

        let stringRes = initString.slice(modRotAount) + initString.slice(0, modRotAount)
        return ({ stringRes: stringRes })
    }
}




