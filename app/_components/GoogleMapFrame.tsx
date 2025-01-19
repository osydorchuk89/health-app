import { GoogleMapsEmbed } from "@next/third-parties/google";

export const GoogleMapFrame = () => {
    return (
        <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
            height={340}
            width="100%"
            mode="place"
            q="Центр+здоров’я+Незкраю"
        />
    );
};
