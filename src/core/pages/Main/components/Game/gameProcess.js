export const TRACK = "..................................................................................................."
export const EMPTY_HACK_PATH = "book....................................................................................................hacker"
export const TEMPLATE_FULL_PATH = "book============================================>hacker"
const COUNT_ITTERS = 50;
const DELAY = 2500;

export function gameProcess(stroke, callback) {
    for(let i = 0; i < COUNT_ITTERS; i++) {
        new Promise((res, rej) => {
            setTimeout(() => {
                res();
            }, i * DELAY)
        })
        .then(() => callback(stroke.replace(".", "=>")))
    }
}