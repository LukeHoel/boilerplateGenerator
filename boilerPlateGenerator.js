/* Model
	templates: {[id: string]: string}
	params: {[id:string]: string | "the same thing recursively"}
*/
const fillTemplate = (templates, params, template) => {
	let filledTemplate = `${template || templates["main"]}`;
	Object.keys(params).forEach(key => {
		const value = params[key];
		let templateValue = typeof value === 'object' ? fillTemplate({ ...templates }, { ...value }, templates[key]) : value;
		filledTemplate = filledTemplate.replace(new RegExp(`\\{\\{${key}\\}\\}`, "gi"), templateValue);
	});
	return filledTemplate;
}

const testFillTemplate = () => {
	const templates = {
		main: "namespace test { {{class}} }",
		class: "class {{name}} {}"
	}
	return fillTemplate(templates, { class: { name : "EndOfTheWorld"} })
}
//console.log(testFillTemplate());