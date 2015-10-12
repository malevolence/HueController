import {bind, bootstrap} from 'angular2/angular2';
import {routerBindings, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import { HTTP_BINDINGS} from 'angular2/http';
import {HueService} from './hue.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	routerBindings(AppComponent),
	HTTP_BINDINGS,
	HueService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);