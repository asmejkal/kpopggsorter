/**
 * @typedef {{name: string, key: string, tooltip?: string, checked?: boolean, sub?: {name: string, tooltip?: string, checked?: string}[]}[]} Options
 * @typedef {{name: string, img: string, group?: string[], opts?: Object<string, boolean|number[]>}} CharData
*/

/**
 * Data set. Characters will be removed from the sorting array based on selected options, working down the array.
 * 
 * @type {Object.<string, {options: Options, characterData: CharData}>}
*/
const dataSet = {};

/** 
 * Data set version, in YYYY-MM-DD form.
 * 
 * @example '2018-02-20'
*/
let dataSetVersion = '';

/**
 * Image root, will be appended to the start of every image URL.
 */
// Root path for idol images.
// Images are served from a Cloudflare R2 bucket.
// Public bucket URL: https://pub-d241d32de5134ba190733bade029bd7e.r2.dev/
const imageRoot = 'https://pub-d241d32de5134ba190733bade029bd7e.r2.dev/';