import React from "react";
import media from "@/data/content/media";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import MediaCard from "./MediaCard";

function Media({ overwriteMedia }) {
  const projectsList = overwriteMedia ? overwriteMedia : media;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3 items-start">
      {projectsList.map(item => {
        return <MediaCard key={item.id} media={item} />;
      })}
    </div>
  );
}

export default Media;
