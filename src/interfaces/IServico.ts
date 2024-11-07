import type IVeiculo from "./IVeiculo";

interface IServico {
	serviceId: string; //nome "serviceId" temporario até mudar no backend
	address: string;
	neighborhood: string;
	value: number;
	serviceDate: string;
	vehicle: IVeiculo;
	employeesCount: number | null;
}

export default IServico;
