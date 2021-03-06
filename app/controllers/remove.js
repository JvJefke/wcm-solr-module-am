const { get, cloneDeep } = require("lodash");
const helpers = require("./helpers");
const VariableHelper = require("../helpers/variables");
const { emitter } = require("@wcm/module-helper");

const remove = module.exports.remove = (data) => {
	const content = get(data, "toJSON", false) ? data.toJSON() : cloneDeep(data);

	// Get the latest variables
	VariableHelper()
		.then((variables) => {
			const validated = helpers.validate(data, variables, { isRemove: true });

			if (!validated.isValidProject) {
				throw { log: false };
			}

			return variables;
		})
		.then((variables) => helpers.map.init(content, variables, "remove")) // Set start object
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

emitter.on("content.unpublished", remove);
emitter.on("content.removed", remove);
