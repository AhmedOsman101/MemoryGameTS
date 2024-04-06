/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from "axios";

export const shuffleArray = (array: number[]): number[] => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // Generate random index

		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
};

export const populateCardsArray = (): number[] => {
	const array: number[] = [];
	for (let i = 0; i < 6; i++) {
		array.push(i, i);
	}
	return shuffleArray(array);
};

export const FetchUsers = async () => {
	const users = (await axios.get("http://127.0.0.1:3300")).data;
	return JSON.parse(users);
};
