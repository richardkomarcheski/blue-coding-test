import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Giphy } from './../model/giphy.model';
import { GiphyService } from './../services/giphy.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage {
	searchTerm: string;
	giphyResults: Giphy[] = [];
	constructor(private giphyService: GiphyService, private sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.

	}

	sanitizeGif(url: string) {
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}

  searchGif(){
    this.giphyService.searchGiphy(this.searchTerm).subscribe((results) => {
			this.giphyResults = results as Giphy[];
		});
  }
}
