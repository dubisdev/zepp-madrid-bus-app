/**
 * Groups the elements of an array by a key produced by the provided keyGetter.
 * @template T
 * @template K - Type of key produced by keyGetter.
 * @param {T[]} array - Array of items to group.
 * @param  {(item: T) => K} keyGetter
 * @returns {Map<K, T[]>}
 */
export const groupBy = (array, keyGetter) => {
    const map = new Map();

    array.forEach((item) => {
        const key = keyGetter(item);

        const collection = map.get(key);

        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });

    return map;
}
