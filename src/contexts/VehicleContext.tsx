import { type ReactNode, createContext, useEffect, useState } from "react";
import type IVeiculo from "../interfaces/IVeiculo";
import http from "../http/http";

interface VehicleContextProps {
  veiculos: IVeiculo[];
  setVeiculos: React.Dispatch<React.SetStateAction<IVeiculo[]>>;
  buscarDados: () => void;
}

interface VehicleProviderProps {
  children: ReactNode;
}

export const VehicleContext =
  createContext<VehicleContextProps>({} as VehicleContextProps);

export const VehicleProvider = ({
  children,
}: VehicleProviderProps) => {
  const [veiculos, setVeiculos] = useState<IVeiculo[]>([]);

  const buscarDados = () => {
    http.get<IVeiculo[]>("/vehicle").then((res) => {
      setVeiculos(res.data);
    });
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <VehicleContext.Provider
      value={{ veiculos, setVeiculos, buscarDados }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
