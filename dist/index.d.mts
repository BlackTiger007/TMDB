type POST = {
    status_code: number;
    status_message: string;
    success: boolean;
};
type DELETE = {
    success: boolean;
};

type Url = 'https://api.themoviedb.org/3';
type ImagePath = string | null;
type DetailsResponse$5 = {
    adult: boolean;
    backdropPath: ImagePath;
    belongsToCollection: null | {
        id: number;
        name: string;
        posterPath: string | null;
        backdropPath: string | null;
    };
    budget: number;
    genres: ReadonlyArray<Genre$2>;
    homepage: string | null;
    id: number;
    imdbId: string | null;
    originalLanguage: string;
    originalTitle: string;
    overview: string | null;
    popularity: number;
    posterPath: ImagePath;
    productionCompanies: ReadonlyArray<ProductionCompany>;
    productionCountries: ReadonlyArray<ProductionCountry>;
    releaseDate: string;
    revenue: number;
    runtime: number | null;
    spokenLanguages: ReadonlyArray<SpokenLanguage$1>;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
};
type AlternativeTitle = {
    iso_3166_1: string;
    title: string;
    type: string;
};
type AlternativeTitlesResponse$1 = {
    id: number;
    titles: AlternativeTitle[];
};
type ChangesResponse$2 = {
    changes: Array<{
        key: string;
        items: Array<{
            id: string;
            action: 'added' | 'updated' | 'deleted';
            time: string;
            iso_639_1: string;
            iso_3166_1: string;
            value: string | number | {
                title?: string;
                type?: string;
                iso_3166_1?: string;
                primary?: boolean;
                tagline?: string;
                backdrop?: {
                    file_path: string;
                    iso_639_1: string | null;
                };
                poster?: {
                    file_path: string;
                    iso_639_1: string | null;
                };
                title_logo?: {
                    file_path: string;
                    iso_639_1: string | null;
                };
            };
            original_value?: string | number | {
                title?: string;
                type?: string;
                iso_3166_1?: string;
                primary?: boolean;
                tagline?: string;
                backdrop?: {
                    file_path: string;
                    iso_639_1: string | null;
                };
                poster?: {
                    file_path: string;
                    iso_639_1: string | null;
                };
                title_logo?: {
                    file_path: string;
                    iso_639_1: string | null;
                };
            };
        }>;
    }>;
};
interface CastMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}
interface CreditsResponse$2 {
    id: number;
    cast: CastMember[];
}
interface AccountStatesResponse {
    id: number;
    favorite: boolean;
    rated: boolean;
    watchlist: boolean;
}
interface ExternalIDsResponse {
    id: number;
    imdb_id: string | null;
    wikidata_id: string | null;
    facebook_id: string | null;
    instagram_id: string | null;
    twitter_id: string | null;
}
interface Image {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}
interface ImageResponse {
    backdrops: Image[];
    id: number;
    logos: Image[];
    posters: Image[];
}
interface Keyword {
    id: number;
    name: string;
}
interface KeywordsResponse$1 {
    id: number;
    keywords: Keyword[];
}
interface Genre$2 {
    id: number;
    name: string;
}
interface Genre$2 {
    id: number;
    name: string;
}
interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}
interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}
interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}
interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}
interface SpokenLanguage$1 {
    iso_639_1: string;
    name: string;
}
interface SpokenLanguage$1 {
    iso_639_1: string;
    name: string;
}
interface LatestResponse$1 {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    };
    budget: number;
    genres: Genre$2[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage$1[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
type ReleaseDate = {
    certification: string;
    descriptors: string[];
    iso_639_1: string;
    note: string;
    release_date: string;
    type: number;
};
type CountryReleaseDates = {
    iso_3166_1: string;
    release_dates: ReleaseDate[];
};
type ReleaseDatesResponse = {
    id: number;
    results: CountryReleaseDates[];
};
type MovieData = {
    homepage: string;
    overview: string;
    runtime: number;
    tagline: string;
    title: string;
};
type Translation$1 = {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: MovieData;
};
type TranslationsResponse$2 = {
    id: number;
    translations: Translation$1[];
};
type Trailer = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    published_at: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    id: string;
};
type VideosResponse$1 = {
    id: number;
    results: Trailer[];
};
type StreamingProvider = {
    logo_path: string;
    provider_id: number;
    provider_name: string;
    display_priority: number;
};
type RegionAvailability = {
    link: string;
    flatrate?: StreamingProvider[];
    rent?: StreamingProvider[];
    buy?: StreamingProvider[];
};
type WatchProvidersResponse$1 = {
    id: number;
    results: {
        [regionCode: string]: RegionAvailability;
    };
};
type MovieList = {
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_639_1: string;
    iso_3166_1: string;
    list_type: string;
    name: string;
    poster_path: string | null;
};
type ListsResponse$2 = {
    id: number;
    page: number;
    results: MovieList[];
    total_pages: number;
    total_results: number;
};
type GenreID = 28 | 12 | 16 | 35 | 10751 | 14;
type Movie$1 = {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: GenreID[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    rating?: number;
};
type RecommendationsResponse$1 = {
    page: number;
    results: Movie$1[];
    total_pages: number;
    total_results: number;
};

declare class api {
    protected apiKey: string;
    protected language: string;
    protected url: Url;
    protected static readonly MAX_RETRIES = 3;
    protected static readonly RETRY_DELAY = 1000;
    constructor(apiKey: string, language?: string);
    protected initialize(): Promise<void>;
    protected buildUrl(endpoint: string): string;
    protected delay(ms: number): Promise<void>;
    protected validateKey(apiKey: string, retries?: number): Promise<POST>;
    buildQueryParams(params: {
        [key: string]: any;
    }): URLSearchParams;
    private fetchRequest;
    GET<T>(endpoint: string, retries?: number): Promise<T>;
    POST<T = POST>(endpoint: string, body: Record<string, any>, retries?: number): Promise<T>;
    DELETE<T = DELETE>(endpoint: string, retries?: number): Promise<T>;
}

type Avatar = {
    gravatar: {
        hash: string | null;
    };
    tmdb: {
        avatar_path: string | null;
    };
};
type DetailsResponse$4 = {
    avatar: Avatar;
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
};
type TVShow = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
};
type FavoriteTvResponse = {
    page: number;
    results: TVShow[];
    total_pages: number;
    total_results: number;
};
type List = {
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_639_1: string;
    list_type: string;
    name: string;
    poster_path: string | null;
};
type ListsResponse$1 = {
    page: number;
    results: List[];
    total_pages: number;
    total_results: number;
};
type RatedResponse = {
    page: number;
    results: TVShow[];
    total_pages: number;
    total_results: number;
};
type Episode = {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
    rating: number;
};
type ratedTvEpisodesResponse = {
    page: number;
    results: Episode[];
    total_pages: number;
    total_results: number;
};
type MovieResponse$1 = {
    page: number;
    results: Movie$1[];
    total_pages: number;
    total_results: number;
};

declare class AccountService {
    private apiInstance;
    constructor(apiInstance: api);
    details(account_id: number, session_id?: string): Promise<DetailsResponse$4>;
    addFavorite(account_id: number, raw_body: {
        media_type: 'movie' | 'tv';
        media_id: number;
        favorite: boolean;
    }, session_id?: string): Promise<POST>;
    addToWatchlist(account_id: number, raw_body: {
        media_type: 'movie' | 'tv';
        media_id: number;
        watchlist: boolean;
    }, session_id?: string): Promise<POST>;
    favoriteMovies(account_id: number, language?: string, page?: number, session_id?: string, sort_by?: 'created_at.asc' | 'created_at.desc'): Promise<Movie$1>;
    favoriteTv(account_id: number, language?: string, page?: number, session_id?: string, sort_by?: 'created_at.asc' | 'created_at.desc'): Promise<FavoriteTvResponse>;
    lists(account_id: number, page?: number, session_id?: string): Promise<ListsResponse$1>;
    ratedMovies(account_id: number, language?: string, page?: number, session_id?: string, sort_by?: 'created_at.asc' | 'created_at.desc'): Promise<Movie$1>;
    ratedTv(account_id: number, language?: string, page?: number, session_id?: string, sort_by?: 'created_at.asc' | 'created_at.desc'): Promise<RatedResponse>;
    ratedTvEpisodes(account_id: number, language?: string, page?: number, session_id?: string, sort_by?: 'created_at.asc' | 'created_at.desc'): Promise<ratedTvEpisodesResponse>;
    watchlistMovies(account_id: number, language?: string, page?: number, session_id?: string, sort_by?: 'created_at.asc' | 'created_at.desc'): Promise<MovieResponse$1>;
    watchlistTv(account_id: number, language?: string, page?: number, session_id?: string, sort_by?: 'created_at.asc' | 'created_at.desc'): Promise<FavoriteTvResponse>;
}

type CreateGuestSessionResponse = {
    success: boolean;
    guest_session_id: string;
    expires_at: string;
};
type CreateRequestTokenResponse = CreateGuestSessionResponse;
type CreateSessionResponse = {
    success: boolean;
    session_id: string;
};
type CreateSessionFromV4TokenResponse = CreateSessionResponse;
type CreateSessionWithLoginResponse = {
    success: boolean;
    expires_at: string;
    request_token: string;
};

declare class AuthenticationService {
    private apiInstance;
    constructor(apiInstance: api);
    createGuestSession(): Promise<CreateGuestSessionResponse>;
    createRequestToken(): Promise<CreateRequestTokenResponse>;
    createSession(requestToken: string): Promise<CreateSessionResponse>;
    createSessionFromV4Token(v4Token: string): Promise<CreateSessionFromV4TokenResponse>;
    createSessionWithLogin(requestToken: string, username: string, password: string): Promise<CreateSessionWithLoginResponse>;
    deleteSession(sessionId: string): Promise<DELETE>;
    validateKey(): Promise<POST>;
}

type Certification = {
    certification: string;
    meaning: string;
    order: number;
};
type CertificationsResponse = {
    certifications: {
        [countryCode: string]: Certification[];
    };
};

declare class CertificationsService {
    private apiInstance;
    constructor(apiInstance: api);
    movieCertifications(): Promise<CertificationsResponse>;
    tvCertifications(): Promise<CertificationsResponse>;
}

type Result = {
    id: number;
    adult: boolean;
};
type ChangesResponse$1 = {
    results: Result[];
    page: number;
    total_pages: number;
    total_results: number;
};

declare class ChangesService {
    private apiInstance;
    constructor(apiInstance: api);
    movieList(end_date?: string, page?: number, start_date?: string): Promise<ChangesResponse$1>;
    personList(end_date?: string, page?: number, start_date?: string): Promise<ChangesResponse$1>;
    tvList(end_date?: string, page?: number, start_date?: string): Promise<ChangesResponse$1>;
}

type MoviePart = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};
type DetailsResponse$3 = {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    parts: MoviePart[];
};
type TranslationData = {
    title: string;
    overview: string;
    homepage: string;
};
type Translation = {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: TranslationData;
};
type TranslationsResponse$1 = {
    id: number;
    translations: Translation[];
};
type Backdrop = {
    aspect_ratio: number;
    height: number;
    iso_639_1: string | null;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
};
type ImagesResponse$2 = {
    id: number;
    backdrops: Backdrop[];
};

