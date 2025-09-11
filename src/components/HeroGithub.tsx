import { useEffect, useState } from "react";

// Définition des types pour GitHub API
interface GithubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
}

export default function GithubSection() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/snibix")
      .then((res) => res.json())
      .then((data: GithubProfile) => setProfile(data));

    fetch("https://api.github.com/users/snibix/repos?sort=updated&per_page=5")
      .then((res) => res.json())
      .then((data: GithubRepo[]) => setRepos(data));
  }, []);

  if (!profile) {
    return (
      <p className="text-center text-gray-400">Loading GitHub profile...</p>
    );
  }

  return (
    <section className="p-8 py-10 flex flex-col gap-8" id="git">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-semibold">
        Mon Github
      </h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Profil GitHub */}
        <div className="lg:w-1/3 flex flex-col items-center text-center">
          <img
            src={profile.avatar_url}
            alt={profile.name}
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-bold">{profile.name}</h2>
          <p className="text-gray-900">@{profile.login}</p>
          <p className="mt-2 text-sm text-gray-900">{profile.bio}</p>

          <div className="flex gap-6 mt-4 text-sm text-gray-900">
            <span>👥 {profile.followers} followers</span>
            <span>📂 {profile.public_repos} repos</span>
          </div>

          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mt-6 inline-block px-4 py-2 bg-gradient-to-r from-indigo-900 to-blue-950 hover:opacity-90 transition rounded"
          >
            Voir sur Github
          </a>
        </div>

        {/* Derniers projets */}
        <div className="lg:w-2/3">
          <h3 className="text-xl font-semibold mb-4">Latest Projects</h3>
          <ul className="space-y-4">
            {repos.map((repo) => (
              <li
                key={repo.id}
                className="p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-900 hover:underline"
                >
                  {repo.name}
                </a>
                <p className="text-gray-900 text-sm mt-1">
                  {repo.description || "No description available"}
                </p>
                <span className="text-xs text-gray-500">
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
