import React from "react";
import "./widgets.scss";

import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading: string, subtitle: string): JSX.Element => (
    <div className='widgets__article'>
      <div className='widgets__article-left'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__article-right'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Hlavní titulek článku", "Podnadpis")}
      {newsArticle("Hlavní titulek článku", "Podnadpis")}
      {newsArticle("Hlavní titulek článku", "Podnadpis")}
      {newsArticle("Hlavní titulek článku", "Podnadpis")}
      {newsArticle("Hlavní titulek článku", "Podnadpis")}
    </div>
  );
}

export default Widgets;
