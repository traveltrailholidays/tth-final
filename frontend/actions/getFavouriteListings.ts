import prisma from '@/backend/db/prismaDBConfig';
import getCurrentUser from './getCurrentUser';

export default async function getFavouritePackages() {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            return [];
        }

        const favourites = await prisma.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favouriateIds || [])]
                }
            }
        });

        const safeFavourites = favourites.map((favourite) => ({
            ...favourite,
            createdAt: favourite.CreatedAt.toISOString()
        }));

        return safeFavourites;
    } catch (error: any) {
        throw new Error(error);
    }
}