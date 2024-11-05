import { Component } from '@angular/core';
import { IService } from '../../../../core/models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: IService[] = [
    {
      id: '1',
      title: 'digital services',
      icon: 'local_shipping',
    },
    {
      id: '2',
      title: 'conveyor_belt',
      icon: 'sync_saved_locally',
    },
    {
      id: '3',
      title: 'contract logistics solutions',
      icon: 'conveyor_belt',
    },
    {
      id: '4',
      title: 'supply chain solutions',
      icon: 'forklift',
    },
    {
      id: '5',
      title: 'become one of us',
      icon: 'person_add',
    },
    {
      id: '6',
      title: 'who we are?',
      icon: 'group',
    },
  ];
}
