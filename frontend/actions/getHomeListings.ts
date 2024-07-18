import prisma from '@/backend/db/prismaDBConfig';

export default async function getHomeListings(){
    try {
        let listings = await prisma.listing.findMany({
            take: 12, // Initially attempt to fetch up to 12 listings
            orderBy: {
                CreatedAt: 'desc'
            }
        });

        // If less than 12 listings are found, fetch all available listings
        if (listings.length < 12) {
            listings = await prisma.listing.findMany({
                take: undefined, // No limit (fetch all)
                orderBy: {
                    CreatedAt: 'desc'
                }
            });
        }

        const safeListings = listings.map((listing) => ({
            ...listing,
            CreatedAt: listing.CreatedAt.toISOString(),
        }));

        return safeListings;
    } catch (error: any) {
        throw new Error(error);
    }
}