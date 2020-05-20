const { get, cloneDeep } = require("lodash");

const helpers = require("./helpers");
const variableHelper = require("../helpers/variables");
const { remove } = require("./remove");

module.exports = (data) => {
	const content = get(data, "toJSON", false) ? data.toJSON() : cloneDeep(data);

	// Get the latest variables
	variableHelper()
		.then((variables) => {
			const validated = helpers.validate(content, variables);

			console.log(content);

			console.log(validated);

			if (validated.isValidProject && validated.isToBeRemoved) {
				remove(content).catch(() => console.log("remove of updated item failed", get(content, "id")));  // eslint-disable-line
				throw { log: false };
			}

			if (!validated.isValidProject) {
				throw { log: false };
			}

			return variables;
		})
		.then((variables) => helpers.map.init(content, variables, "upsert")) // Set start object
		.then(helpers.token)
		.then(helpers.map.taxonomy)
		.then(helpers.map.prepare)
		.then(helpers.request)
		.catch((err) => {
			if (err && err.log === false) {
				return;
			}

			console.log("Oh ooh...", err); // eslint-disable-line no-console
		});
};
