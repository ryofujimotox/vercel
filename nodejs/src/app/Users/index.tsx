import { use, useEffect, Suspense, memo, cache } from "react";
import { useRouter } from "next/navigation";

// import { Index as Render } from "./render";
import { Index as Render } from "./client_only-component";

function Index() {
  return (
    <Suspense fallback={<div>SSR中</div>}>
      <Render />
    </Suspense>
  );
}
export { Index };
