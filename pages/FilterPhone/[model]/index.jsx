import React from "react";
import Phone from './Phone'
import { useGetAllModelDetailQuery } from "@/Redux/productsReducer";

function index() {
  return <>
  <Phone />
  </>
}

export default index;
