"use server";
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
    const { data } = await axios.get("http://localhost:8000/api/projects/");

    return data;
  } catch (error) {
    console.log();
  }
};

export const fetchSingleProject = async (id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/projects/${id}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
