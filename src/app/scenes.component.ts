import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {HueService} from './hue.service';
import {Scene} from './scene';

@Component({ selector: 'scenes' })
@View({
	templateUrl: 'app/scenes.component.html',
	directives: [NgFor, NgIf]
})
export class ScenesComponent {
	scenes: Scene[] = [];
	currentScene: Scene;

	constructor(service: HueService) {
		service.getScenes().subscribe((res: any) => {
			for (var obj in res) {
				this.scenes.push({
					id: obj,
					name: res[obj].name,
					lights: res[obj].lights,
					active: res[obj].active
				});
			}
		});
	}

	onSelect(scene: Scene) { this.currentScene = scene; }
}