"use server";

const url = process.env.BACKEND_URL;

import axios from "axios";
import prisma from "./db";

export const createModel = async (formValues) => {
  console.log(formValues);
  await prisma.tour.create({
    data: formValues,
  });
};

export const fetchProjects = async () => {
  try {
    const { data } = await axios.get(`${url}`);

    return data;
  } catch (error) {
    console.log();
  }
};

export const fetchSingleProject = async (id) => {
  try {
    const { data } = await axios.get(`${url}${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
