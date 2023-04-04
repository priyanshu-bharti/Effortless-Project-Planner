import React, { useRef, useState } from "react";
import { PrismaClient } from "@prisma/client";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import DrawerNavbarLayout from "@/components/layout/drawerNavbarLayout";
import ResourcesCard from "@/components/cards/resourcesCard";
import CategoryBar from "@/components/aside/categoryBar";
import ThreeColWrapper from "@/components/layout/threeColWrapper";
import ScrollTopFAB from "@/components/buttons/scrollTopFAB";
import Pagination from "@/components/pagination/pagination";
import SearchBar from "@/components/inputs/searchBar";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import CategoryList from "@/components/aside/categoryList";

export type ResourceData = {
    resID: string;
    tagID: string;
    tags: string;
    name: string;
    url: string;
    description: string;
};

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const prisma = new PrismaClient();
    const page = parseInt(context.query.page as string) || 1;
    const search = (context.query.search as string) || "";

    const pageSize = 18;
    const skip = (page - 1) * pageSize;

    try {
        if (!search) {
            const count: number = await prisma.resources.count();
            const totalPages = Math.ceil(count / pageSize);

            if (page < 1 || page > totalPages) {
                return {
                    notFound: true,
                };
            }

            const resources = await prisma.resources.findMany({
                take: pageSize,
                skip,
            });

            return { props: { data: resources, totalPages, page } };
        }

        const count: number = await prisma.resources.count({
            where: {
                name: {
                    contains: search,
                },
            },
        });
        const totalPages = Math.ceil(count / pageSize);

        const resources = await prisma.resources.findMany({
            where: {
                name: {
                    contains: search,
                },
            },
            take: pageSize,
            skip,
        });

        return { props: { data: resources, totalPages, page, search } };
    } catch (e) {
        console.error(e);
        return { props: { data: [] } };
    } finally {
        await prisma.$disconnect();
    }
};

const Resources = ({
    data,
    totalPages,
    page,
    search,
}: {
    search: string;
    data: ResourceData[];
    totalPages: number;
    page: number;
}) => {
    const divScrollRef = useRef<HTMLDivElement>(null);
    const [searchToken, setSearchToken] = useState<string>("");
    const router = useRouter();

    return (
        <>
            <DrawerNavbarLayout scrollRef={divScrollRef}>
                <CategoryBar>
                    {router.route.split("/")[1] === "resources" && (
                        <CategoryList />
                    )}
                </CategoryBar>
                <ThreeColWrapper>
                    <div className="col-span-full grid sm:flex items-center gap-4 w-full">
                        <SearchBar
                            baseURL={`/resources/`}
                            searchToken={searchToken}
                            setSearchToken={setSearchToken}
                        />
                    </div>
                    {data.length > 0 ? (
                        data.map((card) => (
                            <ResourcesCard
                                key={card.resID}
                                resID={card.resID}
                                name={card.name}
                                tags={card.tags}
                                tagID={card.tagID}
                                description={card.description}
                                url={card.url}
                            />
                        ))
                    ) : (
                        <div className="col-span-full flex items-center justify-center font-bold text-xl">
                            No Resources Found! 😕
                        </div>
                    )}
                    <Pagination
                        scrollRef={divScrollRef}
                        page={page}
                        totalPages={totalPages}
                        baseURL={
                            search
                                ? `/resources/?search=${search}&`
                                : "/resources/?"
                        }
                    />
                    <ScrollTopFAB divRef={divScrollRef} />
                </ThreeColWrapper>
            </DrawerNavbarLayout>
        </>
    );
};

export default dynamic(() => Promise.resolve(Resources), { ssr: false });
// dynamic(() => Promise.resolve(PageComponent), {ssr: false})
