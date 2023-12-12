import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const tour = await db.tour.findMany();
  return NextResponse.json({ data: tour });
};
