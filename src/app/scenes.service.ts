import {Scene} from './scene';

export class ScenesService {
	getScenes() { return Promise.resolve(SCENES); }

	getScene(id: number) {
		return Promise.resolve(SCENES)
			.then((scenes) => { return scenes.filter((s) => {
				return s.id === id;
			})[0]});
	}
}

var SCENES : Scene[] = [
	{
		"id": 1,
		"name": "Default"
	},
	{
		"id": 2,
		"name": "Blue Rain"
	},
	{
		"id": 3,
		"name": "Sunset"
	},
	{
		"id": 4,
		"name": "Reading"
	}
];