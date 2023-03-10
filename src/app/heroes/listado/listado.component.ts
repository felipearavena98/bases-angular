import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', ' Thor'];

  heroeDeleteado: string = '';

  borrarHeroe(){
    console.log('Borrando...')
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeDeleteado = heroeBorrado
  }


}
