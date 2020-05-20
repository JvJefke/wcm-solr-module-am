const { get } = require("lodash");

const helpers = require("./helpers");
const variableHelper = require("../helpers/variables");
const { remove } = require("./remove");

module.exports = (data) => {
	// Get the latest variables
	variableHelper()
		.then((variables) => {
			const validated = helpers.validate(data, variables);

			console.log(data);

			console.log(validated.isvalidProject, validated.toBeRemoved);

			if (validated.isvalidProject && validated.toBeRemoved) {
				remove(data).catch(() => console.log("remove of updated item failed", get(data, "id")));  // eslint-disable-line
				throw { log: false };
			}

			if (!validated.isvalidProject) {
				throw { log: false };
			}

			return variables;
		})
		.then((variables) => helpers.map.init(data, variables, "upsert")) // Set start object
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
