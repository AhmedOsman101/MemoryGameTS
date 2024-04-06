/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { atom } from "jotai";
import { FetchUsers, populateCardsArray } from "./Functions";

export const cardsAtom = atom(populateCardsArray());
export const usersAtom = atom(await FetchUsers());