declare class CollectionsService {
    private apiInstance;
    constructor(apiInstance: api);
    details(collection_id: number, language?: string): Promise<DetailsResponse$3>;
    images(collection_id: number, language?: string, include_image_language?: string): Promise<ImagesResponse$2>;
    translations(collection_id: number): Promise<TranslationsResponse$1>;
}

type DetailsResponse$2 = {
    id: number;
    name: string;
    headquarters: string;
    homepage: string;
    logo_path: string;
    origin_country: string;
    parent_company: string | null;
    description: string;
};
type AlternativeNamesResponse = {
    id: number;
    results: Array<{
        name: string;
        type: string;
    }>;
};
type ImagesResponse$1 = {
    id: number;
    logos: Array<{
        aspect_ratio: number;
        file_path: string;
        height: number;
        id: string;
        file_type: string;
        vote_average: number;
        vote_count: number;
        width: number;
    }>;
};

declare class CompaniesService {
    private apiInstance;
    constructor(apiInstance: api);
    details(company_id: number): Promise<DetailsResponse$2>;
    alternativeNames(company_id: number): Promise<AlternativeNamesResponse>;
    images(company_id: number): Promise<ImagesResponse$1>;
}

type Images = {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
};
type DetailsResponse$1 = {
    images: Images;
    change_keys: string[];
};
type Country = {
    iso_3166_1: string;
    english_name: string;
    native_name: string;
};
type CountriesResponse = Country[];
type DepartmentJob = {
    department: string;
    jobs: string[];
};
type JobsResponse = DepartmentJob[];
type Language = {
    iso_639_1: string;
    english_name: string;
    name: string;
};
type LanguagesResponse = Language[];
type PrimaryTranslationsResponse = string[];
type Timezone = {
    iso_3166_1: string;
    zones: string[];
};
type TimezonesResponse = Timezone[];

