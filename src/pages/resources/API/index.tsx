import React, { useRef, useState } from "react";
import { PrismaClient } from "@prisma/client";

import DrawerNavbarLayout from "@/components/layout/drawerNavbarLayout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import CategoryBar from "@/components/aside/categoryBar";
import ThreeColWrapper from "@/components/layout/threeColWrapper";
import ScrollTopFAB from "@/components/buttons/scrollTopFAB";
import Pagination from "@/components/pagination/pagination";
import ApiCards from "@/components/cards/apiCards";
import DropdownMenu from "@/components/dropdowns/dropdownMenu";
import SearchBar from "@/components/inputs/searchBar";

export type ApiData = {
    id: number;
    api: string;
    description: string;
    auth: string;
    https: number;
    cors: string;
    link: string;
    category: string;
};

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const page = parseInt(context.query.page as string) || 1;
    const category = (context.query.category as string) || "Animals";
    const search = context.query.search as string;

    const pageSize = 30;
    const skip = (page - 1) * pageSize;

    const prisma = new PrismaClient();
    try {
        if (!search) {
            const count: number = await prisma.apis.count({
                where: {
                    category,
                },
            });

            const totalPages = Math.ceil(count / pageSize);
            const apis = await prisma.apis.findMany({
                where: {
                    category,
                },
                take: pageSize,
                skip,
            });
            return { props: { apis, totalPages, page, category } };
        }

        const count: number = await prisma.apis.count({
            where: {
                api: {
                    contains: search,
                },
            },
        });

        const totalPages = Math.ceil(count / pageSize);
        const apis = await prisma.apis.findMany({
            where: {
                api: {
                    contains: search,
                },
            },
            take: pageSize,
            skip,
        });
        return { props: { apis, totalPages, page, category } };
    } catch (e) {
        console.error(e);
        return { props: { data: [] } };
    } finally {
        await prisma.$disconnect();
    }
};

const Resources = ({
    category,
    apis,
    totalPages,
    page,
}: {
    category: string;
    apis: ApiData[];
    totalPages: number;
    page: number;
}) => {
    const divScrollRef = useRef<HTMLDivElement>(null);
    const [searchToken, setSearchToken] = useState<string>("");

    return (
        <>
            <DrawerNavbarLayout scrollRef={divScrollRef}>
                <CategoryBar />
                <ThreeColWrapper>
                    <div className="col-span-full grid sm:flex items-center gap-4 w-full">
                        <DropdownMenu />
                        <SearchBar
                            baseURL="/resources/API/${}"
                            searchToken={searchToken}
                            setSearchToken={setSearchToken}
                        />
                    </div>
                    {apis.length > 0 ? (
                        apis!.map((card) => (
                            <ApiCards {...card} key={card.id} />
                        ))
                    ) : (
                        <div className="col-span-full flex items-center justify-center font-bold text-xl">
                            No Apis Found! 😕
                        </div>
                    )}
                    <Pagination
                        scrollRef={divScrollRef}
                        page={page}
                        totalPages={totalPages}
                        baseURL={`/resources/API/?category=${encodeURIComponent(
                            category
                        )}&`}
                    />
                    <ScrollTopFAB divRef={divScrollRef} />
                </ThreeColWrapper>
            </DrawerNavbarLayout>
        </>
    );
};

export default Resources;
