import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CategoryItem = ({
    label,
    icon,
    tag,
}: {
    label: string;
    icon: JSX.Element;
    tag: string;
}) => {
    const [active, setActive] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (router.query.tagID) {
            router.query.tagID === tag && setActive(tag);
        } else {
            router.route === "/resources/API"
                ? setActive("API")
                : setActive("");
        }

        return () => {
            setActive(null);
        };
    }, [tag, router.query.tagID, router.route]);

    return (
        <li key={label}>
            <Link
                href={`/resources/${tag}`}
                className={` ${
                    active === tag
                        ? "bg-primary text-primary-content font-bold"
                        : "hover:bg-accent hover:text-neutral"
                }`}
            >
                <span className="text-xl">{icon}</span>
                {label}
            </Link>
        </li>
    );
};

export default React.memo(CategoryItem);
