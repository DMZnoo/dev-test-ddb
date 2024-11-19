import { Card } from "@/components/Card";
import { SkeletonCard } from "@/components/Card/SkeletonCard";
import { Country } from "@/utils/api";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { Suspense } from "react";
import { FaChevronLeft } from "react-icons/fa";

async function getCountries() {
    const res = await fetch("http://localhost:3000/api/countries");
    const users = await res.json();
    return users;
}

export default async function Page() {
    const countries: Country[] = await getCountries();

    return (
        <main className="mx-48">
            <Link className="absolute left-8 top-4 flex items-center gap-2" href="/">
                <FaChevronLeft size={20} />
                <span>Back</span>
            </Link>
            <div className="flex flex-col">
                {countries.map((country: Country) => (
                    <Suspense key={country.id} fallback={<SkeletonCard />}>
                        <Card>
                            <Disclosure>
                                <DisclosureButton className="flex items-center gap-2 rounded-lg h-full w-full bg-dark-primary-900 p-8">
                                    🗺️
                                    <h2 className="text-white dark:text-white text-lg font-medium">{country.name}</h2>
                                </DisclosureButton>
                                <DisclosurePanel className={"bg-dark-primary-400 rounded-b-lg -mt-1 p-2"}>
                                    <div className="flex flex-col gap-1">
                                        <p className="leading-relaxed text-base text-white dark:text-neutral-400 text-sm">
                                            Captial: <span className="text-white">{country.capital}</span>
                                        </p>
                                        <p className="leading-relaxed text-base text-white dark:text-neutral-400 text-sm">
                                            Currency: <span className="text-white">{country.currency}</span>
                                        </p>
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