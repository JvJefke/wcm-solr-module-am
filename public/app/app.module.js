"use strict";

angular.module("solr-am_1.1.11.directives", []);
angular.module("solr-am_1.1.11.factories", []);
angular.module("solr-am_1.1.11.services", ["solr-am_1.1.11.factories"]);
angular.module("solr-am_1.1.11.controllers", ["solr-am_1.1.11.services"]);

angular
	.module("solr-am_1.1.11", [
		"pelorus.services",

		"solr-am_1.1.11.directives",
		"solr-am_1.1.11.factories",
		"solr-am_1.1.11.services",
		"solr-am_1.1.11.controllers",
	])
	.run([function() {
		console.log("solr AM module is available!"); // eslint-disable-line no-console
	}]);
