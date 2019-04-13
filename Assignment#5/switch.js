function timerAdder(value1, label1, value2, label2) {
    // validate input
    value1 = typeof value1 === 'number' ? value1 : false
    value2 = typeof value2 === 'number' ? value2 : false
    label1 = typeof label1 === 'string' ? label1 : false
    label2 = typeof label2 === 'string' ? label2 : false

    if (value1 !== false && value2 !== false && label1 !== false && label2 !== false) { // If input is valid

        // Verify if the label provided for the value is correct
        if (isValidLabel(value1, label1) && isValidLabel(value2, label2)) {
            let smallestUnit = unitWeight(label1) <= unitWeight(label2) ? label1 : label2
            
            let convertedValue1 = convertValue(value1, label1, smallestUnit)
            let convertedValue2 = convertValue(value2, label2, smallestUnit)

            let finalSum = convertedValue1 + convertedValue2

            let result = maxUnit(finalSum, smallestUnit)
            return result
        } else {
            return false
        }
    } else { // If the input is invalid
        return false
    }
}

// Check if the label provided for the value is valid
function isValidLabel(value, label) {
    if (value > 1) {
        switch (label) {
            case 'seconds':
            case 'minutes':
            case 'hours':
            case 'days':
                return true
            default:
                return false
        }
    } else {
        switch (label) {
            case 'second':
            case 'minute':
            case 'hour':
            case 'day':
                return true
            default:
                return false
        }
    }
}

// Get the unit weight
function unitWeight(label) {
    switch (label) {
        case 'second':
        case 'seconds':
            return 1
        case 'minute':
        case 'minutes':
            return 2
        case 'hour':
        case 'hours':
            return 3
        case 'day':
        case 'days':
            return 4
        default:
            return false
    }
}

// Converts the value from one unit to another
function convertValue(value, unitFrom, unitTo) {
    switch (unitFrom) {
        // Convert seconds
        case 'second':
        case 'seconds':
            return value
        // Convert minute
        case 'minute':
        case 'minutes':
            switch (unitTo) {
                case 'second':
                case 'seconds':
                    return value * 60
                case 'minute':
                case 'minutes':
                    return value
            }
        // Convert hour
        case 'hour':
        case 'hours':
            switch (unitTo) {
                case 'second':
                case 'seconds':
                    return value * 60 * 60
                case 'minute':
                case 'minutes':
                    return value * 60
                case 'hour':
                case 'hours':
                    return value
            }
        // Convert day
        case 'day':
        case 'days':
            switch (unitTo) {
                case 'second':
                case 'seconds':
                    return value * 60 * 60 * 24
                case 'minute':
                case 'minutes':
                    return value * 60 * 24
                case 'hour':
                case 'hours':
                    return value * 24
                case 'day':
                case 'days':
                    return value
            }
    }
}

function maxUnit(value, unit) {
    let temp = value
    let remainder = 0;
    switch (unit) {
        case 'second':
        case 'seconds':
            remainder = temp % 60 // Check if the value can be represente in minute
            if (!remainder) {
                temp = temp / 60 // Convert to minute
                remainder = temp % 60 // Check if the value can be represente in hour

                if (!remainder) {
                    temp = temp / 60 // Convert to hour
                    remainder = temp % 24 // Check if the value can be represente in day

                    if (!remainder) {
                        temp = temp / 24 // Convert to day

                        return [temp, temp > 1 ? 'days' : 'day']
                    } else {
                        return [temp, temp > 1 ? 'hours' : 'hour']
                    }
                } else {
                    return [temp, temp > 1 ? 'minutes' : 'minute']
                }
            } else {
                return [temp, temp > 1 ? 'seconds' : 'second']
            }
        case 'minute':
        case 'minutes':
            remainder = temp % 60 // Check if the value can be represente in hour
            if (!remainder) {
                temp = temp / 60 // Convert to hour
                remainder = temp % 24 // Check if the value can be represente in day

                if (!remainder) {
                    temp = temp / 24 // Convert to day

                    return [temp, temp > 1 ? 'days' : 'day']
                } else {
                    return [temp, temp > 1 ? 'hours' : 'hour']
                }
            } else {
                return [temp, temp > 1 ? 'minutes' : 'minute']
            }
        case 'hour':
        case 'hours':
            remainder = temp % 24 // Check if the value can be represente in day
            if (!remainder) {
                temp = temp / 24 // Convert to day

                return [temp, temp > 1 ? 'days' : 'day']
            } else {
                return [temp, temp > 1 ? 'hours' : 'hour']
            }
        case 'day':
        case 'days':
            return [temp, temp > 1 ? 'days' : 'day']
    }
}

console.log(timerAdder(0, 'day', 1, 'day'))