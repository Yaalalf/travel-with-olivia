import { createContext, ReactNode, useContext } from "react";

const SongsContext = createContext<ISong[]>([]);

export function SongsProvider({ children }: { children: ReactNode }) {
  return (
    <SongsContext.Provider
      value={[
        {
          name: "Alaba",
          type: "alabanza",
          letter: {
            verses: [
              {
                id: "v1",
                label: "Verso 1",
                sentences: [
                  "Te alabo en el valle",
                  "Te alabo en el monte",
                  "Te alabo en el día",
                  "Te alabo en la noche",
                ],
              },
              {
                id: "v2",
                label: "Verso 2",
                sentences: [
                  "Te alabo en el medio",
                  " Estando rodeado",
                  "Porque cuando alabo",
                  "Tú estás a mi lado",
                ],
              },
              {
                id: "v3",
                label: "Verso 3",
                sentences: [
                  "Te alabo al sentirlo",
                  "Y aun cuando no",
                  "Te alabo y sé",
                  "Que estás en control",
                ],
              },
              {
                id: "v4",
                label: "Verso 4",
                sentences: [
                  "Es más que un sonido",
                  " Es adoración, oh-oh-oh",
                  " Y cuando alabamos",
                  "Caerá Jericó",
                ],
              },
            ],
            prechorus: [
              {
                id: "p1",
                label: "PreCoro 1",
                sentences: ["Mientras tenga aliento", "Mi alma canta y"],
              },
              {
                id: "p2",
                label: "PreCoro 2",
                sentences: [
                  "Que toda la",
                  "Creación",
                  "Alabe a Dios",
                  "Alabe a Dios",
                ],
              },
            ],
            chorus: [
              {
                id: "c",
                label: "Coro",
                sentences: [
                  "Alaba a Dios",
                  " Mi corazón",
                  "Alaba a Dios",
                  "Mi corazón",
                ],
              },
            ],
            bridge: [
              {
                id: "b1",
                label: "Puente 1",
                sentences: [
                  "No me detengo",
                  "Mi Dios vivo está",
                  "¿Cómo me voy a callar?, mi alma",
                  "\n",
                  "Alaba a Dios",
                  "Mi corazón",
                ],
              },
              {
                id: "b2",
                label: "Puente 2",
                sentences: [
                  "Alabo al que reina",
                  "Alabo al Señor",
                  "Alabo a aquel que la tumba venció",
                  "\n",
                  "Alabo al que es bueno",
                  "Alabo al que es fiel",
                  "Le alabo porque no hay otro como Él",
                ],
              },
            ],
          },
          structure: [
            "p2",
            "v1",
            "v2",
            "p1",
            "c",
            "v3",
            "v4",
            "p1",
            "c",
            "b1",
            "b2",
            "c",
            "b1",
            "p2",
            "p2",
          ],
        },
        { name: "Hay libertad en la casa de Dios", type: "alabanza" },
        { name: "Movimiento de gloria", type: "alabanza" },
        { name: "Quita la tristeza de tu corazón", type: "alabanza" },
        { name: "Danzando en cada temporada", type: "alabanza" },
        { name: "Esta es la razón", type: "alabanza" },
        { name: "Ola de Avivamiento", type: "alabanza" },
        { name: "Jubileo", type: "alabanza" },
        { name: "Jubilo", type: "alabanza" },
        { name: "No  hay nadie como Jesús", type: "alabanza" },
        { name: "Freedom", type: "alabanza" },
        { name: "Gracia sublime es", type: "alabanza" },
        { name: "Jericó", type: "alabanza" },
        { name: "Celebrad a Cristo", type: "alabanza" },
        { name: "Eterno", type: "alabanza" },
        { name: "Tu hijo soy", type: "alabanza" },
        { name: "Que no pare la alabanza", type: "alabanza" },
        { name: "Todo cambió", type: "alabanza" },
        { name: "Bueno es", type: "alabanza" },
        { name: "Eres todo poderoso", type: "alabanza" },
        { name: "Tu pueblo dice gracia", type: "alabanza" },
        { name: "Te doy gloria", type: "alabanza" },
        { name: "Llena la tierra con tu gloria", type: "alabanza" },
        { name: "Bautizados en fuego", type: "alabanza" },
        { name: "Nadie", type: "alabanza" },
        { name: "Alábenle", type: "alabanza" },
        { name: "Los muros caerán", type: "alabanza" },
        { name: "Grande es el Señor", type: "alabanza" },
        { name: "Fuego ha bajado del cielo", type: "alabanza" },
      ]}
    >
      {children}
    </SongsContext.Provider>
  );
}

export function useSongs() {
  return useContext(SongsContext);
}

export interface ISong {
  name: string;
  type: "alabanza" | "adoracion";
  letter?: ILetter;
  structure?: string[];
}

export interface ILetter {
  verses: IStanza[];
  prechorus: IStanza[];
  chorus: IStanza[];
  bridge: IStanza[];
}

export interface IStanza {
  id: string;
  label: string;
  sentences: string[];
}
