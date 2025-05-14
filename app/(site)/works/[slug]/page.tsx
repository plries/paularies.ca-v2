import { workMetadata as getMetadata } from "./workMetadata";
import { Project } from "./components/Project";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return getMetadata({ params });
}

export default function ProjectPage() {
  return <Project />;
}