declare class ConfigurationService {
    private apiInstance;
    constructor(apiInstance: api);
    details(): Promise<DetailsResponse$1>;
    countries(language?: string): Promise<CountriesResponse>;
    jobs(): Promise<JobsResponse>;
    languages(): Promise<LanguagesResponse>;
    primaryTranslations(): Promise<PrimaryTranslationsResponse>;
    timezones(): Promise<TimezonesResponse>;
}

type CreditsMedia = {
    backdrop_path: string | null;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    media_type: 'movie' | 'tv';
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    character: string;
};
type CreditPerson = {
    id: number;
    name: string;
    original_name: string;
    media_type: 'person';
    adult: boolean;
    popularity: number;
    gender: 1 | 2;
    known_for_department: string;
    profile_path: string | null;
};
type CreditsResponse$1 = {
    credit_type: 'cast' | 'crew';
    department: string;
    job: string;
    media: CreditsMedia;
    media_type: 'movie' | 'tv';
    id: string;
    person: CreditPerson;
};

declare class CreditsService {
    private apiInstance;
    constructor(apiInstance: api);
    details(credit_id: string, language?: string): Promise<CreditsResponse$1>;
}

type Genre$1 = {
    id: number;
    name: string;
};
type GenreList = {
    genres: Genre$1[];
};

