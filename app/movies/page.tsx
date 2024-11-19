import { Card } from "@/components/Card";
import { SkeletonCard } from "@/components/Card/SkeletonCard";
import { Movie } from "@/utils/api";
import { API_URL } from "@/utils/constants";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { Suspense } from "react";
import { FaChevronLeft } from "react-icons/fa";

async function getMovies() {
    const res = await fetch(`${API_URL}/api/movies`);
    const users = await res.json();
    return users;
}

export default async function Page() {
    const movies: Movie[] = await getMovies();
    console.log('movies: ', movies)

    return (
        <main className="mx-48">
            <Link className="absolute left-8 top-4 flex items-center gap-2" href="/">
                <FaChevronLeft size={20} />
                <span>Back</span>
            </Link>
            <div className="flex flex-col">
                {movies.map((movie: Movie) => (
                    <Suspense key={movie.id} fallback={<SkeletonCard />}>
                        <Card >
                            <Disclosure>
                                <DisclosureButton className="flex items-center gap-2 rounded-lg h-full w-full bg-dark-primary-900 p-8">
                                    🎞️
                                    <h2 className="text-white dark:text-white text-lg font-medium">{movie.title}</h2>
                                </DisclosureButton>
                                <DisclosurePanel className={"bg-dark-primary-400 rounded-b-lg -mt-1 p-2"}>
                                    <div className="flex flex-col gap-1">
                                        <p className="leading-relaxed text-base text-white dark:text-neutral-400 text-sm">
                                            Director: <span className="text-white">{movie.director}</span>
                                        </p>
                                        <p className="leading-relaxed text-base text-white dark:text-neutral-400 text-sm">
                                            Language: <span className="text-white">{movie.language}</span>
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <p className="leading-relaxed text-base text-white dark:text-neutral-400 text-sm">
                                                Actors:
                                            </p>
                                            {movie.actors.map((actor, idx) => (
                                                <p className="text-sm" key={`${movie.id}-actors-${actor}`}>{actor}{(idx !== movie.actors.length - 1 && movie.actors.length > 1) && ", "}</p>
                                            ))}
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                        </Card>
                    </Suspense>
                ))}
            </div>
        </main>
    )
}