import type { IAjudante } from "./IAjudante";
import type IVeiculo from "./IVeiculo";

export interface IServico {
	id: string; //nome "serviceId" temporario até mudar no backend
	address: string;
	neighborhood: string;
	value: number;
	serviceDate: string;
	vehicle: IVeiculo;
	employees: IAjudante[];
	employeesCount: number;
}
