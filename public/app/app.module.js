"use strict";

angular.module("solr-am_1.1.12.directives", []);
angular.module("solr-am_1.1.12.factories", []);
angular.module("solr-am_1.1.12.services", ["solr-am_1.1.12.factories"]);
angular.module("solr-am_1.1.12.controllers", ["solr-am_1.1.12.services"]);

angular
	.module("solr-am_1.1.12", [
		"pelorus.services",

		"solr-am_1.1.12.directives",
		"solr-am_1.1.12.factories",
		"solr-am_1.1.12.services",
		"solr-am_1.1.12.controllers",
	])
	.run([function() {
		console.log("solr AM module is available!"); // eslint-disable-line no-console
	}]);
