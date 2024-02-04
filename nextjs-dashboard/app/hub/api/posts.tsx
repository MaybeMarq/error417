// pages/api/posts.ts
import { PrismaClient } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req

    switch (method) {
        case 'POST':
            // get the title and content from the request body
            const { title, content } = req.body
            // use prisma to create a new post using that data
            const post = await prisma.apartment.findMany({
                where: {
                    id: { in: [1] },
                }
            })
            // send the post object back to the client
            res.status(201).json(post)
            break
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}