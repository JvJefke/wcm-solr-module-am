"use strict";

angular.module("solr-am_1.1.13.directives", []);
angular.module("solr-am_1.1.13.factories", []);
angular.module("solr-am_1.1.13.services", ["solr-am_1.1.13.factories"]);
angular.module("solr-am_1.1.13.controllers", ["solr-am_1.1.13.services"]);

angular
	.module("solr-am_1.1.13", [
		"pelorus.services",

		"solr-am_1.1.13.directives",
		"solr-am_1.1.13.factories",
		"solr-am_1.1.13.services",
		"solr-am_1.1.13.controllers",
	])
	.run([function() {
		console.log("solr AM module is available!"); // eslint-disable-line no-console
	}]);
