"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var pages_module_1 = require("./pages/pages.module");
//SERVICIOS
var services_module_1 = require("./services/services.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./shared/header/header.component");
var sidebar_component_1 = require("./shared/sidebar/sidebar.component");
var breadcrumbs_component_1 = require("./shared/breadcrumbs/breadcrumbs.component");
var nopagefound_component_1 = require("./shared/nopagefound/nopagefound.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                breadcrumbs_component_1.BreadcrumbsComponent,
                nopagefound_component_1.NopagefoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(app_routes_1.Approutes),
                pages_module_1.PagesModule,
                services_module_1.ServiceModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map