# [0.21.0-next.3](https://github.com/BlackTiger007/tmdb/compare/v0.21.0-next.2...v0.21.0-next.3) (2024-09-15)


### Features

* **Lists:** add support for Lists features (Add Movie, Check Item Status, Clear, Create, Delete, Details, Remove Movie) ([50f4755](https://github.com/BlackTiger007/tmdb/commit/50f475541fe49b989f01e7360000f91a4cd13bb8))

# [0.21.0-next.2](https://github.com/BlackTiger007/tmdb/compare/v0.21.0-next.1...v0.21.0-next.2) (2024-09-15)

### Bug Fixes

- add | null to types where applicable and format code with Prettier ([8da949f](https://github.com/BlackTiger007/tmdb/commit/8da949f3eab941eabcd25236b46a3fd8fd96f25b))

### Features

- add support for Guest Sessions features (Rated Movies, Rated TV, Rated TV Episodes) ([a65b272](https://github.com/BlackTiger007/tmdb/commit/a65b272cc9c2ee43bb7660b767e68a01b7753993))
- **discover:** add support for movie and TV discover endpoints ([92f7bed](https://github.com/BlackTiger007/tmdb/commit/92f7bed487d44f72c532b40713fd61e10d84326c))

# [0.21.0-next.1](https://github.com/BlackTiger007/tmdb/compare/v0.20.3...v0.21.0-next.1) (2024-09-15)

### Bug Fixes

- Update `package-lock.json` and include it in release config ([e5308d3](https://github.com/BlackTiger007/tmdb/commit/e5308d3fdc488f7b2a49c34ad5cdbc189b823db1))

### Features

- **movies:** add support for Reviews, Similar, Add Rating, and Delete Rating endpoints ([1140638](https://github.com/BlackTiger007/tmdb/commit/11406388ac595c4503495f6388d6bb663c95e2ef))

## [0.20.3](https://github.com/BlackTiger007/tmdb/compare/v0.20.2...v0.20.3) (2024-09-15)

### Bug Fixes

- update semantic-release configuration to fix branch issues ([6cbd488](https://github.com/BlackTiger007/tmdb/commit/6cbd488ce9fb9b7e0e74cd2d13835baf98850b7e))

# Change Log

## 0.20.4

### Fixes

- Fixed `semantic-release` configuration to correctly define branches and channels, resolving errors related to invalid branch settings.

## 0.20.3

- **chore**: Updated Semantic Release configuration:
  - Added support for `next` branch with pre-release configuration
  - Included additional plugins: `@semantic-release/npm` and `@semantic-release/changelog`
  - Adjusted GitHub Actions workflow to trigger on `push` events to `main` and `next` branches

## 0.20.2

### Semantic Release

### Configuration and Workflow Updates

- **chore**: Updated `package.json` to include `files` and `publishConfig` for publishing.
- **chore**: Renamed `release.config.ts` to `release.config.cjs` for compatibility.
- **chore**: Modified `release.yml` to include `npm audit signatures` and use `NPM_TOKEN` for `semantic-release`.
- **chore**: Removed `npm-publish.yml` since `semantic-release` now handles publishing automatically.

## 0.20.1

### Build Script

- **build**: Updated build script to format code with Prettier before cleaning and building

## 0.20.0

### Features

- **feat**: Added support for TV Series endpoints:
  - Details
  - Account States
  - Aggregate Credits
  - Alternative Titles
  - Changes
  - Content Ratings
  - Credits
  - Episode Groups
  - External IDs
  - Images
  - Keywords
  - Latest
  - Lists
  - Recommendations
  - Reviews
  - Screened Theatrically
  - Similar
  - Translations
  - Videos
  - Watch Providers
  - Add Rating
  - Delete Rating

## 0.19.1

### Bug Fixes

- **fix**: Ensure that the `Content-Type` header is only set for `POST` and `DELETE` methods.

## 0.19.0

### Features

- **feat**: Added support for Find By ID (Find) feature.

## 0.18.0

### Features

- **feat**: Added support for various configuration features:
  - Details
  - Countries
  - Jobs
  - Languages
  - Primary Translations
  - Timezones

## 0.17.2

### Continuous Integration

- **ci**: Renamed GitHub Actions workflow from 'Node.js Package' to 'Publish NPM Package' for better clarity.

## 0.17.1

### Continuous Integration

- **ci**: Combined the build and publish steps into a single job in the GitHub Actions workflow to ensure the build files are properly included in the npm release.

### Build System

- **build**: Added `release.config.ts` and `CHANGELOG.md` to `.npmignore` to exclude them from the npm package.

## 0.17.0

### Build System

- **build**: Updated `release.config.ts` to use ES module syntax (`export default`) instead of CommonJS (`module.exports`).

## 0.16.2

### Continuous Integration

- **ci**: Removed `push` trigger from GitHub Actions workflow. The workflow will now only execute on release events.

## 0.16.1

### Documentation

- **docs**: Removed outdated GitHub Actions release badge from README.

## 0.16.0

### Continuous Integration

- **ci**: Added a new GitHub Actions workflow to improve automation and deployment processes.

## 0.15.2

### Changed

- Split the single workflow job into two distinct jobs: `build` and `publish-npm`.
  - **`build`**: Handles code checkout, Node.js setup, dependency installation, and project build.
  - **`publish-npm`**: Depends on the `build` job and performs npm publishing.
- Renamed workflow file from `publish.yml` to `npm-publish.yml`.

**Benefits:**

- Improved job separation for better clarity and maintainability.
- `publish-npm` now runs only after a successful `build` job.
- More descriptive file name for better understanding of workflow purpose.

## 0.15.1

- Updated CHANGELOG.md:
  - Reformatted entries for improved readability and consistency
  - Enhanced descriptions and markdown formatting

## 0.15.0

- **Added support for `Companies` endpoints:**
  - **Details**: Retrieve detailed information about a company using its ID.
  - **Alternative Names**: Fetch a list of alternative names for a company.
  - **Images**: Access company logos by ID. Supports both PNG and SVG formats, with a preference for SVG due to its resolution independence.

## 0.14.0

- **Enhanced authentication session management:**
  - Create Guest Session
  - Create Request Token
  - Create Session
  - Create Session (from v4 token)
  - Create Session (with login)
  - Delete Session
  - Validate Key

## 0.13.2

- Improved `POST` method for better type handling.
- Standardized `post` type to `POST` for consistency.

## 0.13.1

- Added `DELETE` method to API class.
- Removed `ValidateKeyResponse` type from types directory.

## 0.13.0

- **Added support for Images in Collections:**
  - Fetch images related to specific collections.

## 0.12.1

- Added JSDoc comments for Translations endpoint in Collections.

## 0.12.0

- **Added support for Translations in Collections:**
  - Retrieve available translations for movie collections.

## 0.11.0

- **Introduced Collections and Details endpoints:**
  - Fetch details and manage movie collections.

## 0.10.2

- Updated CHANGELOG

## 0.10.1

- Added JSDoc comments

## 0.10.0

- Added TV List

## 0.9.0

- Added People List

## 0.8.0

- Added Changes and Movie List

## 0.7.0

- Added TV Certifications

## 0.6.0

- Added Certifications and Movie Certifications

## 0.5.0

- Added Watchlist TV

## 0.4.0

- Added Watchlist Movies

## 0.3.0

- Added Rated TV Episodes

## 0.2.5

- Updated package-lock.json

## 0.2.4

- Created package-lock.json

## 0.2.3

- Updated workflow to deploy on main branch

## 0.2.2

- Fixed bug and formatted code

## 0.2.1

- Updated movie.ts - ListsResponse types

## 0.2.0

- Added Movies (Keywords)

## 0.1.3

- Updated README.md

## 0.1.2

- Optimized code and added JSDoc comments

## 0.1.1

- Created CHANGELOG.md
- Updated Github Workflow and package.json

## 0.1.0

Release

### Current Features

| **Feature**                                                                             | **Status** |
| --------------------------------------------------------------------------------------- | ---------- |
| [Details](https://developer.themoviedb.org/reference/account-details)                   | ✅         |
| [Add Favorite](https://developer.themoviedb.org/reference/account-add-favorite)         | ✅         |
| [Add To Watchlist](https://developer.themoviedb.org/reference/account-add-to-watchlist) | ✅         |
| [Favorite Movies](https://developer.themoviedb.org/reference/account-get-favorites)     | ✅         |
| [Favorite TV](https://developer.themoviedb.org/reference/account-favorite-tv)           | ✅         |
| [Lists](https://developer.themoviedb.org/reference/account-lists)                       | ✅         |
| [Rated Movies](https://developer.themoviedb.org/reference/account-rated-movies)         | ✅         |
| [Rated TV](https://developer.themoviedb.org/reference/account-rated-tv)                 | ✅         |

### Credits

| **Feature**                                                          | **Status** |
| -------------------------------------------------------------------- | ---------- |
| [Details](https://developer.themoviedb.org/reference/credit-details) | ✅         |

### Genres

| **Feature**                                                               | **Status** |
| ------------------------------------------------------------------------- | ---------- |
| [Movie List](https://developer.themoviedb.org/reference/genre-movie-list) | ✅         |
| [TV List](https://developer.themoviedb.org/reference/genre-tv-list)       | ✅         |

### Keywords

| **Feature**                                                           | **Status** |
| --------------------------------------------------------------------- | ---------- |
| [Details](https://developer.themoviedb.org/reference/keyword-details) | ✅         |

### Movies

| **Feature**                                                                               | **Status** |
| ----------------------------------------------------------------------------------------- | ---------- |
| [Details](https://developer.themoviedb.org/reference/movie-details)                       | ✅         |
| [Account States](https://developer.themoviedb.org/reference/movie-account-states)         | ✅         |
| [Alternative Titles](https://developer.themoviedb.org/reference/movie-alternative-titles) | ✅         |
| [Changes](https://developer.themoviedb.org/reference/movie-changes)                       | ✅         |
| [Credits](https://developer.themoviedb.org/reference/movie-credits)                       | ✅         |
| [External IDs](https://developer.themoviedb.org/reference/movie-external-ids)             | ✅         |
| [Images](https://developer.themoviedb.org/reference/movie-images)                         | ✅         |
| [Keywords](https://developer.themoviedb.org/reference/movie-keywords)                     | ✅         |
| [Latest](https://developer.themoviedb.org/reference/movie-latest)                         | ✅         |
| [Lists](https://developer.themoviedb.org/reference/movie-lists)                           | ✅         |
| [Recommendations](https://developer.themoviedb.org/reference/movie-recommendations)       | ✅         |
| [Release Dates](https://developer.themoviedb.org/reference/movie-release-dates)           | ✅         |
| [Translations](https://developer.themoviedb.org/reference/movie-translations)             | ✅         |
| [Videos](https://developer.themoviedb.org/reference/movie-videos)                         | ✅         |
| [Watch Providers](https://developer.themoviedb.org/reference/movie-watch-providers)       | ✅         |

### Watch Providers

| **Feature**                                                                                       | **Status** |
| ------------------------------------------------------------------------------------------------- | ---------- |
| [Available Regions](https://developer.themoviedb.org/reference/watch-providers-available-regions) | ✅         |
| [Movie Providers](https://developer.themoviedb.org/reference/watch-providers-movie-st)            | ✅         |
| [TV Providers](https://developer.themoviedb.org/reference/watch-provider-tv-st)                   | ✅         |
