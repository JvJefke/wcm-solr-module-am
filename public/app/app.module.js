"use strict";

angular.module("solr-am_1.1.9.directives", []);
angular.module("solr-am_1.1.9.factories", []);
angular.module("solr-am_1.1.9.services", ["solr-am_1.1.9.factories"]);
angular.module("solr-am_1.1.9.controllers", ["solr-am_1.1.9.services"]);

angular
	.module("solr-am_1.1.9", [
		"pelorus.services",

		"solr-am_1.1.9.directives",
		"solr-am_1.1.9.factories",
		"solr-am_1.1.9.services",
		"solr-am_1.1.9.controllers",
	])
	.run([function() {
		console.log("solr AM module is available!"); // eslint-disable-line no-console
	}]);
