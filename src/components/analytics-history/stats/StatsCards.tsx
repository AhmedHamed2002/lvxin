import DocumentStatsCard from "./DocumentStatsCard";
import TimeReviewCard from "./TimeReviewCard";
import TokenConsumptionCard from "./TokenConsumptionCard";

export default function StatsCards() {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 mb-4">
            <DocumentStatsCard />
            <TimeReviewCard />
            <TokenConsumptionCard />
        </div>
    )
}
