import React, { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <section className="show-details">
        <h2>Select a show to see details.</h2>
      </section>
    );
  }

  return (
    <section className="show-details">
      <h2>{show.name}</h2>
      <div className="episode-container">
        {" "}
        {/* Added this container */}
        <EpisodeList
          name={show.name}
          episodes={show.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </section>
  );
}
