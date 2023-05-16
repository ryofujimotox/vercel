import { use, useEffect, Suspense, memo, cache } from "react";
import { useRouter } from "next/navigation";

import { Index as Render } from "./render";

function Index() {
  return (
    <Suspense fallback={<div>SSR中</div>}>
      <Render />
    </Suspense>
  );
}
export { Index };
