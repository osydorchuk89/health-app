import { TeamCard } from "../TeamCard";

const teamArticles = [
    {
        photo: "/bohdan-photo.png",
        name: "Богдан Рудковський",
        position: "лікар-інтерніст",
    },
    {
        photo: "/yevheniya-photo.png",
        name: "Євгенія Рудковська",
        position: "психологиня",
    },
    {
        photo: "/anastasiya-photo.png",
        name: "Анастасія Пилипенко",
        position: "сімейна лікарка",
    },
    {
        photo: "/tetiana-photo.png",
        name: "Тетяна Танасів",
        position: "психологиня",
    },
];

export const Team = () => {

    return (
        <div className="flex flex-col gap-10 p-20">
            <p className="text-3xl">команда</p>
            <div className="grid grid-cols-4 gap-5">
                {teamArticles.map((article) => (
                    <TeamCard
                        key={article.name}
                        photo={article.photo}
                        name={article.name}
                        position={article.position}
                    />
                ))}
            </div>
        </div>
    );
};
