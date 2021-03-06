/* Model
	templates: {[id: string]: string}
	params: {[id:string]: string | "the same thing recursively"}
*/
const fillTemplate = (templates, params, template = templates.main) => {
	let filledTemplate = template;
	Object.keys(params).forEach(key => {
		const value = params[key];
		let templateValue = typeof value === 'object' ? fillTemplate({ ...templates }, { ...value }, templates[key]) : value;
		filledTemplate = filledTemplate.replace(new RegExp(`\\{\\{${key}\\}\\}`, "gi"), templateValue);
	});
	return filledTemplate;
}
