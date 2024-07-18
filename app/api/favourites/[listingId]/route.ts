import { NextResponse } from "next/server";
import getCurrentUser from "@/frontend/actions/getCurrentUser";
import prisma from '@/backend/db/prismaDBConfig';

interface IParams {
    listingId?: string;
}

export async function POST(request:Request, { params }: { params: IParams }) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const { listingId } = params;

    if( !listingId || typeof listingId !== 'string' ) {
        throw new Error('Invalid ID');
    }

    let favouriteIds = [ ...(currentUser.favouriateIds || []) ];

    favouriteIds.push(listingId);

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favouriateIds: favouriteIds
        }
    });

    return NextResponse.json(user);
}


export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const { listingId } = params;

    if( !listingId || typeof listingId !== 'string' ) {
        throw new Error('Invalid ID');
    }

    let favouriteIds = [ ...(currentUser.favouriateIds || []) ];

    favouriteIds = favouriteIds.filter((id) => id !== listingId);

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favouriateIds: favouriteIds
        }
    });

    return NextResponse.json(user);
}