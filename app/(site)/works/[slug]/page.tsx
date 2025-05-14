import { Project } from "./components/Project";
import { workMetadata } from "./workMetadata";
import { WorkMetadataPropTypes } from "./types";

export async function generateMetadata({ params }: WorkMetadataPropTypes) {
  console.log("generateMetadata - params type:", typeof params);
  return workMetadata({ params });
}

export default function ProjectPage() {
  return <Project />;
}
