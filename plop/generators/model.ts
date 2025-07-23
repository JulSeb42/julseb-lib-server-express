import { BASE_PATH, TEMPLATES_PATH } from "../utils/index.js"
import type { NodePlopAPI, ActionType } from "plop"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("model", {
		description: "Create a Mongoose model",
		prompts: [
			{ type: "input", name: "name", message: "Enter model's name" },
		],
		actions: [
			"Creating your new model",
			{
				type: "add",
				path: `${BASE_PATH}/models/{{>pascalName}}.model.ts`,
				templateFile: `${TEMPLATES_PATH}/model.hbs`,
			},
			"Exporting your new model",
			{
				type: "modify",
				path: `${BASE_PATH}/models/index.ts`,
				template: 'export * from "./{{>pascalName}}.model"\n$1',
				pattern: /(\/\* Prepend new model - DO NOT REMOVE \*\/)/g,
			},
			"Creating a new type for your model",
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
		],
	})
}
