// @ts-check
import { defineConfig } from "rolldown";

export default defineConfig([
	{
		input: "some-dep-rolldown/index.js",
		output: {
			dir: "some-dep-rolldown/dist",
		},
	},
	{
		input: "rolldown-project/entry.js",
		output: {
			dir: "rolldown-project/dist",
		},
	},
]);
