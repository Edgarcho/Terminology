"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n      <a class=\"navbar-brand\" href=\"#\">Terminology</a>\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"https://www.codecademy.com/articles/glossary-html\">HTML Glossary</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"https://www.codecademy.com/articles/glossary-css\">CSS Glossary</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"http://www.oracle.com/technetwork/java/glossary-135216.html\">Java Glossary</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript\">JavaScript Resource</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map