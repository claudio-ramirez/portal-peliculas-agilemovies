import { ICountry, IBuyType } from ".";

export interface IRaffleNumber {
	readonly id: number;
	names: string;
	firstSurname: string;
	secondSurname: string;
	identificationNumber?: string;
	idCountry?: Partial<ICountry>;
	email: string;
	mobilePhone: string;
	quantityOfNumbers: number;
	totalMoney: number;
	numberIsPaid: boolean;
	paymentDate: string;
	creationDate: string;
	idBuyType: Partial<IBuyType>;
	valid: boolean;
}
