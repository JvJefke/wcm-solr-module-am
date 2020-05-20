const { get } = require("lodash");

module.exports = (data, variables, options = { isRemove: false }) => {
	// Check if we need to call the solr API based on safeLabel of CT
	return {
		isValidProject: (
			(options.isRemove || get(data, "meta.published") === true) &&
			((get(data, "meta.contentType.meta.safeLabel") || "").toLowerCase() === "projecten" ||
				get(data, "meta.contentType") === variables.projectCT)
		),
		isToBeRemoved: !get(data, "fields.medium.website") || get(data, "meta.published") === false,
	};
};
