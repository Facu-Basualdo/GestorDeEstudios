import datos from '@/datos/datos.json';
import { Estudio } from '@/components/estudio';
import type { Datos } from '@/lib/tipos';

export default function Pagina() {
  // El tipo que TS infiere del JSON no calza con Datos cuando las materias tienen unidades distintas.
  return <Estudio datos={datos as unknown as Datos} />;
}
