import prisma from '@/backend/db/prismaDBConfig';

export interface IListingsParams {
    dest?: string;
    category?: string;
};

export default async function getListings(
    params: IListingsParams
) {

    const { dest, category } = params;

    let query: any = {};

    if(dest) {
        query.location = {
            contains: dest, // Use contains for partial matching
            mode: 'insensitive' // Optional: case insensitive search
        };
    }

    if(category) {
        query.category = category;
    }

    try {

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                CreatedAt: 'desc'
            }
        });

        const safeListings = listings.map((listing) => ({
            ...listing,
            CreatedAt: listing.CreatedAt.toISOString(),
        }));

        return safeListings;
    } catch (error: any) {
        throw new Error(error);
    }
}