export const test = async (e1: any, e2: any) => {
	const check = e1 === e2;
	if (check) {
		console.log(`Test Passed: ${e1} === ${e2}`);
	} else {
		throw new Error(`Test Failed: Expected ${e2}, but got ${e1}`);
	}
};

export async function checkItemExists(idToCheck: string, changes: any[]) {
	const found = changes.some((change) =>
		change.items.some((item: { id: string }) => item.id === idToCheck)
	);
	if (found) {
		console.log(`Test Passed: Changes ID ${idToCheck}`);
	} else {
		throw new Error(`Test Failed: Changes ID ${idToCheck}`);
	}
}
