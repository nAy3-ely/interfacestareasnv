import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    { 
      name: 'Ferrero Rocher', 
      price: 1500, 
      inventoryStatus: 'In Stock', 
      image: 'https://www.ferrerorocher.com/es/sites/ferrerorocher20_es/files/2021-05/gfx-12x.jpg?t=1732697271'
    },
    { 
      name: 'm&m', 
      price: 200, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Plain-M%26Ms-Pile.jpg'
    },
    { 
      name: 'Kitkat', 
      price: 599, 
      inventoryStatus: 'In Stock', 
      image: 'https://thefoodtech.com/wp-content/uploads/2024/02/kit-kat-breaks-for-good-int.jpg' 
    },
    { 
      name: 'Snickers', 
      price: 20, 
      inventoryStatus: 'In Stock', 
      image: 'https://earlybrawd.com/wp-content/uploads/2023/11/Snickers-Date-Chocolate-Bark-32-1-683x1024.jpg'
    },
    { 
      name: 'Hershey', 
      price: 999, 
      inventoryStatus: 'In Stock', 
      image: 'https://http2.mlstatic.com/D_NQ_NP_741290-MLM78512125666_082024-O.webp' 
       
     },

  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
