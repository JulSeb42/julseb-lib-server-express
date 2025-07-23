import { BASE_PATH, TEMPLATES_PATH } from "../utils/index.js"
import type { NodePlopAPI, ActionType } from "plop"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("type", {
		description: "Create a TS type",
		prompts: [
			{ type: "input", name: "name", message: "Enter type's name" },
			{
				type: "confirm",
				name: "interface",
				message: "Create as interface?",
				default: false,
			},
		],
		actions: data => {
			const actions: Array<ActionType> = []

			if (data?.interface) {
				actions.push(
					"Creating your new interface",
					{
						type: "add",
						path: `${BASE_PATH}/types/{{>pascalName}}.interface.ts`,
						templateFile: `${TEMPLATES_PATH}/interface.hbs`,
					},
					"Exporting your new interface",
					{
						type: "modify",
						path: `${BASE_PATH}/types/index.ts`,
						template: `export * from "./{{>pascalName}}.interface"\n$1`,
						pattern: /(\/\* Prepend export - DO NOT REMOVE \*\/)/g,
					},
				)
				// create file
				// export file
			} else {
				actions.push(
					"Creating your new type",
					{
						type: "add",
						path: `${BASE_PATH}/types/{{>pascalName}}.type.ts`,
						templateFile: `${TEMPLATES_PATH}/type.hbs`,
					},
					"Exporting your new type",
					{
						type: "modify",
						path: `${BASE_PATH}/types/index.ts`,
						template: `export * from "./{{>pascalName}}.type"\n$1`,
						pattern: /(\/\* Prepend export - DO NOT REMOVE \*\/)/g,
					},
				)
			}

			return actions
		},
	})
}
