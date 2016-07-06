import { provide } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import { 
    LocationStrategy,  
    HashLocationStrategy,  
    PathLocationStrategy,  
    APP_BASE_HREF
}  
from '@angular/common';  

bootstrap(AppComponent, [ 
        APP_ROUTER_PROVIDERS,
        provide(LocationStrategy, { useClass: PathLocationStrategy }),
    ])
    .then(success => console.log("bootstrap succesful"))
    .catch(error => console.log("bootstrap failed: " + error));