"use client";
import { useParams } from "next/navigation";

export default function SlugPage() {
  const { id } = useParams();
  return <h1> Slug {id}</h1>;
}
