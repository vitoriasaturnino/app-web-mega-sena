import { HTMLAttributes } from "react";
import { EstimativaProximoConcursoStyle } from "./style";

type Props = HTMLAttributes<HTMLElement> & {
  valorEstimadoProximoConcurso: number;
  dataProximoConcurso: string;
}

export function EstimativaProximoConcurso({valorEstimadoProximoConcurso, dataProximoConcurso}:Props) {
  return (
    <EstimativaProximoConcursoStyle>
      Estimativa de prêmio do próximo concurso <p> {valorEstimadoProximoConcurso} </p> {dataProximoConcurso}
    </EstimativaProximoConcursoStyle>
  )
}