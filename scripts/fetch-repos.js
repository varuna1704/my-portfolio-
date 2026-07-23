import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const username = 'varuna1704';
const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;
const outputPath = path.join(__dirname, '../src/data/repos.json');

const options = {
  headers: {
    'User-Agent': 'node-fetch-script'
  }
};

function getRepos() {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Request Failed. Status Code: ${res.statusCode}`));
        return;
      }

      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', (e) => {
      reject(e);
    });
  });
}

async function run() {
  console.log('Fetching GitHub repositories for', username);
  try {
    const repos = await getRepos();
    if (Array.isArray(repos)) {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify(repos, null, 2));
      console.log('Successfully wrote', repos.length, 'repos to', outputPath);
    } else {
      throw new Error('Response is not an array');
    }
  } catch (error) {
    console.error('Failed to fetch repositories from GitHub:', error.message);
    if (fs.existsSync(outputPath)) {
      console.log('Using existing repos.json as fallback.');
    } else {
      console.log('No existing repos.json found. Creating an empty fallback array.');
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify([], null, 2));
    }
  }
}

run();
