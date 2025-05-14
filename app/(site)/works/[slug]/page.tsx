import { Metadata } from "next";
import { Project } from "./components/Project";
import { workMetadata } from "./workMetadata";
import { Params } from "./types";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const metadata = await workMetadata({ params });
  return metadata;
}

export default function ProjectPage() {
  return <Project />;
}
