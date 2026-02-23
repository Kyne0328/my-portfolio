'use client';

import { useEffect, useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeading, Card } from '@/components/ui';
import { GithubRepo, GithubContributions } from '@/types';

const GitHubCalendar = lazy(() => import('react-github-calendar').then((mod) => ({ default: mod.GitHubCalendar })));

const GITHUB_USERNAME = 'Kyne0328';

const languageColors: Record<string, string> = {
  Dart: '#00B4AB',
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Java: '#b07219',
  Go: '#00add8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  C: '#555555',
  'C++': '#f34b7d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

interface GithubError {
  message: string;
}

async function fetchGithubData(): Promise<{
  repos: GithubRepo[];
  contrib: GithubContributions;
  error?: string;
}> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  if (!token) {
    return {
      repos: [],
      contrib: { total: 0, weeks: [] },
      error: 'GitHub token not configured. Add NEXT_PUBLIC_GITHUB_TOKEN to your environment variables.',
    };
  }

  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
  };

  try {
    const [reposRes, contribRes] = await Promise.all([
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
        { headers, next: { revalidate: 3600 } }
      ),
      fetch(
        'https://api.github.com/graphql',
        {
          method: 'POST',
          headers: {
            ...headers,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query($username: String!) {
                user(login: $username) {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: { username: GITHUB_USERNAME },
          }),
          next: { revalidate: 3600 },
        }
      ),
    ]);

    if (!reposRes.ok) {
      const errorData = await reposRes.json() as GithubError;
      return {
        repos: [],
        contrib: { total: 0, weeks: [] },
        error: `Failed to fetch repositories: ${errorData.message}`,
      };
    }

    if (!contribRes.ok) {
      const errorData = await contribRes.json() as GithubError;
      return {
        repos: [],
        contrib: { total: 0, weeks: [] },
        error: `Failed to fetch contributions: ${errorData.message}`,
      };
    }

    const repos: GithubRepo[] = await reposRes.json();
    const contribRaw = await contribRes.json();

    if (contribRaw.errors) {
      return {
        repos: [],
        contrib: { total: 0, weeks: [] },
        error: `GraphQL error: ${contribRaw.errors[0]?.message || 'Unknown error'}`,
      };
    }

    const calendar = contribRaw.data?.user?.contributionsCollection?.contributionCalendar;

    const contrib: GithubContributions = {
      total: calendar?.totalContributions || 0,
      weeks: calendar?.weeks || [],
    };

    return { repos, contrib };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return {
      repos: [],
      contrib: { total: 0, weeks: [] },
      error: `Failed to fetch GitHub data: ${message}`,
    };
  }
}

function ContributionGraph() {
  return (
    <div className="w-full overflow-x-auto">
      <Suspense fallback={<div className="text-muted-foreground text-center py-8">Loading...</div>}>
        <GitHubCalendar 
          username={GITHUB_USERNAME}
          colorScheme="dark"
          fontSize={12}
          blockSize={11}
          blockMargin={2}
          labels={{
            totalCount: '{{count}} contributions in the last year',
            months: [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            weekdays: [
              'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            ],
            legend: {
              less: 'Less',
              more: 'More',
            },
          }}
          theme={{
            dark: ['#18181b', '#1e3a5f', '#1d4ed8', '#2563eb', '#38bdf8'],
            light: ['#f1f5f9', '#bfdbfe', '#60a5fa', '#3b82f6', '#0ea5e9'],
          }}
        />
      </Suspense>
    </div>
  );
}

function RepoCard({ repo, index }: { repo: GithubRepo; index: number }) {
  const langColor = repo.language ? languageColors[repo.language] || 'var(--primary)' : 'var(--muted-foreground)';
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/30 transition-all group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ y: -4 }}
    >
      <h4 className="font-medium truncate mb-1 group-hover:text-primary transition-colors">
        {repo.name}
      </h4>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
        {repo.description || 'No description'}
      </p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColor }} />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: 'var(--star-color)' }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6zM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25zM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6zM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5z" />
          </svg>
          {repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
}

export function GithubSection() {
  const [data, setData] = useState<{
    repos: GithubRepo[];
    contrib: GithubContributions;
    error?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return (
    <Section id="github">
      <SectionHeading
        title="GitHub Activity"
        subtitle={`${data?.contrib.total || 0} contributions in the last year`}
      />

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-muted border-t-primary" />
        </div>
      ) : data?.error ? (
        <Card className="text-center">
          <div className="py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mx-auto mb-4 text-muted-foreground"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-muted-foreground mb-2">Unable to load GitHub data</p>
            <p className="text-sm text-muted-foreground/70">{data.error}</p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-primary hover:underline"
            >
              View GitHub Profile
            </a>
          </div>
        </Card>
      ) : (
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Contribution Graph
                </h3>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View Profile
                </a>
              </div>
              {data?.contrib.weeks?.length ? (
                <ContributionGraph />
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No contribution data available
                </p>
              )}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Recent Repositories</h3>
              {data?.repos.length ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.repos.map((repo, index) => (
                  <RepoCard key={repo.id} repo={repo} index={index} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No repositories found
              </p>
            )}
          </motion.div>
        </div>
      )}
    </Section>
  );
}
