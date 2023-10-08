import axios from "axios";
import { ContactFormInputs } from "./api";

export const submitContactForm = async (data: ContactFormInputs) => {
  return axios.post("/api/contact", JSON.stringify(data));
};
