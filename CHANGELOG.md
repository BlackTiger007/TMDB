# Change Log

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
