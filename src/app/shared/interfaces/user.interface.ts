import { ICountry, IProfile } from ".";

export interface IUser {
	readonly id: number;
	username: string;
	password: string;
	names: string;
	firstSurname: string;
	secondSurname: string;
	identificationNumber?: string;
	idCountry?: Partial<ICountry>;
	email: string;
	mobilePhone: string;
	creationDate: string;
	dateLastChangePassword: string;
	dateLastLogin: string;
	idProfile: Partial<IProfile>;
	valid: boolean;
}
