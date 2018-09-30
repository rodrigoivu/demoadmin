"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("./dashboard/dashboard.component");
var profile_component_1 = require("./profile/profile.component");
var icon_component_1 = require("./icon/icon.component");
var map_component_1 = require("./map/map.component");
var table_component_1 = require("./table/table.component");
var blank_component_1 = require("./blank/blank.component");
var error_component_1 = require("./error/error.component");
var control_component_1 = require("./control/control.component");
var ilumina_component_1 = require("./ilumina/ilumina.component");
var motor_component_1 = require("./motor/motor.component");
var inventario_component_1 = require("./inventario/inventario.component");
exports.PagesRoutes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: dashboard_component_1.DashboardComponent,
                data: {
                    title: 'Dashboard',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Dashboard' }
                    ]
                }
            },
            {
                path: 'profile',
                component: profile_component_1.ProfileComponent,
                data: {
                    title: 'Perfil',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Perfil' }
                    ]
                }
            },
            {
                path: 'icon',
                component: icon_component_1.IconComponent,
                data: {
                    title: 'Icon',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Icon' }
                    ]
                }
            },
            {
                path: 'map',
                component: map_component_1.MapComponent,
                data: {
                    title: 'Map IIoT',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Map' }
                    ]
                }
            },
            {
                path: 'table',
                component: table_component_1.TableComponent,
                data: {
                    title: 'Table',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Table' }
                    ]
                }
            },
            {
                path: 'blank',
                component: blank_component_1.BlankComponent,
                data: {
                    title: 'Blank',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Blank' }
                    ]
                }
            },
            {
                path: 'error',
                component: error_component_1.ErrorComponent,
                data: {
                    title: 'Error',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Error' }
                    ]
                }
            },
            {
                path: 'control',
                component: control_component_1.ControlComponent,
                data: {
                    title: 'Control Industrial',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Control Industrial' }
                    ]
                }
            },
            {
                path: 'ilumina',
                component: ilumina_component_1.IluminaComponent,
                data: {
                    title: 'Control Iluminación',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Control Iluminación' }
                    ]
                }
            },
            {
                path: 'motor',
                component: motor_component_1.MotorComponent,
                data: {
                    title: 'Información Motores',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Información Motores' }
                    ]
                }
            },
            {
                path: 'inventario',
                component: inventario_component_1.InventarioComponent,
                data: {
                    title: 'Control Inventario',
                    urls: [
                        { title: 'Inicio', url: '/dashboard' },
                        { title: 'Control Inventario' }
                    ]
                }
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
//# sourceMappingURL=pages.routing.js.map