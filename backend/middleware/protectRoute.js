import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        // Get the token from cookies
        const token = req.cookies.jwt;
        
        // Check if token is not provided
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user by the ID decoded from the token
        const user = await User.findById(decoded.userId).select("-password");

        // Check if user exists
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach the user object to the request
        req.user = user;

        // Move to the next middleware
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);

        // Handle JWT-specific errors
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: "Unauthorized - Token expired" });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }

        // Generic server error
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute;
