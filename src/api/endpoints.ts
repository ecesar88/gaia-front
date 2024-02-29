export default {
  SELECT: (query: string) =>
    `/gaia/select?indent=true&rows=1000&q.op=OR&q=dominio%3A*${query}*%20OR%20descricao%3A*${query}*%20OR%20metadados%3A*${query}*`,
} as const;
