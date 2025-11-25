const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // Check if Authorization header exists
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Authentication failed: No Authorization header provided' });
        }

        const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
            return res.status(401).json({ message: 'Authentication failed: No token provided' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = { userId: decodedToken.userId, email: decodedToken.email, role: decodedToken.role };
        next();
    } catch (error) {
        // Catches errors from jwt.verify (e.g., invalid signature, expired token)
        // and potential errors from split if the header is malformed.
        return res.status(401).json({ message: 'Authentication failed: Invalid or expired token' });
    }
};
