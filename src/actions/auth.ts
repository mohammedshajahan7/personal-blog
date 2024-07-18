import { defineAction, z } from "astro:actions"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth"

import { auth } from "@firebase/config"

export const createAccount = defineAction({
	accept: "form",
	input: z.object({
		email: z.string().email(),
		password: z.string(),
	}),
	handler: async ({ email, password }) => {
		/**
		 * firebase function create an account
		 * using email and password
		 * pass `email1` & `password` to `createUserWithEmailAndPassword` function create
		 * new account
		 */

		await createUserWithEmailAndPassword(auth, email, password)
	},
})

export const loginAccount = defineAction({
	accept: "form",
	input: z.object({
		email: z.string().email(),
		password: z.string(),
	}),

	handler: async ({ email, password }) => {
		await signInWithEmailAndPassword(auth, email, password)
	},
})

export const logoutAccount = defineAction({
	handler: async () => {
		await auth.signOut()
	},
})