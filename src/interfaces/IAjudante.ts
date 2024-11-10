import type { IServico } from "./IServico";

export interface IAjudante {
	id: string
	alias: string;
	name: string;
	phoneNumber: string;
	birthdate: string;
	driver: boolean;
	servicesCount: number;
}

export interface IAjudanteServices extends IAjudante {
	services: Partial<IServico[]>;
}
