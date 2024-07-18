import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';

import { safeUser } from '../types';

interface IUseFafourite {
    listingId: string;
    currentUser?: safeUser | null;
};

const useFavourite = ({
    listingId,
    currentUser
}: IUseFafourite) => {
    const router = useRouter();

    const hasFavourited = useMemo(() => {
        const list = currentUser?.favouriateIds || [];

        return list.includes(listingId);
    }, [currentUser, listingId]);

    const toggleFavourite = useCallback(async (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.stopPropagation();

        if (!currentUser) {
            router.push('/signin');
        }

        try {
            let request;
            if (hasFavourited) {
                request = () => axios.delete(`/api/favourites/${listingId}`);
                await request();
                router.refresh();
                toast.error('Disliked');
            } else {
                request = () => axios.post(`/api/favourites/${listingId}`);
                await request();
                router.refresh();
                toast.success('Liked');
            }

        } catch (error) {
            toast.error('something went wrong');
        }
    }, [currentUser, hasFavourited, listingId, router]);

    return {
        hasFavourited,
        toggleFavourite
    }
}

export default useFavourite;