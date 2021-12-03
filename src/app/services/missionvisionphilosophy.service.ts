import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionvisionphilosophyService {

  politica: any = [
    {
      tipo:'Mission',
      descripcion:`Prepare the best Rompope and other drinks with typical Mexican flavors, with the highest quality and in an artisanal way, contributing at all times to rescue the values of the family and healthy coexistence through these drinks`
    },
    {
      tipo:'Vision',
      descripcion:`To be the number one company in the world in the elaboration and commercialization of Rompopes and Liquors with traditional Mexican flavors`
    },
    {
      tipo:'Philosophy',
      descripcion:`Seek to be a means for families to come together`,
    },
    
  ]
  constructor() { }
  obtenerPolitica(){
    return this.politica;
  }
}
