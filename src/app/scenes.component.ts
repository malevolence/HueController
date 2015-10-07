import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {ScenesService} from './scenes.service';
import {Scene} from './scene';

@Component({ selector: 'scenes' })
@View({
	templateUrl: 'app/scenes.component.html',
	directives: [NgFor, NgIf]
})
export class ScenesComponent {
	private _scenes: Scene[];
	public currentScene: Scene;

	constructor(private _scenesService: ScenesService) {}

	get scenes() {
		return this._scenes || this.getScenes()
	}

	onSelect(scene: Scene) { this.currentScene = scene; }

	private getScenes() {
		this._scenes = [];

		this._scenesService.getScenes()
			.then(scenes => this._scenes = scenes);

		return this._scenes;
	}
}