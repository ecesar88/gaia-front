export default {
  responseHeader: {
    status: 0,
    QTime: 0,
    params: {
      q: "*:*",
      indent: "true",
      "q.op": "OR",
      useParams: "",
      _: "1702169953452",
    },
  },
  response: {
    numFound: 12,
    start: 0,
    numFoundExact: true,
    docs: [
      {
        dominio: "IBGE",
        descricao: "API de localidades - Distritos.",
        metadados:
          "id: number - Identificador do distrito=nome: string - Nome do distrito=municipio:=id: number - Identificador do município=nome: string - Nome do município=microrregiao:=id: number - Identificador da microrregião=nome: string - Nome da microrregião=mesorregiao:=id: number - Identificador da mesorregião=nome: string - Nome da mesorregião=UF:=id: number - Identificador da Unidade da Federação=nome: string - Nome da Unidade da Federação=sigla: string - Sigla da Unidade da Federação=regiao:=id: number - Identificador da região=nome: string - Nome da região=sigla: string - Sigla da região=regiao-imediata:=id: number - Identificador da região imediata=nome: string - Nome da região imediata=regiao-intermediaria:=id: number - Identificador da região intermediária=nome: string - Nome da região intermediária=UF:=id: number - Identificador da Unidade da Federação=nome: string - Nome da Unidade da Federação=sigla: string - Sigla da Unidade da Federação=regiao:=id: number - Identificador da região=nome: string - Nome da região=sigla: string - Sigla da região",
        amostra:
          '[{"id":520005005,"municipio":{"id":5200050,"microrregiao":{"id":52010,"mesorregiao":{"UF":{"id":52,"nome":"Goiu00e1s","regiao":{"id":5,"nome":"Centro-Oeste","sigla":"CO"},"sigla":"GO"},"id":5203,"nome":"Centro Goiano"},"nome":"Goiu00e2nia"},"nome":"Abadia de Goiu00e1s","regiao-imediata":{"id":520001,"nome":"Goiu00e2nia","regiao-intermediaria":{"UF":{"id":52,"nome":"Goiu00e1s","regiao":{"id":5,"nome":"Centro-Oeste","sigla":"CO"},"sigla":"GO"},"id":5201,"nome":"Goiu00e2nia"}}}},"nome":"Abadia de Goiu00e1s"}]',
        linkgit: "https://github.com/Arg-Dados/IBGE/blob/main/APIdistritos.py",
        id: "3bcc0b7f-e726-48e5-b891-fb4f1d17f322",
        _version_: 1784682126256373760,
      },
      {
        dominio: "IBGE",
        descricao: "API de localidades - Unidades da Federação.",
        metadados:
          "id: number - Identificador da Unidade da Ferederação=nome: string - Nome da Unidade da Federação=sigla: string - Sigla da Unidade da Federação=regiao:=id: number - Identificador da região=nome: string - Nome da região=sigla: string - Sigla da região",
        amostra:
          '[{"id":11,"nome":"Rondu00f4nia","regiao":{"id":1,"nome":"Norte","sigla":"N"},"sigla":"RO"}]',
        linkgit: "https://github.com/Arg-Dados/IBGE/blob/main/APIestados.py",
        id: "866f291c-b119-4ba1-ac86-8148138abaed",
        _version_: 1784682126268956672,
      },
      {
        dominio: "IBGE",
        descricao: "API de localidades - Mesorregiões.",
        metadados:
          "id: number - Identificador da mesorregião=nome: string - Nome da mesorregião=UF:=id: number - Identificador da Unidade da Federação=nome: string - Nome da Unidade da Federação=sigla: string - Sigla da Unidade da Federação=regiao: =id: number -  Identificador da região=nome: string - Nome da região=sigla: string - Sigla da região",
        amostra:
          '[{"UF":{"id":11,"nome":"Rondu00f4nia","regiao":{"id":1,"nome":"Norte","sigla":"N"},"sigla":"RO"},"id":1101,"nome":"Madeira-Guaporu00e9"}]',
        linkgit:
          "https://github.com/Arg-Dados/IBGE/blob/main/APImesorregioes.py",
        id: "fe347eb7-b28a-43a7-a980-c7c2d0e9c424",
        _version_: 1784682126270005248,
      },
      {
        dominio: "IBGE",
        descricao: "API de localidades - Microrregiões",
        metadados:
          "id: number - Identificador da Microrregião=nome: string - Nome da Microrregião=mesorregiao:=id: number - Identificador da Mesorregião=nome: string - Nome da Mesorregião=UF:=id: number - Identificador da Unidade da Federação=nome: string - Nome da Unidade da Federação=sigla: string - Sigla da Unidade da Federação=regiao:=id: number - Identificador da Região=nome: string - Nome da Região=sigla: string - Sigla da Região",
        amostra:
          '[{"id":11001,"mesorregiao":{"UF":{"id":11,"nome":"Rondu00f4nia","regiao":{"id":1,"nome":"Norte","sigla":"N"},"sigla":"RO"},"id":1101,"nome":"Madeira-Guaporu00e9"},"nome":"Porto Velho"}]',
        linkgit:
          "https://github.com/Arg-Dados/IBGE/blob/main/APImicrorregioes.py",
        id: "ffd3a157-332a-4b3f-8cd4-837a416cc87e",
        _version_: 1784682126270005249,
      },
      {
        dominio: "IBGE",
        descricao: "API de localidades - Municipios.",
        metadados:
          "id: number - Identificador do Município=nome: string - Nome do Município=microrregiao:id: number - Identificador da Microrregião=nome: string - Nome da Microrregião=mesorregiao:id: number - Identificador da Mesorregião=nome: string - Nome da Mesorregião=UF:id: number - Identificador da Unidade da Federação=nome: string - Nome da Unidade da Federação=sigla:string - Sigla da Unidade da Federação=regiao:id: number - Identificador da Região=nome: string - Nome da Região=sigla:string - Sigla da Região=regiao-imediata:id: number - Identificador da Região Imediata=nome: string - Nome da Região Imediata=regiao-intermediaria:id: number - Identificador da Região Intermediária=nome: string - Nome da Região Intermediária=UF:id: number - Identificador da Unidade da Federação=nome: string - Nome da Unidade da Federação=sigla:string - Sigla da Unidade da Federação=regiao:id: number - Identificador da Região=nome: string - Nome da Região=sigla:string - Sigla da Região",
        amostra:
          '[{"id":1100015,"microrregiao":{"id":11006,"mesorregiao":{"UF":{"id":11,"nome":"Rondu00f4nia","regiao":{"id":1,"nome":"Norte","sigla":"N"},"sigla":"RO"},"id":1102,"nome":"Leste Rondoniense"},"nome":"Cacoal"},"nome":"Alta Floresta D\'Oeste","regiao-imediata":{"id":110005,"nome":"Cacoal","regiao-intermediaria":{"UF":{"id":11,"nome":"Rondu00f4nia","regiao":{"id":1,"nome":"Norte","sigla":"N"},"sigla":"RO"},"id":1102,"nome":"Ji-Paranu00e1"}}}]',
        linkgit: "https://github.com/Arg-Dados/IBGE/blob/main/APImunicipios.py",
        id: "f53bb616-5966-4da3-9928-16142be0e042",
        _version_: 1784682126271053824,
      },
      {
        dominio: "IBGE",
        descricao: "API de localidades - Paises.",
        metadados:
          "id:=M49: number - Identificador M49, designado pela Organização das Nações Unidas=ISO-ALPHA-2: string - Identificador especificado pela norma ISO ALPHA-2, que define o identificador do país usando 2 letras=ISO-ALPHA-3: string - Identificador especificado pela norma ISO ALPHA-3, que define o identificador do país usando 3 letras=nome: Nome do país=regiao-intermediaria:=id:=M49: number - Identificador M49, designado pela Organização das Nações Unidas=nome: string - Nome da região intermediária=sub-regiao:=id:=M49: number - Identificador M49, designado pela Organização das Nações Unidas=nome: string - Nome da sub-região=regiao:=id:=M49: number - Identificador M49, designado pela Organização das Nações Unidas=nome: string - Nome da região",
        amostra:
          '[{"id":{"ISO-ALPHA-2":"AF","ISO-ALPHA-3":"AFG","M49":4},"nome":"Afeganistão","regiao-intermediaria":null,"sub-regiao":{"id":{"M49":34},"nome":"Ásia meridional (Sul da Ásia)","regiao":{"id":{"M49":142},"nome":"Ásia"}}}]',
        linkgit: "https://github.com/Arg-Dados/IBGE/blob/main/APIpaises.py",
        id: "bfff49e3-e015-4e44-9c25-6a2f93a7c063",
        _version_: 1784682126272102400,
      },
      {
        dominio: "IBGE",
        descricao: "API de localidades - Regiões Imediatas.",
        metadados:
          "id: number - Identificador da região imediata=nome: string - Nome da região imediata=regiao-intermediaria:=id: number - Identificador da região intermediária=nome: string - Nome da região intermediária=UF:=id: number - Identificador da Unidade da Federação=nome: string - Nome da Unidade da Federação=sigla: string - Sigla da Unidade da Federação=regiao:=id: number - Identificador da região=nome: string - Nome da região=sigla: string - Sigla da região",
        amostra:
          '[{"id":110001,"nome":"Porto Velho","regiao-intermediaria":{"UF":{"id":11,"nome":"Rondu00f4nia","regiao":{"id":1,"nome":"Norte","sigla":"N"},"sigla":"RO"},"id":1101,"nome":"Porto Velho"}}]',
        linkgit:
          "https://github.com/Arg-Dados/IBGE/blob/main/APIregioes-imediatas.py",
        id: "7530d21f-b694-40ef-904a-025946f62ff6",
        _version_: 1784682126272102401,
      },
      {
        dominio: "IBGE",
        descricao:
          "API de localidades - Regiões Integradas de Desenvolvimento.",
        metadados:
          "id: string - Identificador da região integrada de desenvolvimento=nome: string - Nome da região integrada de desenvolvimento=municipios: array - [Array de municípios pertencentes à região integrada de desenvolvimento]",
        amostra:
          '[{"id":"01301","municipios":[{"UF":{"id":21,"nome":"Maranhu00e3o","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"MA"},"id":2112209,"nome":"Timon"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2200400,"nome":"Altos"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2201606,"nome":"Beneditinos"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2202737,"nome":"Coivaras"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2203255,"nome":"Curralinhos"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2203305,"nome":"Demerval Lobu00e3o"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2205508,"nome":"Josu00e9 de Freitas"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2205557,"nome":"Lagoa Alegre"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2205581,"nome":"Lagoa do Piauu00ed"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2206308,"nome":"Miguel Leu00e3o"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2206407,"nome":"Monsenhor Gil"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2206720,"nome":"Nazu00e1ria"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2211001,"nome":"Teresina"},{"UF":{"id":22,"nome":"Piauu00ed","regiao":{"id":2,"nome":"Nordeste","sigla":"NE"},"sigla":"PI"},"id":2211100,"nome":"Uniu00e3o"}],"nome":"Regiu00e3o Integrada de Desenvolvimento da Grande Teresina"}]',
        linkgit:
          "https://github.com/Arg-Dados/IBGE/blob/main/APIregioes-desenvolvimento.py",
        id: "e6a6998d-27c0-46e9-8d5e-2c7cfe05f010",
        _version_: 1784682126273150976,
      },
      {
        dominio: "IBGE",
        descricao: "API de localidades - Regiões Intermediárias.",
        metadados:
          "id: number - Identificador da região intermediária=nome: string - Nome da região intermediária=UF:=id: number - Identificador da Unidade da Federação=nome: string - Nome da Unidade da Federação=sigla: string - Sigla da Unidade da Federação=regiao:=id: number - Identificador da região=nome: string - Nome da região=sigla: string - Sigla da região",
        amostra:
          '[{"UF":{"id":11,"nome":"Rondu00f4nia","regiao":{"id":1,"nome":"Norte","sigla":"N"},"sigla":"RO"},"id":1101,"nome":"Porto Velho"}]',
        linkgit:
          "https://github.com/Arg-Dados/IBGE/blob/main/APIregioes-intermediarias.py",
        id: "ae0c5bd6-c86f-464e-adb0-d3d27eba1eb4",
        _version_: 1784682126274199552,
      },
      {
        dominio: "IBGE",
        descricao: "API de localidades - Regiões Metropolitanas.",
        metadados:
          "id: string - Identificador da região metropolitana=nome: string - Nome da região metropolitana=UF:=id: number - Identificador da Unidade da Federação=nome: string - Nome da Unidade da Federação=sigla: string - Sigla da Unidade da Federação=regiao:=id: number - Identificador da região=nome: string - Nome da região=sigla: string - Sigla da região=sub-regioes-metropolitanas: Array - [Array de Sub-Regiões metropolitanas, se houver]=municipios: array - [Array de municípios pertencentes à região metropolitana]",
        amostra:
          '[{"UF":{"id":11,"nome":"Rondu00f4nia","regiao":{"id":1,"nome":"Norte","sigla":"N"},"sigla":"RO"},"id":"00101","municipios":[{"id":1100205,"nome":"Porto Velho"},{"id":1100809,"nome":"Candeias do Jamari"}],"nome":"Regiu00e3o Metropolitana de Porto Velho","sub-regioes-metropolitanas":[]}]',
        linkgit:
          "https://github.com/Arg-Dados/IBGE/blob/main/APIregioes-metropolitanas.py",
        id: "1f3f3bfb-daf7-4488-b3bc-5ab65b4be67c",
        _version_: 1784682126274199553,
      },
    ],
  },
};
