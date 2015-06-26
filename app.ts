/// <reference path="typings/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';

// Annotation section
@Component({
	selector: 'my-app'
})

@View({
	template: `
		<h3>Hello {{ name }}</h3>
		<p>{{ message }}</p>
	`
})

// Component controller
class MyAppComponent {
	name: string;
	message: string;
	
	constructor() {
		this.name = 'Jayaprakash';
		this.message = 'Welcome to forkIdeas.';
	}
}

bootstrap(MyAppComponent);
