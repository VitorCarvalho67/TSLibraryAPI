import { sign, verify, JwtPayload } from "jsonwebtoken";
import { User } from "@prisma/client";


function generateAccessToken(user: User): string {
    return sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET as string, {
        expiresIn: '5m',
    });
}

function verfifyAccessToken(token: string): string | JwtPayload {
    return verify(token, process.env.JWT_ACCESS_SECRET as string);
}

export { generateAccessToken, verfifyAccessToken };