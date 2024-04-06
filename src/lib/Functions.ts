/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

const shuffleArray = (array: number[]): number[] => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // Generate random index

		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
};

const populateCardsArray = (array: number[]): number[] => {
	for (let i = 0; i < 17; i++) {
		array.push(i, i);
	}
	return shuffleArray(array);
};
