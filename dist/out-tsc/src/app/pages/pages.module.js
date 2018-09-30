"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ng2_charts_1 = require("ng2-charts");
var pages_routing_1 = require("./pages.routing");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var profile_component_1 = require("./profile/profile.component");
var icon_component_1 = require("./icon/icon.component");
var map_component_1 = require("./map/map.component");
var table_component_1 = require("./table/table.component");
var blank_component_1 = require("./blank/blank.component");
var error_component_1 = require("./error/error.component");
var core_2 = require("@agm/core");
var control_component_1 = require("./control/control.component");
var ilumina_component_1 = require("./ilumina/ilumina.component");
var motor_component_1 = require("./motor/motor.component");
var inventario_component_1 = require("./inventario/inventario.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng2_charts_1.ChartsModule,
                router_1.RouterModule.forChild(pages_routing_1.PagesRoutes),
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCWTO39D8FvNW86QAhCbQjnG-mJpOXVlDY'
                })
            ],
            exports: [
                dashboard_component_1.DashboardComponent,
                profile_component_1.ProfileComponent,
                icon_component_1.IconComponent,
                map_component_1.MapComponent,
                table_component_1.TableComponent,
                blank_component_1.BlankComponent,
                error_component_1.ErrorComponent
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                profile_component_1.ProfileComponent,
                icon_component_1.IconComponent,
                map_component_1.MapComponent,
                table_component_1.TableComponent,
                blank_component_1.BlankComponent,
                error_component_1.ErrorComponent,
                control_component_1.ControlComponent,
                ilumina_component_1.IluminaComponent,
                motor_component_1.MotorComponent,
                inventario_component_1.InventarioComponent
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map