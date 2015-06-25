/// <reference path="typings/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';

// Annotation section
@Component({
	selector: 'ng2bp'
})

@View({
	template: '<h3>Hello {{ name }}</h3>'
})

// Component controller
class MyAppComponent {
	name: string;
	
	constructor() {
		this.name = 'Jayaprakash';
	}
}

bootstrap(MyAppComponent);
