import { BASE_PATH, TEMPLATES_PATH } from "../utils/index.js"
import type { NodePlopAPI, ActionType } from "plop"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("route", {
		description: "Create a new route",
		prompts: [
			{ type: "input", message: "Enter the route's name", name: "name" },
			{ type: "confirm", message: "Create a new model?", name: "model" },
		],
		actions: data => {
			const actions: Array<ActionType> = [
				"Creating your new route",
				{
					type: "add",
					path: `${BASE_PATH}/routes/{{>kebabName}}.ts`,
					templateFile: `${TEMPLATES_PATH}/route.hbs`,
				},
				"Creating server paths",
				{
					type: "modify",
					path: `${BASE_PATH}/utils/server-paths.ts`,
					template: `{{ constantCase name }}: "/{{>kebabName}}"\n\t$1`,
					pattern: /(\/\* Prepend path root - DO NOT REMOVE \*\/)/g,
				},
				{
					type: "modify",
					path: `${BASE_PATH}/utils/server-paths.ts`,
					template: `{{ constantCase name }}: {\n\t\tROOT: SERVER_PATH_ROOTS.{{constantCase name }},\n\t\tALL_{{constantCase name }}S: "/all-{{>kebabName}}s",\n\t\tGET_{{ constantCase name }}: (id = ":id") => \`{{>kebabName}}/\${id}\`\n\t},\n\t$1`,
					pattern: /(\/\* Prepend server path - DO NOT REMOVE \*\/)/g,
				},
				"Importing your new route to all the other routes and adding it to the router",
				{
					type: "modify",
					path: `${BASE_PATH}/routes/index.ts`,
					template: `import {{>kebabName}} from "./{{>kebabName}}"\n$1`,
					pattern:
						/(\/\* Prepend import new route - DO NOT REMOVE \*\/)/g,
				},
				{
					type: "modify",
					path: `${BASE_PATH}/routes/index.ts`,
					template: `router.use(SERVER_PATHS.{{ constantCase name }}.ROOT, {{>kebabName}})\n$1`,
					pattern: /(\/\* Prepend router use - DO NOT REMOVE \*\/)/g,
				},
			]

			if (data?.model) {
				actions.push(
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
						pattern:
							/(\/\* Prepend new model - DO NOT REMOVE \*\/)/g,
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
				)
			}

			return actions
		},
	})
}
