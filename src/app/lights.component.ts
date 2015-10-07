import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {LightsService} from './lights.service';
import {Light} from './light';

@Component({ selector: 'lights' })
@View({
	templateUrl: 'app/lights.component.html',
	directives: [NgFor, NgIf]
})
export class LightsComponent {
	private _lights: Light[];
	public currentLight: Light;

	constructor(private _lightsService: LightsService) { }

	get lights() {
		return this._lights || this.getLights();
	}

	onSelect(light: Light) { this.currentLight = light; }

	private getLights() {
		this._lights = [];
		this._lightsService.getLights()
			.then(lights => this._lights = lights);

		return this._lights;
	}
}