import Stories from "./components/Stories";
import Sort from "./components/Sort";
import CategoryFilter, { WarningFilter } from "./components/Filter";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function RoyalRoad() {
  const [sortingMetric, setSortingMetric] = useState("Title");
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [warningFilters, setWarningFilters] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [flipped, setFlipped] = useState([]);

  function sort(a, b) {
    if (sortingMetric === "Title") {
      return a.title.toString().localeCompare(b.title.toString());
    }
    if (sortingMetric === "Chapters") {
      return a.chapters - b.chapters;
    }
    if (sortingMetric === "Followers") {
      return a.followers - b.followers;
    }
  }

  function categoryFilter(story) {
    if (categoryFilter.length === 0) return true;
    return categoryFilters.every((category) =>
      story.categories.includes(category)
    );
  }
  function warningFilter(story) {
    if (categoryFilter.length === 0) return true;
    return warningFilters.every((category) =>
      story.warnings.includes(category)
    );
  }

  const handleSortChange = (event) => {
    setSortingMetric(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    if (!categoryFilters.includes(event.target.value)) {
      setCategoryFilters([...categoryFilters, event.target.value]);
    } else {
      setCategoryFilters(
        categoryFilters.filter((category) => category !== event.target.value)
      );
    }
  };

  const handleWarningFilterChange = (event) => {
    if (!warningFilters.includes(event.target.value)) {
      setWarningFilters([...warningFilters, event.target.value]);
    } else {
      setWarningFilters(
        warningFilters.filter((warning) => warning !== event.target.value)
      );
    }
  };

  const handleBookmarkChange = (story, flag, setFlag) => {
    if (!bookmarks.find((cur) => cur.title === story.title)) {
      setBookmarks([...bookmarks, story]);
      setFlag(true);
    } else {
      setBookmarks(bookmarks.filter((cur) => cur.title !== story.title));
      setFlag(false);
    }
  };

  const handleFlippedChange = (story) => {
    if (!flipped.find((cur) => cur.title === story.title)) {
      setFlipped([...flipped, story]);
    } else {
      setFlipped(flipped.filter((cur) => cur.title !== story.title));
    }
  };

  function clear() {
    setCategoryFilters([]);
    setWarningFilters([]);
    setSortingMetric("Title");
    setBookmarks([]);
  }

  return (
    <div style={styles.App}>
      <div style={styles.AppHeader}>
        <div style={styles.title}>Royal Road</div>
        <p style={styles.caption}>
          Note: All ratings are my objectively correct opinion.
        </p>
      </div>
      <div style={styles.splitContainer}>
        <div style={styles.splitLeft}>
          <div style={styles.splitLeftContainer}>
            <div style={styles.h2}>Sort By</div>
            <Sort
              sortingMetric={sortingMetric}
              onChange={handleSortChange}
            ></Sort>
            <div style={styles.h2}>Categories</div>
            <CategoryFilter
              onChange={handleCategoryFilterChange}
              categoryFilters={categoryFilters}
            ></CategoryFilter>
            <div style={styles.h2}>Sensitive</div>
            <WarningFilter
              onChange={handleWarningFilterChange}
              warningFilters={warningFilters}
            ></WarningFilter>
            <div style={styles.h2}>Favorites</div>
            {bookmarks
              .sort((a, b) =>
                a.title.toString().localeCompare(b.title.toString())
              )
              .map((story, i) => (
                <div key={i}>{story.title}</div>
              ))}
            {bookmarks.length > 0 && (
              <p style={styles.aggregator}>
                Total Chapters:{" "}
                {bookmarks.reduce((total, cur) => total + cur.chapters, 0)}
              </p>
            )}
            {bookmarks.length === 0 && <p>Empty</p>}
            <Button onClick={clear} style={styles.button}>
              Clear All
            </Button>{" "}
          </div>
        </div>
        <div style={styles.splitRight}>
          <Stories
            sort={sort}
            filters={[categoryFilter, warningFilter]}
            bookmarks={bookmarks}
            handleBookmarkChange={handleBookmarkChange}
            flipped={flipped}
            handleFlippedChange={handleFlippedChange}
          />
        </div>
      </div>
    </div>
  );
}
const styles = {
  App: {
    textAlign: "center",
  },
  AppHeader: {
    backgroundColor: "#282c34",
    minHeight: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },

  AppLink: {
    color: "#61dafb",
  },

  splitContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    minHeight: "100vh",
  },

  splitLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "20%",
    textAlign: "start",
  },

  splitLeftContainer: {
    width: "70%",
    alignItems: "flex-start",
  },
  splitRight: {
    width: "80%",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "700",
    marginBottom: "0",
    display: "block",
  },
  caption: {
    fontSize: "1rem",
    color: "lightgray",
  },
  button: {
    marginTop: " 5%",
    backgroundColor: "crimson",
  },
  aggregator: {
    color: "crimson",
  },
  h1: {
    display: "block",
    fontSize: " 2em",
    marginTop: "0.67em",
    marginBottom: "0.67em",
    marginLeft: "0",
    marginRight: "0",
    fontWeight: "bold",
  },
  h2: {
    marginTop: "40px",
    display: "block",
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: " 0.83em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontWeight: "bold",
  },
};

export default RoyalRoad;
