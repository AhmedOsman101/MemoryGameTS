/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { atom } from "jotai";
import { FetchUsers, populateCardsArray } from "./Functions";

export const CardsAtom = atom(populateCardsArray());

export const UsersAtom = atom(async () => await FetchUsers());

export const FlippedCardsAtom = atom(new Set<number>());

export const FlippedCardsIdsAtom = atom<number[]>([]);

export const MatchedAtom = atom<number[]>([]);
