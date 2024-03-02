
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