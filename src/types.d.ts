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