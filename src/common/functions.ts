export function getArrayValue<T>(array?: T[]) {
    if (array && Array.isArray(array) === true) {
        return array;
    }

    return [];
}