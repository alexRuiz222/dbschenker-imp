import { Component } from '@angular/core';
import { QuoteShipmentComponent } from './components/quote-shipment/quote-shipment.component';
import { ServicesComponent } from './components/services/services.component';
import { ArticlesComponent } from './components/articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuoteShipmentComponent, ServicesComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
