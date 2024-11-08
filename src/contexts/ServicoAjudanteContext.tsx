import { type ReactNode, createContext, useEffect, useState } from "react";
import type { IAjudante, IAjudanteForList } from "../interfaces/IAjudante";
import type {IServico, IServicoForList} from "../interfaces/IServico";
import http from "../http/http";

interface ServicoAjudanteContextProps {
  ajudantes: IAjudanteForList[];
  setAjudantes: React.Dispatch<React.SetStateAction<IAjudanteForList[]>>;
  servicos: IServicoForList[];
  setServicos: React.Dispatch<React.SetStateAction<IServicoForList[]>>;
  buscarDados: () => void;
}

interface ServicoAjudanteProviderProps {
  children: ReactNode;
}

export const ServicoAjudanteContext =
  createContext<ServicoAjudanteContextProps>({} as ServicoAjudanteContextProps);

export const ServicoAjudanteProvider = ({
  children,
}: ServicoAjudanteProviderProps) => {
  const [ajudantes, setAjudantes] = useState<IAjudanteForList[]>([]);
  const [servicos, setServicos] = useState<IServicoForList[]>([]);

  const buscarDados = () => {
    http.get<IAjudanteForList[]>("/employee").then((res) => {
      setAjudantes(res.data);
    });

    http.get<IServicoForList[]>("/service").then(res => {
      setServicos(res.data);
    });
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <ServicoAjudanteContext.Provider
      value={{ ajudantes, setAjudantes, servicos, setServicos, buscarDados }}
    >
      {children}
    </ServicoAjudanteContext.Provider>
  );
};
