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
var ControlComponent = /** @class */ (function () {
    function ControlComponent() {
        this.puntero = 'pointer';
    }
    ControlComponent.prototype.ngOnInit = function () {
    };
    ControlComponent.prototype.clickImagen = function (e) {
        var posX = 0;
        var posY = 0;
        posX = e.clientX;
        posY = e.clientY;
        console.log('posX', posX);
        console.log('posY', posY);
    };
    ControlComponent.prototype.overImagen = function (e) {
        var posX = 0;
        var posY = 0;
        posX = e.clientX;
        posY = e.clientY;
        console.log('posX', posX);
        console.log('posY', posY);
        var dentro = this.dentroDeArea(posX, posY, 797, 963, 191, 452);
        if (dentro) {
            this.puntero = 'dentroFig1';
        }
        else {
            this.puntero = '';
        }
    };
    ControlComponent.prototype.dentroDeArea = function (posX, posY, limXd, limXu, limYd, limYu) {
        var dentro = false;
        if (posX <= limXu && posX >= limXd && posY <= limYu && posY >= limYd) {
            dentro = true;
        }
        return dentro;
    };
    ControlComponent = __decorate([
        core_1.Component({
            selector: 'app-control',
            templateUrl: './control.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ControlComponent);
    return ControlComponent;
}());
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map