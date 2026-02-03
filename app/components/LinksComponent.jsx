import React from 'react';
import Link from 'next/link';

const SocialLink = ({ name, description, href = "#" }) => (
  <Link href={href} className="link-item group">
    <span className="link-title">{name}</span>
    <span className="link-metadata">{description}</span>
  </Link>
);

export default function Links() {
  return (
    <div className="flex flex-col gap-1">
      <SocialLink name="Instagram" description="@radimzavadil" />
      <SocialLink name="LinkedIn" description="Radim Zavadil" />
      <SocialLink name="GitHub" description="radimzavadil" />
      <SocialLink name="X" description="@radimzavadil" />
    </div>
  );
}