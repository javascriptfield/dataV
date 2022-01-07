import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import apiMock from "./api";

export function setupProdMockServer() {
  createProdMockServer([...apiMock]);
}
