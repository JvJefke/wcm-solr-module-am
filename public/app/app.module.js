"use strict";

angular.module("solr-am_1.1.3.directives", []);
angular.module("solr-am_1.1.3.factories", []);
angular.module("solr-am_1.1.3.services", ["solr-am_1.1.3.factories"]);
angular.module("solr-am_1.1.3.controllers", ["solr-am_1.1.3.services"]);

angular
	.module("solr-am_1.1.3", [
		"pelorus.services",

		"solr-am_1.1.3.directives",
		"solr-am_1.1.3.factories",
		"solr-am_1.1.3.services",
		"solr-am_1.1.3.controllers",
	])
	.run([function() {
		console.log("solr AM module is available!"); // eslint-disable-line no-console
	}]);
