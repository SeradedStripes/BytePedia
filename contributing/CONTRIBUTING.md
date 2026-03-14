# Contributing to BytePedia
## Getting Started

1. **Fork the repository** and clone it to your local machine
2. Make your changes locally.
3. Run the local server to preview your changes:

```bash
./dev.sh
```

4. Open http://localhost:8000 in your browser.

>`dev.sh` also regenerates `/langs/index.json` (the list of available languages), so make sure to run it before testing.
5. Once your changes are good, commit and push them to your fork.
6. Open a pull request to the main repo with a clear description of your changes.

---

## Project Structure

- `/langs/` – Each language lives in its own folder.
- `/langs/<lang>/main.md` – The main markdown file for the language.
- `/langs/<lang>/logo-*.svg` – Language logos (512×512 recommended).
- `/langs/index.json` – Generated list of language slugs (updated by `build-langs-index.sh`).

---

## Adding or Updating a Language

### 1. Add or update the markdown

- Create (or edit) `/langs/<your-lang>/main.md`.
- Use existing language folders as templates.

### 2. Add or update the sources

- Create (or edit) `/langs/<your-lang>/sources.md`.
- List all sources used for research and content creation.
- Include URLs and access dates.

### 3. Add or update logos

- Place SVG logos at `/langs/<your-lang>/logo-<n>.svg`.
- Recommended size: **512×512**. (As long as it renders well on the site, it can be any size, but 512×512 is ideal for quality and performance.)

---

## Pull Request Checklist

- [ ] Changes are limited to the intended language and/or assets.
- [ ] Your markdown and HTML are valid and render correctly.
- [ ] All added assets (logos, images) are optimized for web (SVG).
- [ ] PR description explains what changed and why.
- [ ] All Research and Content are properly cited with sources
- [ ] All content is accurate and correct
- [ ] All content is properly formatted and easy to read

---

## Style & Naming Guidelines

- Folder names under `/langs/` should be lowercase and match the language slug used in URLs.
- Keep file names consistent: `main.md`, `index.html`, `logo-<n>.svg`.

---

## Testing Changes

Run `./dev.sh` and confirm the language renders properly.

---

## License

By contributing, you agree that your contributions will be licensed under the project’s MIT License.
