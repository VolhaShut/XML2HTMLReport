'use strict';
const _=require('lodash');

class HTMLReporter{
    constructor(data){
        this.testSuits=data;
    }

    createReport(){
        let testSuit=_.flattenDeep(_.map(this.testSuits,'testsuite'));
        console.log(testSuit);

    }
}
module.exports = HTMLReporter;