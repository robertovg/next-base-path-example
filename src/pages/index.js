import React from "react";
import NextLink from "next/link";

export default function Index() {
  return (
    <div>
      <h3 variant="h4" component="h1" gutterBottom>
        Next.js example
      </h3>
      <NextLink href="?reloadsWithAnyParam=true">
        <a>Add params to the URL and then page start reloading...</a>
      </NextLink>
      <p>Last Reload: {new Date().toISOString()}</p>
    </div>
  );
}
