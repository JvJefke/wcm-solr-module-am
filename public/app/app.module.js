"use strict";

angular.module("solr-am_1.1.7.directives", []);
angular.module("solr-am_1.1.7.factories", []);
angular.module("solr-am_1.1.7.services", ["solr-am_1.1.7.factories"]);
angular.module("solr-am_1.1.7.controllers", ["solr-am_1.1.7.services"]);

angular
	.module("solr-am_1.1.7", [
		"pelorus.services",

		"solr-am_1.1.7.directives",
		"solr-am_1.1.7.factories",
		"solr-am_1.1.7.services",
		"solr-am_1.1.7.controllers",
	])
	.run([function() {
		console.log("solr AM module is available!"); // eslint-disable-line no-console
	}]);
