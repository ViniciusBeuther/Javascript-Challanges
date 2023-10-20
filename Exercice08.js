// Interplanetary Library
// Write a function that receive a string that contain a fullname and return a string with all names, except for the last one, abbreviated and the last name in uppercase before the abbreviations separated by comma

const name = 'Isaac Larrubia Ferreira Pontes'
const nameArr = name.split(' ')
const finalName = []

nameArr.forEach(name => {
    if (nameArr[nameArr.length - 1] === name){
        finalName.splice(0, 0, name.toUpperCase())
    } else {
        finalName.push(convertName(name + ',').toUpperCase())
    }
})

function convertName(nameToConvert) {
    return nameToConvert.replace(/([a-zA-Z]).*/, '$1.')
}

finalNameStr = finalName.join(' ')
console.log(finalNameStr)
