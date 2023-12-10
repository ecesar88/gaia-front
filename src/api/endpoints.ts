export default {
  SELECT: (query: string) => `/gaia/select?indent=true&q.op=OR&q=${query}`,
} as const;
