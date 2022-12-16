
module.exports = class Handlers {
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

    stringRotation(stringToRot, rotateAmount) {
        let initString = stringToRot;
        let modRotAount = initString.length - (rotateAmount % initString.length)

        let stringRes = initString.slice(modRotAount) + initString.slice(0, modRotAount)
        return ({ stringRes: stringRes })
    }
}




