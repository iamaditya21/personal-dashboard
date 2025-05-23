import React from "react";

interface ProfileContact {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  phone: string;
}

interface ProfileData {
  name: string;
  photo: string;
  bio: string;
  contact: ProfileContact;
}

type ProfileProps = {
  profile: ProfileData;
};

export default function Profile({ profile }: ProfileProps) {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-6 rounded shadow">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-32 h-32 rounded-full object-cover mr-6 mb-4 md:mb-0"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
        <p className="mb-4">{profile.bio}</p>
        <div className="space-x-4 text-sm">
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-blue-600 hover:underline"
          >
            {profile.contact.email}
          </a>
          <span>•</span>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
          📍 {profile.contact.location} | 📞 {profile.contact.phone}
        </div>
      </div>
    </section>
  );
}
