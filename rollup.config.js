// @ts-check
import nodeResolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

export default defineConfig([
	{
		input: "some-dep-rollup/index.js",
		output: {
			dir: "some-dep-rollup/dist",
		},
	},
	{
		input: "rollup-project/entry.js",
		external: [],
		output: {
			dir: "rollup-project/dist",
		},
		plugins: [nodeResolve()],
	},
]);
