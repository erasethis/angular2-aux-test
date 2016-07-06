import { provideRouter, RouterConfig } from '@angular/router';

import { DepartmentDetailComponent } from './department-detail.component';
import { ShellComponent } from './shell.component';
import { Test1Component } from './test-1.component';
import { Test2Component } from './test-2.component';
import { Test3Component } from './test-3.component';

export const routes: RouterConfig = [
    { path: 'test1', component: Test1Component },
    { path: 'test2', component: Test2Component, outlet: 'aux'}, // http://localhost:3000/shell/department/1(aux:test2) - OK
    { path: 'shell', component: ShellComponent, children: [
        { path: 'department/:id', component: DepartmentDetailComponent },
        { path: 'test3', component: Test3Component, outlet: 'aux2' }    // http://localhost:3000/shell/department/1(aux:test3) Cannot match any routes: 'test3'
    ] }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];