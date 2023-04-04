import React, { useRef, useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { PrismaClient } from "@prisma/client";
import DrawerNavbarLayout from "@/components/layout/drawerNavbarLayout";
import ResourcesCard from "@/components/cards/resourcesCard";
import CategoryBar from "@/components/aside/categoryBar";
import ThreeColWrapper from "@/components/layout/threeColWrapper";
import ScrollTopFAB from "@/components/buttons/scrollTopFAB";
import Pagination from "@/components/pagination/pagination";
import SearchBar from "@/components/inputs/searchBar";
import dynamic from "next/dynamic";
import CategoryList from "@/components/aside/categoryList";
import { useRouter } from "next/router";

type ResourceData = {
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
    const page = parseInt(context.query.page as string) || 1;
    const search = context.query.search as string;

    const pageSize = 12;
    const skip = (page - 1) * pageSize;

    const prisma = new PrismaClient();
    try {
        if (!search) {
            const tag: string = context.query.tagID! as string;
            const count: number = await prisma.resources.count({
                where: {
                    tagID: tag,
                },
            });
            const totalPages = Math.ceil(count / pageSize);

            const resources = await prisma.resources.findMany({
                where: {
                    tagID: tag,
                },
                take: pageSize,
                skip,
            });

            return { props: { data: resources, totalPages, page, tag } };
        }

        const tag: string = context.query.tagID! as string;
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

        return { props: { data: resources, totalPages, page, tag } };
    } catch (e) {
        console.error(e);
        return { props: { data: [] } };
    } finally {
        await prisma.$disconnect();
    }
};

const Resources = ({
    tag,
    data,
    totalPages,
    page,
}: {
    tag: string;
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
                    {data.map((card) => (
                        <ResourcesCard key={card.resID} {...card} />
                    ))}
                    <Pagination
                        scrollRef={divScrollRef}
                        page={page}
                        totalPages={totalPages}
                        baseURL={`/resources/${tag}/?`}
                    />
                    <ScrollTopFAB divRef={divScrollRef} />
                </ThreeColWrapper>
            </DrawerNavbarLayout>
        </>
    );
};

export default dynamic(() => Promise.resolve(Resources), { ssr: false });
