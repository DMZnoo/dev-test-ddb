import { Card } from "@/components/Card";
import { SkeletonCard } from "@/components/Card/SkeletonCard";
import { Dog } from "@/utils/api";
import { API_URL } from "@/utils/constants";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { Suspense } from "react";
import { FaChevronLeft } from "react-icons/fa";


async function getDogs() {
    const res = await fetch(`${API_URL}/api/dogs`);
    const users = await res.json();
    return users;
}

export default async function Page() {
    const dogs: Dog[] = await getDogs();

    return (
        <main className="mx-48">
            <Link className="absolute left-8 top-4 flex items-center gap-2" href="/">
                <FaChevronLeft size={20} />
                <span>Back</span>
            </Link>
            <div className="flex flex-col">
                {dogs.map((dog: Dog) => (
                    <Card key={dog.id}>
                        <Suspense fallback={<SkeletonCard />}>
                            <Card key={dog.id}>
                                <Disclosure>
                                    <DisclosureButton className="flex items-center gap-2 rounded-lg h-full w-full bg-dark-primary-900 p-8">
                                        🐕
                                        <h2 className="text-white dark:text-white text-lg font-medium">{dog.name}</h2>
                                    </DisclosureButton>
                                    <DisclosurePanel className={"bg-dark-primary-400 rounded-b-lg -mt-1 p-2"}>
                                        <div className="flex flex-col gap-1">
                                            <p className="leading-relaxed text-base text-white dark:text-neutral-400 text-sm">
                                                Breed: <span className="text-white">{dog.breed_group}</span>
                                            </p>
                                            <p className="leading-relaxed text-base text-white dark:text-neutral-400 text-sm">
                                                Description: <span className="text-white">{dog.description}</span>
                                            </p>
                                            <div className="flex items-center gap-1">
                                                <p className="leading-relaxed text-base text-white dark:text-neutral-400 text-sm">
                                                    Colors:
                                                </p>
                                                {dog.colors.map((color, idx) => (
                                                    <p className="text-sm" key={`${dog.id}-actors-${color}`}>{color}{(idx !== dog.colors.length - 1 && dog.colors.length > 1) && ", "}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            </Card>
                        </Suspense>
                    </Card>
                ))}
            </div>
        </main>
    )
}