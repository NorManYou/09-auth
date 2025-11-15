import React from "react";
import css from "./Loader.module.css";

interface LoaderProps {
  isFullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isFullScreen = false }) => {
  if (isFullScreen) {
    return (
      <div className={css.loaderContainerLg}>
        <div className={css.text}>Loading... wait a moment</div>
      </div>
    );
  }

  return <div className={css.text}>Loading... wait a moment</div>;
};

export default Loader;