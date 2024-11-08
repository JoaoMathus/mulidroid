import { ScrollView } from "react-native";
import useNavigation from "../hooks/useNavigation";
import CardAjudante from "./card-ajudante";
import type { IAjudante } from "../interfaces/IAjudante";
import http from "../http/http";
import { useContext } from "react";
import { ServicoAjudanteContext } from "../contexts/ServicoAjudanteContext";
import UserContext from "../hooks/userContext";

interface ListaAjudantesProps {
  listaAjudantes: IAjudante[];
  idDeServico?: string
}



const ListaAjudantes = ({ listaAjudantes, idDeServico }: ListaAjudantesProps) => {
  const { navigate } = useNavigation().navigator;
  const {employeeId} = useContext(UserContext);


  const efetuarPagamento = async () => {
    if(idDeServico) {
      await http.post(`payment/${idDeServico}/${employeeId}`);
    }
  }

  return (
    <ScrollView
      fadingEdgeLength={100}
      className="h-full">
      {listaAjudantes?.map((ajudante) => (
        <CardAjudante
          key={ajudante.id}
          ajudante={ajudante}
          onLongPress={() => efetuarPagamento()}
          onPress={() => {
            navigate("Ajudante", {
              employeeId: ajudante.id
            });
          }}
        />
      ))}
    </ScrollView>
  )
}

export default ListaAjudantes;