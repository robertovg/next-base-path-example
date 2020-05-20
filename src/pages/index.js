import React from "react";
import NextLink from "next/link";

export default function Index() {
  return (
    <div>
      <h3>Next.js with experimental.basePath example</h3>
      <NextLink href="?reloadsWithAnyParam=true">
        <a>Add params to the URL and then page start reloading...</a>
      </NextLink>
      <p>Last Reload: {new Date().toISOString()}</p>
    </div>
  );
}
