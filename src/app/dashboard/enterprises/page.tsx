import { Suspense } from "react";
import EnterprisesList from "./API";

export default function EnterprisesHome() {
    return (
        <section className="overflow-x-hidden ml-20 max-sm:mt-12 max-sm:mx-3">
            <Suspense
                fallback={
                    <div className="flex animate-pulse items-center justify-center h-64">
                        Loading table...
                    </div>
                }
            >
                <EnterprisesList />
            </Suspense>
        </section>
    )
}