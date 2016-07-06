import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'wes-shell',
    template: `
        <h1 class="component">Shell</h1>
        <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class ShellComponent {
    
}