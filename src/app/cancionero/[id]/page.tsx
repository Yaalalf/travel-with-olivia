"use client";
import { ISong, useSongs } from "@/cancioneroSection/context/songs-context";
import "./base.css";
import SongView from "@/cancioneroSection/SongView/SongView";

export default function SongViewPage({ params }: { params: { id: string } }) {
  const songs = useSongs();
  const song = songs.find((song) => song.name == decodeURI(params.id)) as ISong;
  return <SongView song={song} />;
}
