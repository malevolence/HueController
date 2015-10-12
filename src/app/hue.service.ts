import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class HueService {
	private baseApiUrl: string = 'http://192.168.1.43/api/newdeveloper/';

	constructor(private http: Http) {}

	getTestLights() {
        return this.http.get('./app/lights.json').map((res: any) => res.json());
	}

	geTesttScenes() {
		return this.http.get('./app/scenes.json').map((res: any) => res.json());
	}

	getScenes() {
		return this.http.get(this.baseApiUrl + 'scenes').map((res: any) => res.json());
	}

	getLights() {
		return this.http.get(this.baseApiUrl + 'lights').map((res: any) => res.json());
	}

	toggleLight(id: number, currentState: boolean) {
		var url = this.baseApiUrl + 'lights/' + id + '/state';
		console.log(url);
		var params = {
			"on": !currentState
		};
		this.http.put(url, JSON.stringify(params));
	}
}