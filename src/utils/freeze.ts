/**
 * Recursively freezes an object and its properties.
 *
 * @param obj - The object to freeze.
 * @returns The frozen object.
 */
function deepFreeze<T extends object>(obj: T): T {
	if (obj === null || typeof obj !== "object") {
		return obj;
	}

	Object.freeze(obj);

	const propNames = Object.getOwnPropertyNames(obj);

	for (const name of propNames) {
		const value = (obj as Record<string, unknown>)[name];
		if (value && typeof value === "object") {
			deepFreeze(value);
		}
	}

	return obj;
}

export { deepFreeze };
