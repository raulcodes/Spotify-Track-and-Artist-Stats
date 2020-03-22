interface ExternalUrl {
  spotify: string;
}

interface ExternalId {
  isrc: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

declare interface Artist {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  type: string;
  uri: string;
}

interface Album {
  album_type: string;
  artists: Array<Artist>;
  available_markets: Array<string>;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

declare interface Track {
  album: Album;
  artists: Array<Artist>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalId;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

declare type Items = Array<Track | Artist>;

interface TrackTimes {
  [key: string]: Array<Track>;
}

interface ArtistTimes {
  [key: string]: Array<Artist>;
}

interface Followers {
  href: string;
  total: number;
}

interface userData {
  country: string;
  display_name: string;
  email: string;
  external_urls: ExternalUrl;
  followers: Followers;
  href: string;
  id: string;
  images: Array<Image>;
  product: string;
  type: string;
  uri: string;
}

declare interface Stats {
  tracks: TrackTimes;
  artists: ArtistTimes;
  userData: userData;
  [key: string]: any;
}