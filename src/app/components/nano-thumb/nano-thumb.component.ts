import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'nano-thumb',
  templateUrl: './nano-thumb.component.html',
  styleUrls: ['./nano-thumb.component.scss']
})
export class NanoThumbComponent  implements OnChanges{

	@Input() src: string;
	@Input() round: boolean = false;
	@Input() large: boolean = false;
	@Input() large2x: boolean = false;
	@Input() banner: boolean = false;
	@Input() border: boolean = false;
	@Input() white: boolean = true;
	@Input() cover_picture: boolean = false;
	@Input() profile_picture: boolean = false;
	@Input() product_image: boolean = false;

	/**
	 * Placeholder da imagem (caso não tenha src)
	 * Ex: "person" (default) e "product"
	 */
	@Input() kind: string;

	default: string = "../../../assets/img/placeholder.png";

	constructor() { }

	ngOnChanges() {
		if (this.kind == "person")
			this.default = "../../../assets/img/user_placeholder.png";
		else if (this.kind == "product")
			this.default = "../../../assets/img/placeholder.png";
	}

}