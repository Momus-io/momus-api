import { PrismaClient, tweets } from "@prisma/client";

const prisma = new PrismaClient();

export class TweetController {
    constructor() {
    
    }

    async getAll(): Promise<tweets[]> {
        try {
            const results: tweets[] = await prisma.$queryRaw`SELECT * FROM tweets ORDER BY created_at ASC`;

            return results;

        } catch(err) {
            throw(err)

        } finally {
            console.log("Disconnected");
        }
    }

    async getById(id: string): Promise<tweets[] | null> {
        try {
            const results: tweets[] = await prisma.$queryRaw`SELECT * FROM tweets WHERE id = ${id}`;
            
            return results.length ? results : null;

        } catch(err) {
            throw(err);

        } finally {
            console.log("Disconnected");
        }
    }
}