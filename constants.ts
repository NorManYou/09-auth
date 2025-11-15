import { NoteTag } from "./types/note";

//API CONFIG
export const API_BASE_URL = "https://notehub-public.goit.study/api";

//PAGINATION CONFIG
export const PAGINATION_CONFIG = {
  pageRangeDisplayed: 3,
  marginPagesDisplayed: 1,
  nextLabel: "→",
  previousLabel: "←",
};

//NOTE TAGS 
export const NOTES_PER_PAGE = 12;

export const NOTE_TAGS = [
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
  "Todo",
  "Ideas",
  "Travel",
  "Finance",
  "Health",
  "Important",
] as const;

//SITE METADATA
export const SITE_NAME = "NoteHub";
export const HOME_PAGE_URL = "http://localhost:3000";

export const OG_IMAGE = {
  url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
  width: 1200,
  height: 630,
  alt: "NoteHub application preview",
};