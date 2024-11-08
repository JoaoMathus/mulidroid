export interface IAjudante {
	id: string
	alias: string;
	name: string;
	phoneNumber: string;
	birthdate: string;
	driver: boolean;
}

export interface IAjudanteForList extends Partial<IAjudante> {
	servicesCount?: number;
}
