"use strict";

angular.module("solr-am_1.1.8.directives", []);
angular.module("solr-am_1.1.8.factories", []);
angular.module("solr-am_1.1.8.services", ["solr-am_1.1.8.factories"]);
angular.module("solr-am_1.1.8.controllers", ["solr-am_1.1.8.services"]);

angular
	.module("solr-am_1.1.8", [
		"pelorus.services",

		"solr-am_1.1.8.directives",
		"solr-am_1.1.8.factories",
		"solr-am_1.1.8.services",
		"solr-am_1.1.8.controllers",
	])
	.run([function() {
		console.log("solr AM module is available!"); // eslint-disable-line no-console
	}]);
