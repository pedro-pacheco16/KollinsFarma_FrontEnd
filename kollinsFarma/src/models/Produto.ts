import Categoria from './Categoria';

export default interface Postagem {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  foto: string;
  categoria: Categoria | null;
}