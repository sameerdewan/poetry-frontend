function errorParser(message) {
    if (message.includes('E11000 duplicate')) {
        const parsedKeyField = message.substring(message.indexOf('{'));
        const dupKey = parsedKeyField.substring(
            parsedKeyField.indexOf('{') + 2,
            parsedKeyField.indexOf(':')
        );
        return `The ${dupKey} already exists`;
    }
    return message;
}

export default errorParser;
