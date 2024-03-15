
export interface Beach {
  name: string
}

export interface BeachResponse {
  name: string
}

export interface Origen {
  productor: string;
  web: string;
  language: string;
  copyright: string;
  notaLegal: string;
}

export interface PrediccionDia {
  estadoCielo: {
    descripcion1: string;
    descripcion2: string;
  };
  f1: number;
  f2: number;
  value: string;
}

export interface Oleaje {
  descripcion1: string;
  descripcion2: string;
  f1: number;
  f2: number;
  value: string;
}

export interface STermica {
  descripcion1: string;
  valor1: number;
  value: string;
}

export interface TAgua {
  valor1: number;
  value: string;
}

export interface TMaxima {
  valor1: number;
  value: string;
}

export interface UVMax {
  valor1: number;
  value: string;
}

export interface Viento {
  descripcion1: string;
  descripcion2: string;
  f1: number;
  f2: number;
  value: string;
}

export interface Prediccion {
  dia: PrediccionDia[];
  fecha: number;
  oleaje: Oleaje;
  sTermica: STermica;
  stermica: STermica;
  tAgua: TAgua;
  tMaxima: TMaxima;
  tagua: TAgua;
  tmaxima: TMaxima;
  uvMax: UVMax;
  viento: Viento;
}

export interface ElaboradoData {
  fecha: {
    id: number;
    localidad: number;
    nombre: string;
    origen: Origen;
    prediccion: Prediccion;
  };
}

export interface BeachI {
  name: string,
  municipality: string,
  island: string,
  type: string,
  disabledAccess: string,
  code: number | undefined,
  img: string
}

// -----------------------------------
interface Prediction {
  estadoCielo: {
    value: string;
    f1: number;
    descripcion1: string;
    f2: number;
    descripcion2: string;
  };
  viento: {
    value: string;
    f1: number;
    descripcion1: string;
    f2: number;
    descripcion2: string;
  };
  oleaje: {
    value: string;
    f1: number;
    descripcion1: string;
    f2: number;
    descripcion2: string;
  };
  tMaxima: {
    value: string;
    valor1: number;
  };
  sTermica: {
    value: string;
    valor1: number;
    descripcion1: string;
  };
  tAgua: {
    value: string;
    valor1: number;
  };
  uvMax: {
    value: string;
    valor1: number;
  };
  fecha: number;
  tagua: {
    value: string;
    valor1: number;
  };
  stermica: {
    value: string;
    valor1: number;
    descripcion1: string;
  };
  tmaxima: {
    value: string;
    valor1: number;
  };
}

interface Origin {
  productor: string;
  web: string;
  language: string;
  copyright: string;
  notaLegal: string;
}

export interface BeachData {
  origen: Origin;
  elaborado: string;
  nombre: string;
  localidad: number;
  prediccion: {
    dia: Prediction[];
  };
  id: number;
}