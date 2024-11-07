export interface IAjudante {
	id: string
	alias: string;
	name: string;
	username?: string;
	password?: string;
	phoneNumber: string;
	birthDate: string;
	driver: boolean;
}

export interface IAjudanteForList extends Partial<IAjudante> {
	servicesCount: number | null;
}
