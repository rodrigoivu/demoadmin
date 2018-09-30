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
var subsignal_service_1 = require("../../services/subsignal.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_subsignalService) {
        var _this = this;
        this._subsignalService = _subsignalService;
        this.signals = [];
        this.signalsAll = [];
        this.valores = [];
        this.signal1 = [];
        this.signal2 = [];
        this.horas = [];
        this.desde = 0;
        this.totalRegistros = 0;
        // lineChart
        // tslint:disable-next-line:max-line-length
        this.lineChartData = [{ data: [65, 39, 80, 15, 76, 35, 40], label: 'Nivel estanque entrada' }, { data: [12, 34, 55, 32, 32, 11, 60], label: 'Nivel estanque salida' }];
        this.lineChartLabels = ['', '', '', '', '', '', ''];
        this.lineChartOptions = {
            responsive: true,
            animation: false
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(0,158,251,0.1)',
                borderColor: '#009efb',
                pointBackgroundColor: '#009efb',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#009efb'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        var obs = new rxjs_1.Observable(function (observer) {
            var intervalo = setInterval(function () {
                observer.next();
            }, 10000);
        });
        obs.pipe(operators_1.retry())
            .subscribe(function () {
            _this.mostrarSignal();
        });
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.mostrarSignal();
    };
    DashboardComponent.prototype.cambiarDesde = function (valor) {
        var desde = this.desde + valor;
        if (desde >= this.totalRegistros) {
            return;
        }
        if (desde < 0) {
            return;
        }
        this.desde += valor;
        this.mostrarSignalTabla();
    };
    DashboardComponent.prototype.mostrarSignal = function () {
        var _this = this;
        this._subsignalService.loadSignals()
            .subscribe(function (resp) {
            _this.signals = resp.signals;
            _this.totalRegistros = resp.total;
            _this.analizarInfo();
        });
    };
    DashboardComponent.prototype.mostrarSignalTabla = function () {
        var _this = this;
        this._subsignalService.loadSignalsAll(this.desde)
            .subscribe(function (resp) {
            _this.signalsAll = resp.signals;
        });
    };
    DashboardComponent.prototype.actualizaTabla = function () {
        this.desde = 0;
        this.mostrarSignalTabla();
    };
    DashboardComponent.prototype.analizarInfo = function () {
        var _this = this;
        this.valores = [];
        this.signal1 = [];
        this.signal2 = [];
        this.lineChartLabels = [];
        for (var _i = 0, _a = this.signals.reverse(); _i < _a.length; _i++) {
            var sig = _a[_i];
            var sigsplit = sig.valor.split("/", 2);
            this.valores.push(sig.valor);
            this.signal1.push(Number(sigsplit[0]));
            this.signal2.push(Number(sigsplit[1]));
            this.lineChartLabels.push(sig.hora);
            this.fechaLastReg = sig.fecha;
            this.horaLastReg = sig.hora;
        }
        var signals = [{ data: this.signal1, label: 'Nivel estanque entrada' }, { data: this.signal2, label: 'Nivel estanque salida' }];
        setTimeout(function () {
            _this.lineChartData = signals;
        }, 50);
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [subsignal_service_1.SubsignalService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map