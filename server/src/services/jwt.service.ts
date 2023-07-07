import jwt from 'jsonwebtoken';

class JWTService {
    constructor(private readonly secret: string) { }

    getToken(payload: any) {
        const token = jwt.sign(payload, this.secret, { expiresIn: '30m' });
        return token;
    }

    verifyToken(token: string) {
        try {
            const validPayload = jwt.verify(token, this.secret);
            return validPayload;
        } catch (error) {
            throw error;
        }
    }

}

export const jwtService = new JWTService('travelopia-secret-token');