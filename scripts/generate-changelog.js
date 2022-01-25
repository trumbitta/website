import fs from "fs";
import { Octokit } from "octokit";

const sayHello = async (octokit) => {
  const {
    viewer: { login },
  } = await octokit.graphql(`{
    viewer {
      login
    }
  }`);
  console.log("Hello, %s\r\n", login);
};

const getParticipants = (pr) =>
  pr.participants.nodes
    .map(({ login }) => login)
    .filter((login) => !["roboquat"].includes(login))
    .sort()
    .join(",");

const parseReleaseNote = (pr) => {
  // For some reason, the multi-line regex doesn't work. We remove all new line
  // characters and match against the one-line string instead.
  const releaseNoteMatch = pr.body
    .replace(/\r\n/g, "")
    .match(/```release-notes?(.+?)```/);
  if (!releaseNoteMatch || releaseNoteMatch[1].trim() === "NONE") return;
  return releaseNoteMatch[1];
};

const hasReleaseNote = (pr) => !!parseReleaseNote(pr);

const generatePrChangelogLine = (pr) =>
  `- [#${pr.number}](${pr.url}) - ${parseReleaseNote(
    pr
  )} <Contributors usernames="${getParticipants(pr)}" />\r\n`;

const main = async () => {
  if (process.argv.length !== 5) {
    console.error(
      "Usage: node ./scripts/generate-changelog.js [release-date] [from] [to]"
    );
    console.error("");
    console.error(
      "Example: node ./scripts/generate-changelog.js 2022-01-17 2022-01-10 2022-01-15"
    );
    process.exit(1);
  }
  const releaseDate = process.argv[2];
  const from = process.argv[3];
  const to = process.argv[4];

  if (!process.env.CHANGELOG_GITHUB_ACCESS_TOKEN) {
    console.warn(
      "Please provide a GitHub personal access token via a `CHANGELOG_GITHUB_ACCESS_TOKEN` environment variable."
    );
    console.log(
      "Create a personal access token at https://github.com/settings/tokens/new?scopes=repo,user"
    );
    process.exit(1);
  }

  const octokit = new Octokit({
    auth: process.env.CHANGELOG_GITHUB_ACCESS_TOKEN,
  });
  await sayHello(octokit);

  const { search } = await octokit.graphql(
    `query($searchQuery:String!) {
    search(query: $searchQuery, type: ISSUE, last: 50) {
      edges {
        node {
          ... on PullRequest {
            body
            number
            participants(first: 20) {
              nodes {
                login
              }
            }
            url
          }
        }
      }
    }
  }`,
    {
      searchQuery: `repo:gitpod-io/gitpod is:pr is:merged merged:${from}..${to} sort:updated-desc`,
    }
  );

  const fixesAndImprovements = search.edges
    .map((edge) => edge.node)
    // .filter(pr => pr.number === 7609) // Helps with testing
    .filter(hasReleaseNote)
    .map(generatePrChangelogLine)
    .filter((identity) => identity)
    .join("");

  fs.copyFileSync(
    "./src/lib/contents/changelog/_template.md",
    `./src/lib/contents/changelog/${releaseDate}.md`
  );
  let newChangelogFileContent = fs.readFileSync(
    `./src/lib/contents/changelog/${releaseDate}.md`,
    "utf-8"
  );
  newChangelogFileContent = newChangelogFileContent.replace(
    /{{releaseDate}}/g,
    releaseDate
  );
  newChangelogFileContent = newChangelogFileContent.replace(
    /{{fixesAndImprovements}}/,
    fixesAndImprovements
  );
  fs.writeFileSync(
    `./src/lib/contents/changelog/${releaseDate}.md`,
    newChangelogFileContent
  );
  console.log(
    `Changelog generated. Please edit ./src/lib/contents/changelog/${releaseDate}.md`
  );
};

main().catch((error) => {
  console.error(error);
});
