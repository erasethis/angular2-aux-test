import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'wes-department-detail',
    template: `
        <h1 class="component">DepartmentDetail (departmentId ={{departmentId}})</h1>
    `
})
export class DepartmentDetailComponent {
    departmentId: number;
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => 
            this.departmentId = +params['id']);
    }
}