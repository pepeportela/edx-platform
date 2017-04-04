(function(define) {
    'use strict';

    define([
        'js/learner_dashboard/views/program_details_view_2017'
    ],
    function(ProgramDetailsView) {
        return function(options) {
console.log('hello');
            var ProgramDetails = new ProgramDetailsView(options);
            return ProgramDetails;
        };
    });
}).call(this, define || RequireJS.define);
