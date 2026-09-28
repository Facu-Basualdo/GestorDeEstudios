import datos from '@/datos/datos.json';
import { Estudio } from '@/components/estudio';
import type { Datos } from '@/lib/tipos';

export default function Pagina() {
  return <Estudio datos={datos as Datos} />;
}
