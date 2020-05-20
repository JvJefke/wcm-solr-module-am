const helpers = require("./helpers");
const variableHelper = require("../helpers/variables");
const { remove } = require("./remove");

module.exports = (data) => {
	// Get the latest variables
	variableHelper()
		.then((variables) => {
			const { isvalidProject, toBeRemoved } = helpers.validate(data, variables);

			if (isvalidProject && toBeRemoved) {
				remove(data);
			}

			if (!isvalidProject) {
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
