import {Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})
export class EntryComponent{
    title: string = 'My first Photo';
    // photo: string = 'http://placehold.it/800x500?text=Angular Basics';
    photo: string = "./photos/Water-lilies-and-algas.jpg";
    description: string = 'A Description of my first Photo';
    comments: any[] = [
        { name: "Crescens", comment: "Belle tof" },
        { name: "May", comment: "Top tof" },
        { name: "Fidele", comment: "J'aime bien la tof" }
    ]

}