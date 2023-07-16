import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

export const getAllUsers = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/user/all-user`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async ({ name, email, password, role }) => {
  const body = { name, email, password, role };
  try {
    let res = await axios.post(`${apiURL}/api/user/add-user`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (user) => {
  const { _id, name, email, password, role } = user;
  const body = { _id, name, email, password, role };
  try {
    let res = await axios.post(`${apiURL}/api/user/edit-user`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (uId) => {
  try {
    let res = await axios.post(`${apiURL}/api/user/delete-user`, { uId });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (uId) => {
  try {
    let res = await axios.post(`${apiURL}/api/user/signle-user`, { uId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
