"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, outputTarger) {
        this.analyzer = analyzer;
        this.outputTarger = outputTarger;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarger.print(output);
    }
}
exports.Summary = Summary;
