import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'wes-app',
  template: `
    <div class="app">
      <h1>App</h1>
      <div class="primary-outlet">
        <router-outlet></router-outlet>
      </div>
      <div class="aux-outlet">
        <router-outlet name="aux"></router-outlet>
      </div>
    </div>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent { }