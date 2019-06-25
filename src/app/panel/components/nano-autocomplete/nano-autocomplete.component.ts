import { Component, ViewChild, Output, Input, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { SystemService } from '../../../services/system.service';
import { PlacesService } from '../../../services/places.service';
import { Observable } from 'rxjs';
import { Location } from '../../../../models/utils/location';

@Component({
  selector: 'nano-autocomplete',
  templateUrl: './nano-autocomplete.component.html',
  styleUrls: ['./nano-autocomplete.component.scss']
})
export class NanoAutocompleteComponent implements OnInit {

  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
  @Output() updatePlace = new EventEmitter();
  @Input('isDistrict') isDistrict: boolean;

  addressElement: HTMLInputElement = null;

  constructor(private system: SystemService, private placesProvider: PlacesService) {

  }

  ngOnInit() {
    this.initAutocomplete();
  }

  search() {
    this.system.logEvent("click_search_address")
  }

  initAutocomplete(): void {
    // reference : https://github.com/driftyco/ionic/issues/7223
    setTimeout(() => {
      this.addressElement = this.searchbar.nativeElement.getElementsByClassName('searchbar-input')[0];

      this.createAutocomplete(this.addressElement).subscribe((place) => {
        let location: Location = this.placesProvider.placeToLocation(place);
        this.system.logEvent("found_search_address")
        this.updatePlace.emit(location);
      }, error => {
        this.system.showErrorAlert(error);
      });
    }, 500)


  }

  private createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);


    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          sub.error({
            message: 'Você deve selecionar um dos lugares sugeridos',
            title: 'Localização inválida'
          });
        } else {
          sub.next(place);
          // sub.complete();
        }
      });

      // need to stop prop of the touchend event
      if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
        setTimeout(function () {
          var container = document.getElementsByClassName('pac-container')[0];
          let index = 0
          while (container) {
            container.addEventListener('touchend', function (e) {
              e.stopImmediatePropagation();
            });
            container = document.getElementsByClassName('pac-container')[index];
            index++;
          }
        }, 500);
      }
    });
  }

}
