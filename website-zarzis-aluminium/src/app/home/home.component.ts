import { Component } from '@angular/core';
import {HeroComponent} from "../sections/hero/hero.component";
import {ContactComponent} from "../sections/contact/contact.component";
import {NumbersComponent} from "../sections/numbers/numbers.component";
import {ServicesComponent} from "../sections/services/services.component";
import {BlogComponent} from "../sections/blog/blog.component";
import {TestimonialsComponent} from "../sections/testimonials/testimonials.component";
import {GalleryComponent} from "../sections/gallery/gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ContactComponent,
    NumbersComponent,
    ServicesComponent,
    BlogComponent,
    TestimonialsComponent,
    GalleryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
