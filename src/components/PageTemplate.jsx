import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify"; // Security requirement for safely rendering HTML from WordPress

// We create a reusable component that fetches and displays WordPress page data based on the slug passed as a prop
function PageTemplate({ pageSlug }) {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect runs this code automatically when the page loads
  useEffect(() => {
    async function fetchWordPressData() {
      try {
        setLoading(true);
        const apiURL = `https://dev-radioactive-duck.pantheonsite.io/wp-json/wp/v2/pages?slug=${pageSlug}`;
        const response = await fetch(apiURL, { cache: "no-store" });
        const data = await response.json();

        if (data && data.length > 0) {
          setPageData(data[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWordPressData();
  }, [pageSlug]); // Reloads automatically if the slug changes

  if (loading) {
    return <div className="loader">Loading data from WordPress...</div>;
  }

  if (!pageData) {
    return <div>Page not found.</div>;
  }

  return (
    <div className="page-container">
      <h1>{pageData.title.rendered}</h1>
      {/* Secure HTML injection with DOMPurify */}
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(pageData.content.rendered),
        }}
      />
    </div>
  );
}

export default PageTemplate;
