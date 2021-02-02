// Angular
import { Injectable } from "@angular/core";

// CryptoJS
import * as CryptoJS from "crypto-js";

const SecureStorage = require("secure-web-storage");
const SECRET_KEY = "scd346";

@Injectable({
	providedIn: "root",
})
export class EncryptionService {
	constructor() {}

	public secureStorage = new SecureStorage(localStorage, {
		hash: function hash(key: any) {
			// key = CryptoJS.SHA256(key, SECRET_KEY);
			key = CryptoJS.SHA256(key);

			return key.toString();
		},
		encrypt: function encrypt(data: any) {
			data = CryptoJS.AES.encrypt(data, SECRET_KEY);

			data = data.toString();

			return data;
		},
		decrypt: function decrypt(data: any) {
			data = CryptoJS.AES.decrypt(data, SECRET_KEY);

			data = data.toString(CryptoJS.enc.Utf8);

			return data;
		},
	});
}
