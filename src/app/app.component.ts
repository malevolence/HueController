import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ScenesComponent} from './scenes.component';
import {LightsComponent} from './lights.component';

@Component({ selector: 'my-app' })
@View({
	templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', as: 'Scenes', component: ScenesComponent },
	{ path: '/lights', as: 'Lights', component: LightsComponent }
])
export class AppComponent { }