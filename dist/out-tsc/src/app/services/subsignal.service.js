"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var config_1 = require("../config/config");
var operators_1 = require("rxjs/operators");
var SubsignalService = /** @class */ (function () {
    function SubsignalService(http) {
        this.http = http;
    }
    SubsignalService.prototype.loadSignals = function () {
        var url = config_1.URL_SERVICIOS + 'api/signals';
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }), operators_1.catchError(function (err) {
            return err;
        }));
    };
    SubsignalService.prototype.loadSignalsAll = function (desde) {
        if (desde === void 0) { desde = 0; }
        var url = config_1.URL_SERVICIOS + 'api/signalsall' + '?desde=' + desde;
        return this.http.get(url)
            .pipe(operators_1.map(function (resp) {
            return resp;
        }), operators_1.catchError(function (err) {
            return err;
        }));
    };
    SubsignalService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SubsignalService);
    return SubsignalService;
}());
exports.SubsignalService = SubsignalService;
//# sourceMappingURL=subsignal.service.js.map