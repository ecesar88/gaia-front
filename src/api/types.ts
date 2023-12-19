export interface Dominio {
  dominio: string;
  descricao: string;
  metadados: string;
  amostra: string;
  linkgit: string;
  id: string;
  _version_: number;
}

export type ResponseType = {
  responseHeader: {
    status: number;
    QTime: number;
    params: {
      q: string;
      indent: string;
      "q.op": string;
    };
  };
  response: {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    docs: Dominio[];
  };
};
