import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {HueService} from './hue.service';
import {Light} from './light';

@Component({ selector: 'lights' })
@View({
	templateUrl: 'app/lights.component.html',
	directives: [NgFor, NgIf]
})
export class LightsComponent {
	lights: Light[] = [];
	currentLight: Light;

	constructor(private service: HueService) {
		service.getLights().subscribe((res: any) => {
			for (var obj in res) {
				this.lights.push({
					id: obj,
					name: res[obj].name,
					state: res[obj].state
				});
			}
		});
	}

	onSelect(light: Light) { this.currentLight = light; }

	toggleLight(light: Light) {
		console.log('Turning ' + light.name + ' light ' + (light.state.on ? "off" : "on"));
		this.service.toggleLight(light.id, light.state.on);
		light.state.on = !light.state.on;
	}
}