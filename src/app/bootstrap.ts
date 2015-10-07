import {bind, bootstrap} from 'angular2/angular2';
import {routerBindings, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {LightsService} from './lights.service';
import {ScenesService} from './scenes.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	routerBindings(AppComponent),
	LightsService,
	ScenesService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);