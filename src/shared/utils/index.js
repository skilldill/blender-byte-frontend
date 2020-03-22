export function shortText(text, countWords = 25) {
    let textParts = text.split(" ");

    if (textParts.length > countWords) {
        textParts = textParts.splice(0, 25);
        let prepareText = "";
        textParts.forEach(part => {
            prepareText += `${part} `;
        });

        return prepareText + "...";
    }

    return text;
}