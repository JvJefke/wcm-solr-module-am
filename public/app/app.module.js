"use strict";

angular.module("solr-am_1.1.10.directives", []);
angular.module("solr-am_1.1.10.factories", []);
angular.module("solr-am_1.1.10.services", ["solr-am_1.1.10.factories"]);
angular.module("solr-am_1.1.10.controllers", ["solr-am_1.1.10.services"]);

angular
	.module("solr-am_1.1.10", [
		"pelorus.services",

		"solr-am_1.1.10.directives",
		"solr-am_1.1.10.factories",
		"solr-am_1.1.10.services",
		"solr-am_1.1.10.controllers",
	])
	.run([function() {
		console.log("solr AM module is available!"); // eslint-disable-line no-console
	}]);