declare class GenresService {
    private apiInstance;
    constructor(apiInstance: api);
    movieList(language?: string): Promise<GenreList>;
    tvList(language?: string): Promise<GenreList>;
}

type KeywordResponse = {
    id: number;
    name: string;
};
interface Movie {
    id: number;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
interface MovieResponse {
    id: number;
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

declare class KeywordsService {
    private apiInstance;
    constructor(apiInstance: api);
    details(keywordId: number, language?: string): Promise<KeywordResponse>;
    movies(keywordId: number, includeAdult?: boolean, language?: string, page?: number): Promise<MovieResponse>;
}

declare class MovieService {
    private apiInstance;
    constructor(apiInstance: api);
    details(id: number): Promise<DetailsResponse$5>;
    alternativeTitle(movieId: number, country?: string): Promise<AlternativeTitlesResponse$1>;
    changes(movieId: number, start_date?: string, end_date?: string, page?: number): Promise<ChangesResponse$2>;
    credits(movieId: number, language?: string): Promise<CreditsResponse$2>;
    accountStates(movieId: number, sessionId?: string, guestSessionId?: string): Promise<AccountStatesResponse>;
    externalIds(movieId: number): Promise<ExternalIDsResponse>;
    images(movieId: number, includeImageLanguage?: string, language?: string): Promise<ImageResponse>;
    keywords(movieId: number): Promise<KeywordsResponse$1>;
    latest(): Promise<LatestResponse$1>;
    lists(movieId: number, language?: string, page?: number): Promise<ListsResponse$2>;
    recommendations(movieId: number, language?: string, page?: number): Promise<RecommendationsResponse$1>;
    releaseDates(movieId: number): Promise<ReleaseDatesResponse>;
    translations(movieId: number): Promise<TranslationsResponse$2>;
    videos(movieId: number, language?: string): Promise<VideosResponse$1>;
    watchProviders(movieId: number): Promise<WatchProvidersResponse$1>;
}

type KnownFor = {
    backdrop_path: string | null;
    id: number;
    title?: string;
    name?: string;
    original_title?: string;
    original_name?: string;
    overview: string;
    poster_path: string | null;
    media_type: 'movie' | 'tv';
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date?: string;
    first_air_date?: string;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
};
type Person = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    known_for: KnownFor[];
};
type PersonListResponse = {
    page: number;
    results: Person[];
    total_pages: number;
    total_results: number;
};

declare class PeopleListsService {
    private apiInstance;
    constructor(apiInstance: api);
    popular(language?: string, page?: number): Promise<PersonListResponse>;
}

type Creator = {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
};
type Genre = {
    id: number;
    name: string;
};
type Network = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};
type LastEpisode = {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
};
type Season = {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
};
type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};
type DetailsResponse = {
    adult: boolean;
    backdrop_path: string;
    created_by: Creator[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisode | null;
    name: string;
    next_episode_to_air: LastEpisode | null;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
};
type Rated = {
    value: number;
};
type AccountStateResponse = {
    id: number;
    favorite: boolean;
    rated: Rated | null;
    watchlist: boolean;
};
type AggregateCreditsResponse = {
    cast: Array<{
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string | null;
        roles: Array<{
            credit_id: string;
            character: string;
            episode_count: number;
        }>;
        total_episode_count: number;
        order: number;
    }>;
    crew: Array<{
        adult: boolean;
        gender: number;
        id?: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string | null;
        jobs: Array<{
            credit_id: string;
            job: string;
            episode_count: number;
        }>;
        department: string;
        total_episode_count: number;
    }>;
    id: number;
};
type AlternativeTitlesResponse = {
    id: number;
    results: Array<{
        iso_3166_1: string;
        title: string;
        type: string;
    }>;
};
type ChangesResponse = {
    changes: Array<{
        key: string;
        items: Array<{
            id: string;
            action: 'added' | 'updated' | 'deleted';
            time: string;
            iso_639_1: string | null;
            iso_3166_1: string | null;
            value: {
                poster?: {
                    file_path: string;
                    iso_639_1?: string;
                };
                backdrop?: {
                    file_path: string;
                    iso_639_1?: string;
                };
            };
            original_value?: {
                poster?: {
                    file_path: string;
                    iso_639_1: string | null;
                };
                backdrop?: {
                    file_path: string;
                    iso_639_1: string | null;
                };
            };
        }>;
    }>;
};
type ContentRatingsResponse = {
    results: Array<{
        descriptors: string[];
        iso_3166_1: string;
        rating: string;
    }>;
    id: number;
};
type CreditsResponse = {
    cast: Array<{
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string | null;
        character: string;
        credit_id: string;
        order: number;
    }>;
    crew: Array<{
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string | null;
        credit_id: string;
        department: string;
        job: string;
    }>;
    id: number;
};
type EpisodeGroupsResponse = {
    results: Array<{
        description: string;
        episode_count: number;
        group_count: number;
        id: string;
        name: string;
        network: {
            id: number;
            logo_path: string | null;
            name: string;
            origin_country: string;
        };
        type: number;
    }>;
    id: number;
};
type ExternalIdsResponse = {
    id: number;
    imdb_id: string;
    freebase_mid: string;
    freebase_id: string;
    tvdb_id: number;
    tvrage_id: number;
    wikidata_id: string;
    facebook_id: string;
    instagram_id: string;
    twitter_id: string;
};
type ImagesResponse = {
    backdrops: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string | null;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
    }[];
};
type KeywordsResponse = {
    results: {
        name: string;
        id: number;
    }[];
};
type LatestResponse = {
    adult: boolean;
    backdrop_path: string | null;
    created_by: any[];
    episode_run_time: number[];
    first_air_date: string;
    genres: any[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: any[];
    last_air_date: string;
    last_episode_to_air: {
        id: number;
        name: string;
        overview: string;
        vote_average: number;
        vote_count: number;
        air_date: string;
        episode_number: number;
        production_code: string;
        runtime: number | null;
        season_number: number;
        show_id: number;
        still_path: string | null;
    };
    name: string;
    next_episode_to_air: null | {
        id: number;
        name: string;
        overview: string;
        vote_average: number;
        vote_count: number;
        air_date: string;
        episode_number: number;
        production_code: string;
        runtime: number | null;
        season_number: number;
        show_id: number;
        still_path: string | null;
    };
    networks: any[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: any[];
    production_countries: any[];
    seasons: {
        air_date: string | null;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string | null;
        season_number: number;
    }[];
    spoken_languages: any[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
};
type ListsResponse = {
    id: number;
    page: number;
    results: {
        description: string;
        favorite_count: number;
        id: number;
        item_count: number;
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        poster_path: string | null;
    }[];
    total_pages: number;
    total_results: number;
};
type RecommendationsResponse = {
    page: number;
    results: {
        adult: boolean;
        backdrop_path: string | null;
        id: number;
        name: string;
        original_language: string;
        original_name: string;
        overview: string;
        poster_path: string | null;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        first_air_date: string;
        vote_average: number;
        vote_count: number;
        origin_country: string[];
    }[];
    total_pages: number;
    total_results: number;
};
type ReviewsResponse = {
    id: number;
    page: number;
    results: {
        author: string;
        author_details: {
            name: string;
            username: string;
            avatar_path: string | null;
            rating: number | null;
        };
        content: string;
        created_at: string;
        id: string;
        updated_at: string;
        url: string;
    }[];
    total_pages: number;
    total_results: number;
};
type ScreenedTheatricallyResponse = {
    id: number;
    results: {
        id: number;
        episode_number: number;
        season_number: number;
    }[];
};
type SimilarResponse = {
    page: number;
    results: {
        adult: boolean;
        backdrop_path: string | null;
        genre_ids: number[];
        id: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string | null;
        first_air_date: string;
        name: string;
        vote_average: number;
        vote_count: number;
    }[];
    total_pages: number;
    total_results: number;
};
type TranslationsResponse = {
    id: number;
    translations: {
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: {
            name: string;
            overview: string;
            homepage: string;
            tagline: string;
        };
    }[];
};
type VideosResponse = {
    id: number;
    results: {
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
    }[];
};
type WatchProvidersResponse = {
    id: number;
    results: {
        [countryCode: string]: {
            link: string;
            flatrate?: {
                logo_path: string;
                provider_id: number;
                provider_name: string;
                display_priority: number;
            }[];
            buy?: {
                logo_path: string;
                provider_id: number;
                provider_name: string;
                display_priority: number;
            }[];
        };
    };
};

declare class TVSeriesService {
    private apiInstance;
    constructor(apiInstance: api);
    details(series_id: number, append_to_response?: string, language?: string): Promise<DetailsResponse>;
    accountStates(series_id: number, session_id?: string, guest_session_id?: string): Promise<AccountStateResponse>;
    aggregateCredits(series_id: number, language?: string): Promise<AggregateCreditsResponse>;
    alternativeTitles(series_id: number): Promise<AlternativeTitlesResponse>;
    changes(series_id: number, start_date?: string, end_date?: string, page?: number): Promise<ChangesResponse>;
    contentRatings(series_id: number): Promise<ContentRatingsResponse>;
    credits(series_id: number, language?: string): Promise<CreditsResponse>;
    episodeGroups(series_id: number): Promise<EpisodeGroupsResponse>;
    externalIds(series_id: number): Promise<ExternalIdsResponse>;
    images(series_id: number, include_image_language?: string, language?: string): Promise<ImagesResponse>;
    keywords(series_id: number): Promise<KeywordsResponse>;
    latest(): Promise<LatestResponse>;
    lists(series_id: number, language?: string, page?: number): Promise<ListsResponse>;
    recommendations(series_id: number, language?: string, page?: number): Promise<RecommendationsResponse>;
    reviews(series_id: number, language?: string, page?: number): Promise<ReviewsResponse>;
    screenedTheatrically(series_id: number): Promise<ScreenedTheatricallyResponse>;
    similar(series_id: number, language?: string, page?: number): Promise<SimilarResponse>;
    translations(series_id: number): Promise<TranslationsResponse>;
    videos(series_id: number, language?: string): Promise<VideosResponse>;
    watchProviders(series_id: number): Promise<WatchProvidersResponse>;
    addRating(series_id: number, raw_body: {
        value: number;
    }, guest_session_id?: string, session_id?: string): Promise<POST>;
    deleteRating(series_id: number, guest_session_id?: string, session_id?: string): Promise<DELETE>;
}

type AvailableRegionsResponse = {
    results: results[];
};
type results = {
    iso_3166_1: string;
    english_name: string;
    native_name: string;
};
type ProvidersResponse = {
    results: Provider[];
};
type DisplayPriorities = {
    [countryCode: string]: number;
};
type Provider = {
    display_priorities: DisplayPriorities;
    display_priority: number;
    logo_path: string;
    provider_name: string;
    provider_id: number;
};

declare class WatchProvidersService {
    private apiInstance;
    constructor(apiInstance: api);
    availableRegions(language?: string): Promise<AvailableRegionsResponse>;
    movieProviders(language?: string, watch_region?: string): Promise<ProvidersResponse>;
    tvProviders(language?: string, watch_region?: string): Promise<ProvidersResponse>;
}

declare class TMDB {
    private apiInstance;
    movie: MovieService;
    credits: CreditsService;
    genres: GenresService;
    keywords: KeywordsService;
    peopleLists: PeopleListsService;
    watchProviders: WatchProvidersService;
    account: AccountService;
    certifications: CertificationsService;
    changes: ChangesService;
    collections: CollectionsService;
    authentication: AuthenticationService;
    companies: CompaniesService;
    configuration: ConfigurationService;
    tvseries: TVSeriesService;
    constructor(apiKey: string, language?: string);
}

export { TMDB as default };
