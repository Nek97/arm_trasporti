import en_GB from "./en_GB.json"
import _It_IT from "./it_IT.json"

var it_IT = { ...en_GB, ..._It_IT }

/**
 * Pass a lang code and return a formatted vocabulary
 * 
 * @param {string} string Lang code like en_GB.
 *
 * @return {object} Return a object with all formatted string in the code language.
 */
export function Vocabulary(code) {
    switch (code) {
        case 'en_GB':
            return en_GB
        case 'it_IT':
            return it_IT
        default:
            return it_IT
    }
}

/**
 * Get code and info or all languages
 *
 * @return {object} Return a object with language_code && language_info data.
 */
export function GetLanguages() {
    return [
        {
            language_code: it_IT.language_code,
            language_info: it_IT.language_info
        },
        {
            language_code: en_GB.language_code,
            language_info: en_GB.language_info
        },
    ]
}

/**
 * Pass a string with markers and return the complete string
 * 
 * @prototype StringFormat('Set {0} as realm, set {1} as launcher!', 'Blackfrost', 'AS')
 * 
 * @param {string} string The string with all markers.
 * @param {string} string A string for every marker.
 */
export function StringCompletion(format) {
    var args = Array.prototype.slice.call(arguments, 1)
    return format.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : ''
    })
}