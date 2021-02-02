// Angular
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
	providedIn: "root"
})
export class PlatformService {
	readonly isBrowser: boolean;

	constructor(@Inject(PLATFORM_ID) platformId: string) {
		this.isBrowser = isPlatformBrowser(platformId);
	}
}
