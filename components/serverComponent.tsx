import React, { Suspense } from "react";

import { ClientComponent2 } from "../components";

const ServerComponentSuspense: React.FC = async () => {
  let data;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      return;
    }

    data = await response.json();
  } catch (error) {
    return;
  }

  return <ClientComponent2 data={data} />;
};

// **
export const ServerComponent: React.FC = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServerComponentSuspense />
    </Suspense>
  );
};
