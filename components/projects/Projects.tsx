'use client';

import React from "react";
import projects from "@/data/content/projects";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useSearchParams } from "next/navigation";

function Projects({ overwriteProjects }) {
  const searchParams = useSearchParams();

  const tag = searchParams.get('tag');

  const projectsList = overwriteProjects ? overwriteProjects : projects;

  const filteredProjects = tag
  ? projectsList.filter(project =>
      project.tags.some(tagItem => kebabCase(tagItem) === tag.toLowerCase())
    )
  : projectsList;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {filteredProjects.map(item => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}

export default Projects;
