import ContentLoader from "react-content-loader";

export default function FoodCardSkeleton() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="130" r="130" />
            <rect x="10" y="275" rx="0" ry="0" width="270" height="30" />
            <rect x="10" y="321" rx="0" ry="0" width="270" height="86" />
            <rect x="10" y="420" rx="0" ry="0" width="117" height="30" />
            <rect x="161" y="420" rx="10" ry="10" width="121" height="30" />
        </ContentLoader>
    );
}
