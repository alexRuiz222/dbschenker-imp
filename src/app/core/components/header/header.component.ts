import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { INavItem } from '../../models/navitem.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems: INavItem[] = [
    { name: 'Home', link: '/home' },
    { name: 'Business', link: '/business' },
    { name: 'Careers', link: '/careers' },
    { name: 'Insights', link: '/insights' },
  ];

  activeIndex = 1;

  setActiveIndex(index: number): void {
    this.activeIndex = index;
  }
}
