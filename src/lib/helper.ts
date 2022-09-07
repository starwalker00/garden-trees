export const namedConsoleLog = (variableName: string, variableValue: any) => {
    console.log(`${variableName}:::::`);
    console.log(variableValue);
};

export const truncateEthAddress = (address: string) => {
    const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
};
