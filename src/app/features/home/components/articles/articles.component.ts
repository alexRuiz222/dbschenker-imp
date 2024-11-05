import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { IArticle } from '../../../../core/models';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  articles: IArticle[] = [
    {
      id: '1',
      title: 'DB Schenker + Microsoft Cloud',
      description:
        ' DB Schenker collaborates with Microsoft Cloud Logistics on low carbon intercontinental transportation and sustainable logistics.',
      img: 'https://www.dbschenker.com/resource/image/1790416/4:3/430/323/9d05aee4a6d09cc02cc31c6b18fccac/88F23128891396649E288A21465DC550/interkontinentale-transporte-mit-biokraftstoff-db-schenker-und-microsoft-cloud-logistics-arbeiten-an-nachhaltiger-logistik.jpg',
    },
    {
      id: '2',
      title: 'DB Schenker In Mexico City',
      description:
        "Update on Cargo Operations at Mexico City's International Airport (MEX) and New Airport Felipe Angeles (NLU).",
      img: 'https://www.dbschenker.com/resource/image/1508344/4:3/430/323/357cdd8732b96cfbd657b4b27cd8aee5/46459C56DAC391367BB8E8F7AC5E4261/airplane-01.jpg',
    },
    {
      id: '3',
      title: 'Into the Future of Electric Trucks',
      description: 'Next step for all-electric trucks.',
      img: 'https://www.dbschenker.com/resource/image/891682/4:3/430/323/dafdc9403df1927c5e96dea6c122be6e/1F9ABE55280CA179128D11E6A9177A54/electric-truck-horizontal.jpg',
    },
  ];
}
