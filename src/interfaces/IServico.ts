import type { IAjudanteForList } from "./IAjudante";
import type IVeiculo from "./IVeiculo";

export interface IServico {
	serviceId: string; //nome "serviceId" temporario até mudar no backend
	address: string;
	neighborhood: string;
	value: number;
	serviceDate: string;
	vehicle: IVeiculo;
	employees: IAjudanteForList[];
}

export interface IServicoForList extends Partial<IServico> {
	employessCount: number | null;
}
