import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PageHeaderComponent implements OnInit {
    @Input() heading!: string;
    @Input() icon!: string;
    constructor() {}

    ngOnInit() {}
}
