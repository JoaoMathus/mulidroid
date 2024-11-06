import { ScrollView } from "react-native";
import useNavigation from "./hooks/useNavigation";
import CardAjudante from "./card-ajudante";
import type IAjudante from "../interfaces/IAjudante";

interface ListaAjudantesProps {
  listaAjudantes: IAjudante[]
}

const ListaAjudantes = ({ listaAjudantes }: ListaAjudantesProps) => {
  const { navigate } = useNavigation().navigator;

  return (
    <ScrollView
      fadingEdgeLength={100}
      className="h-full">
      {listaAjudantes.map((ajudante) => (
        <CardAjudante
          key={ajudante.id}
          ajudante={ajudante}
          onPress={() => {
            navigate("Ajudante");
          }}
        />
      ))}
    </ScrollView>
  )
}

export default ListaAjudantes;