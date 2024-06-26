/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

export const shuffleArray = (array: number[]): number[] => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // Generate random index

		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
};

export const populateCardsArray = (): number[] => {
	const array: number[] = [];
	for (let i = 0; i < 9; i++) {
		array.push(i, i);
	}
	return shuffleArray(array);
};

export const FetchUsers = async () => {
	const users = [
		{
			id: "1",
			images: [
				"https://i.imgur.com/QkIa5tT.jpeg",
				"https://i.imgur.com/jb5Yu0h.jpeg",
				"https://i.imgur.com/UlxxXyG.jpeg",
			],
		},
		{
			id: "2",
			images: [
				"https://i.imgur.com/1twoaDy.jpeg",
				"https://i.imgur.com/FDwQgLy.jpeg",
				"https://i.imgur.com/kg1ZhhH.jpeg",
			],
		},
		{
			id: "3",
			images: [
				"https://i.imgur.com/cHddUCu.jpeg",
				"https://i.imgur.com/CFOjAgK.jpeg",
				"https://i.imgur.com/wbIMMme.jpeg",
			],
		},
		{
			id: "4",
			images: [
				"https://i.imgur.com/R2PN9Wq.jpeg",
				"https://i.imgur.com/IvxMPFr.jpeg",
				"https://i.imgur.com/7eW9nXP.jpeg",
			],
		},
		{
			id: "5",
			images: [
				"https://i.imgur.com/cSytoSD.jpeg",
				"https://i.imgur.com/WwKucXb.jpeg",
				"https://i.imgur.com/cE2Dxh9.jpeg",
			],
		},
		{
			id: "6",
			images: [
				"https://i.imgur.com/ZKGofuB.jpeg",
				"https://i.imgur.com/GJi73H0.jpeg",
				"https://i.imgur.com/633Fqrz.jpeg",
			],
		},
		{
			id: "7",
			images: [
				"https://i.imgur.com/9LFjwpI.jpeg",
				"https://i.imgur.com/vzrTgUR.jpeg",
				"https://i.imgur.com/p5NdI6n.jpeg",
			],
		},
		{
			id: "8",
			images: [
				"https://i.imgur.com/R3iobJA.jpeg",
				"https://i.imgur.com/Wv2KTsf.jpeg",
				"https://i.imgur.com/76HAxcA.jpeg",
			],
		},
		{
			id: "9",
			images: [
				"https://i.imgur.com/wXuQ7bm.jpeg",
				"https://i.imgur.com/BZrIEmb.jpeg",
				"https://i.imgur.com/KcT6BE0.jpeg",
			],
		},
		{
			id: "10",
			images: [
				"https://i.imgur.com/cBuLvBi.jpeg",
				"https://i.imgur.com/N1GkCIR.jpeg",
				"https://i.imgur.com/kKc9A5p.jpeg",
			],
		},
		{
			id: "11",
			images: [
				"https://i.imgur.com/KeqG6r4.jpeg",
				"https://i.imgur.com/xGQOw3p.jpeg",
				"https://i.imgur.com/oO5OUjb.jpeg",
			],
		},
		{
			id: "12",
			images: [
				"https://i.imgur.com/eGOUveI.jpeg",
				"https://i.imgur.com/UcsGO7E.jpeg",
				"https://i.imgur.com/NLn4e7S.jpeg",
			],
		},
		{
			id: "13",
			images: [
				"https://i.imgur.com/axsyGpD.jpeg",
				"https://i.imgur.com/T8oq9X2.jpeg",
				"https://i.imgur.com/J6MinJn.jpeg",
			],
		},
		{
			id: "14",
			images: [
				"https://i.imgur.com/Y54Bt8J.jpeg",
				"https://i.imgur.com/SZPDSgy.jpeg",
				"https://i.imgur.com/sJv4Xx0.jpeg",
			],
		},
		{
			id: "15",
			images: [
				"https://i.imgur.com/9DqEOV5.jpeg",
				"https://i.imgur.com/ae0AEYn.jpeg",
				"https://i.imgur.com/mZ4rUjj.jpeg",
			],
		},
		{
			id: "16",
			images: [
				"https://i.imgur.com/ZANVnHE.jpeg",
				"https://i.imgur.com/Ro5z6Tn.jpeg",
				"https://i.imgur.com/woA93Li.jpeg",
			],
		},
		{
			id: "17",
			images: [
				"https://i.imgur.com/yVeIeDa.jpeg",
				"https://i.imgur.com/jByJ4ih.jpeg",
				"https://i.imgur.com/KXj6Tpb.jpeg",
			],
		},
		{
			id: "18",
			images: [
				"https://i.imgur.com/SolkFEB.jpeg",
				"https://i.imgur.com/KIGW49u.jpeg",
				"https://i.imgur.com/mWwek7p.jpeg",
			],
		},
		{
			id: "19",
			images: [
				"https://i.imgur.com/keVCVIa.jpeg",
				"https://i.imgur.com/afHY7v2.jpeg",
				"https://i.imgur.com/yAOihUe.jpeg",
			],
		},
		{
			id: "20",
			images: [
				"https://i.imgur.com/w3Y8NwQ.jpeg",
				"https://i.imgur.com/WJFOGIC.jpeg",
				"https://i.imgur.com/dV4Nklf.jpeg",
			],
		},
		{
			id: "21",
			images: [
				"https://i.imgur.com/OKn1KFI.jpeg",
				"https://i.imgur.com/G4f21Ai.jpeg",
				"https://i.imgur.com/Z9oKRVJ.jpeg",
			],
		},
		{
			id: "22",
			images: [
				"https://i.imgur.com/ItHcq7o.jpeg",
				"https://i.imgur.com/55GM3XZ.jpeg",
				"https://i.imgur.com/tcNJxoW.jpeg",
			],
		},
		{
			id: "23",
			images: [
				"https://i.imgur.com/YaSqa06.jpeg",
				"https://i.imgur.com/isQAliJ.jpeg",
				"https://i.imgur.com/5B8UQfh.jpeg",
			],
		},
		{
			id: "24",
			images: [
				"https://i.imgur.com/yb9UQKL.jpeg",
				"https://i.imgur.com/m2owtQG.jpeg",
				"https://i.imgur.com/bNiORct.jpeg",
			],
		},
		{
			id: "25",
			images: [
				"https://i.imgur.com/LGk9Jn2.jpeg",
				"https://i.imgur.com/1ttYWaI.jpeg",
				"https://i.imgur.com/sPRWnJH.jpeg",
			],
		},
		{
			id: "26",
			images: [
				"https://i.imgur.com/Qphac99.jpeg",
				"https://i.imgur.com/dJjpEgG.jpeg",
				"https://i.imgur.com/MxJyADq.jpeg",
			],
		},
		{
			id: "27",
			images: [
				"https://i.imgur.com/DMQHGA0.jpeg",
				"https://i.imgur.com/qrs9QBg.jpeg",
				"https://i.imgur.com/XVp8T1I.jpeg",
			],
		},
		{
			id: "28",
			images: [
				"https://i.imgur.com/NWIJKUj.jpeg",
				"https://i.imgur.com/Jn1YSLk.jpeg",
				"https://i.imgur.com/VNZRvx5.jpeg",
			],
		},
		{
			id: "29",
			images: [
				"https://i.imgur.com/6wkyyIN.jpeg",
				"https://i.imgur.com/Ald3Rec.jpeg",
				"https://i.imgur.com/dIqo03c.jpeg",
			],
		},
		{
			id: "30",
			images: [
				"https://i.imgur.com/4lTaHfF.jpeg",
				"https://i.imgur.com/JktHE1C.jpeg",
				"https://i.imgur.com/cQeXQMi.jpeg",
			],
		},
		{
			id: "31",
			images: [
				"https://i.imgur.com/3oXNBst.jpeg",
				"https://i.imgur.com/ErYYZnT.jpeg",
				"https://i.imgur.com/boBPwYW.jpeg",
			],
		},
		{
			id: "32",
			images: [
				"https://i.imgur.com/qNOjJje.jpeg",
				"https://i.imgur.com/NjfCFnu.jpeg",
				"https://i.imgur.com/eYtvXS1.jpeg",
			],
		},
		{
			id: "33",
			images: [
				"https://i.imgur.com/62gGzeF.jpeg",
				"https://i.imgur.com/5MoPuFM.jpeg",
				"https://i.imgur.com/sUVj7pK.jpeg",
			],
		},
		{
			id: "34",
			images: [
				"https://i.imgur.com/9qrmE1b.jpeg",
				"https://i.imgur.com/wqKxBVH.jpeg",
				"https://i.imgur.com/sWSV6DK.jpeg",
			],
		},
		{
			id: "35",
			images: [
				"https://i.imgur.com/hKcMNJs.jpeg",
				"https://i.imgur.com/NYToymX.jpeg",
				"https://i.imgur.com/HiiapCt.jpeg",
			],
		},
		{
			id: "36",
			images: [
				"https://i.imgur.com/mcW42Gi.jpeg",
				"https://i.imgur.com/mhn7qsF.jpeg",
				"https://i.imgur.com/F8vhnFJ.jpeg",
			],
		},
		{
			id: "37",
			images: [
				"https://i.imgur.com/npLfCGq.jpeg",
				"https://i.imgur.com/vYim3gj.jpeg",
				"https://i.imgur.com/HxuHwBO.jpeg",
			],
		},
		{
			id: "38",
			images: [
				"https://i.imgur.com/HqYqLnW.jpeg",
				"https://i.imgur.com/RlDGnZw.jpeg",
				"https://i.imgur.com/qa0O6fg.jpeg",
			],
		},
		{
			id: "39",
			images: [
				"https://i.imgur.com/AzAY4Ed.jpeg",
				"https://i.imgur.com/umfnS9P.jpeg",
				"https://i.imgur.com/uFyuvLg.jpeg",
			],
		},
		{
			id: "40",
			images: [
				"https://i.imgur.com/Au8J9sX.jpeg",
				"https://i.imgur.com/gdr8BW2.jpeg",
				"https://i.imgur.com/KDCZxnJ.jpeg",
			],
		},
		{
			id: "41",
			images: [
				"https://i.imgur.com/sC0ztOB.jpeg",
				"https://i.imgur.com/Jf9DL9R.jpeg",
				"https://i.imgur.com/R1IN95T.jpeg",
			],
		},
		{
			id: "42",
			images: [
				"https://i.imgur.com/BG8J0Fj.jpg",
				"https://i.imgur.com/ujHBpCX.jpg",
				"https://i.imgur.com/WHeVL9H.jpg",
			],
		},
		{
			id: "43",
			images: [
				"https://i.imgur.com/Ex5x3IU.jpg",
				"https://i.imgur.com/z7wAQwe.jpg",
				"https://i.imgur.com/kc0Dj9S.jpg",
			],
		},
		{
			id: "44",
			images: [
				"https://i.imgur.com/xPDwUb3.jpg",
				"https://i.imgur.com/3rfp691.jpg",
				"https://i.imgur.com/kG05a29.jpg",
			],
		},
		{
			id: "45",
			images: [
				"https://i.imgur.com/jVfoZnP.jpg",
				"https://i.imgur.com/Tnl15XK.jpg",
				"https://i.imgur.com/7OqTPO6.jpg",
			],
		},
		{
			id: "46",
			images: [
				"https://i.imgur.com/Lqaqz59.jpg",
				"https://i.imgur.com/uSqWK0m.jpg",
				"https://i.imgur.com/atWACf1.jpg",
			],
		},
		{
			id: "47",
			images: [
				"https://i.imgur.com/0qQBkxX.jpg",
				"https://i.imgur.com/I5g1DoE.jpg",
				"https://i.imgur.com/myfFQBW.jpg",
			],
		},
		{
			id: "48",
			images: [
				"https://i.imgur.com/TF0pXdL.jpg",
				"https://i.imgur.com/BLDByXP.jpg",
				"https://i.imgur.com/b7trwCv.jpg",
			],
		},
	];
	return users;
};

export const checkWin = (matched: number[]) => {
	return matched.length == 18;
};

export const findMatchingPairs = (
	FlippedCards: Set<number>,
	FlippedCardsIds: number[],
) => {
	let temp = new Set<number>();
	const flippedCardsArray = Array.from(FlippedCards);

	for (let i: number = 0; i < FlippedCardsIds.length; i++) {
		for (let j: number = 0; j < FlippedCardsIds.length; j++) {
			if (i == j) continue;

			if (FlippedCardsIds[i] == FlippedCardsIds[j]) {
				temp.add(flippedCardsArray[i]);
				temp.add(flippedCardsArray[j]);
			}
		}
	}

	const result: number[] = Array.from(temp);

	return result;
};

export const checkMatch = (index: number, matched: number[]) => {
	return matched.includes(index);
};
