"use client";

import { QueryClientProvider, QueryClient } from "react-query";
// import { useState } from "react";

const ReactQueryProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;