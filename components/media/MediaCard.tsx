'use client'
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';

function MediaCard({ media }) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={media.id}
    >
      <a
        href={media.link || media.github}
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {media.type === 'facebook' && <FacebookEmbed url={media.link} width={550} />}
          {media.type === 'instagram' && <InstagramEmbed url={media.link} width={550} />}
        </div>
      </a>

    </div>
  );
}

export default MediaCard;
