"use strict";

angular.module("solr-am_1.1.2.directives", []);
angular.module("solr-am_1.1.2.factories", []);
angular.module("solr-am_1.1.2.services", ["solr-am_1.1.2.factories"]);
angular.module("solr-am_1.1.2.controllers", ["solr-am_1.1.2.services"]);

angular
	.module("solr-am_1.1.2", [
		"pelorus.services",

		"solr-am_1.1.2.directives",
		"solr-am_1.1.2.factories",
		"solr-am_1.1.2.services",
		"solr-am_1.1.2.controllers",
	])
	.run([function() {
		console.log("solr AM module is available!"); // eslint-disable-line no-console
	}]);
