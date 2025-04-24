import { axiosInstance } from "../lib/axios";

export function getCountries() {
  return axiosInstance
    .get("/api/country/")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR", error);
      return null;
    });
}

export function sendMessage(text: string) {
  return axiosInstance
    .post("/api/country/message", {
      message: text,
    })
    .then((response) => {
      // Si deseas ver la respuesta completa, puedes descomentar la siguiente línea:
      // console.log('RESPUESTA DE AXIOS', response);
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR", error);
      return null;
    });
}
