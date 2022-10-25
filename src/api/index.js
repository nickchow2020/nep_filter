import axios from "axios";
import { BASE_URL } from "../constants";

const GET_CONTACTS_URL = `${BASE_URL}/contacts`;

export const getContacts = async () => {
  return axios.get(GET_CONTACTS_URL);
};
