'use client';

import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

interface SocialBtnsProps {
    className?: string;
};

const SocialBtns: React.FC<SocialBtnsProps> = ({ className }) => {
    return (
        <div className={`${className} flex gap-5 flex-wrap`}>
            <Link
                href="https://www.facebook.com/profile.php?id=61558911416361"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-custom-sbl dark:bg-custom-shd hover:text-white rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956] dark:hover:bg-[#FF5956]"
            >
                <TiSocialFacebook size={28}/>
            </Link>
            <Link
                href="https://www.linkedin.com/company/102316821/admin/feed/posts/?feedType=following"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-custom-sbl dark:bg-custom-shd hover:text-white rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956] dark:hover:bg-[#FF5956]"
            >
                <TiSocialLinkedin size={28}/>
            </Link>
            <Link
                href="https://twitter.com/TTrailHolidays"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-custom-sbl dark:bg-custom-shd hover:text-white rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956] dark:hover:bg-[#FF5956]"
            >
                <FaXTwitter size={20}/>
            </Link>
            <Link
                href="https://www.instagram.com/traveltrailholidays/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-custom-sbl dark:bg-custom-shd hover:text-white rounded-full w-10 h-10 items-center justify-center flex hover:bg-[#FF5956] dark:hover:bg-[#FF5956]"
            >
                <FaInstagram size={20}/>
            </Link>
        </div>
    )
}

export default SocialBtns;