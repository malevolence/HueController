import {Light} from './light';

export class LightsService {
	getLights() { return Promise.resolve(LIGHTS); }

	getLight(id: number) {
		return Promise.resolve(LIGHTS)
			.then((lights) => { return lights.filter((l) => {
				return l.id === id;
			})[0]});

	}

}

var LIGHTS : Light[] = [
	{
		"id": 1,
		"name": "Back Wall",
		"red": 127,
		"green": 127,
		"blue": 127,
		"brightness": 0.5
	},
	{
		"id": 2,
		"name": "Ceiling Fan",
		"red": 255,
		"green": 0,
		"blue": 0,
		"brightness": 0.75
	},
	{
		"id": 3,
		"name": "Stairs",
		"red": 255,
		"green": 255,
		"blue": 255,
		"brightness": 1.0
	}
];