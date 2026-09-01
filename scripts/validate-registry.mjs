import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
let errors = 0;

console.log('Validating Aman Intelligence asset registry...');

// 1. Validate aman.json
const amanJsonPath = path.join(rootDir, 'aman.json');
if (!fs.existsSync(amanJsonPath)) {
  console.error('FAIL: aman.json does not exist');
  errors++;
} else {
  try {
    const data = JSON.parse(fs.readFileSync(amanJsonPath, 'utf-8'));
    if (!data.name || !data.version) {
      console.error('FAIL: aman.json missing name or version');
      errors++;
    } else {
      console.log('PASS: aman.json is valid');
    }
  } catch (e) {
    console.error(`FAIL: aman.json invalid JSON: ${e.message}`);
    errors++;
  }
}

// 2. Validate skills/
const skillsDir = path.join(rootDir, 'skills');
if (fs.existsSync(skillsDir)) {
  const skillDirs = fs.readdirSync(skillsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log(`Found ${skillDirs.length} skills in skills/`);
  for (const skill of skillDirs) {
    const skillFile = path.join(skillsDir, skill, 'SKILL.md');
    if (!fs.existsSync(skillFile)) {
      console.error(`FAIL: skill "${skill}" is missing SKILL.md`);
      errors++;
    } else {
      const content = fs.readFileSync(skillFile, 'utf-8').trim();
      if (content.length === 0) {
        console.error(`FAIL: skill "${skill}/SKILL.md" is empty`);
        errors++;
      }
    }
  }
}

// 3. Validate prompts/
const promptsDir = path.join(rootDir, 'prompts');
if (fs.existsSync(promptsDir)) {
  const promptDirs = fs.readdirSync(promptsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log(`Found ${promptDirs.length} prompts in prompts/`);
  for (const prompt of promptDirs) {
    const promptFile = path.join(promptsDir, prompt, 'PROMPT.md');
    if (!fs.existsSync(promptFile)) {
      console.error(`FAIL: prompt "${prompt}" is missing PROMPT.md`);
      errors++;
    } else {
      const content = fs.readFileSync(promptFile, 'utf-8').trim();
      if (content.length === 0) {
        console.error(`FAIL: prompt "${prompt}/PROMPT.md" is empty`);
        errors++;
      }
    }
  }
}

if (errors > 0) {
  console.error(`\nValidation finished with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll registry assets passed validation successfully.');
}
