// Angular
import { Injectable } from "@angular/core";

// Services
import { EncryptionService } from "./encryption.service";

@Injectable({
	providedIn: "root",
})
export class LocalStorageService {
	constructor(private encryptionService: EncryptionService) {}

	set(key: string, data: any): void {
		try {
			this.encryptionService.secureStorage.setItem(key, data);
		} catch (e) {
			console.error("Error guardando en localstorage", e);
		}
	}

	get(key: string): any {
		try {
			return this.encryptionService.secureStorage.getItem(key);
		} catch (e) {
			console.error("Error obteniendo valor desde localstorage", e);
			return null;
		}
	}

	remove(key: string): void {
		try {
			return this.encryptionService.secureStorage.removeItem(key);
		} catch (e) {
			console.error("Error removiendo llave desde localstorage", e);
		}
	}

	clear(): void {
		try {
			return this.encryptionService.secureStorage.clear();
		} catch (e) {
			console.error("Error limpiando localstorage desde localstorage", e);
		}
	}
}
