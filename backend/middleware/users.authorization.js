const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// middleware to verify the token

function authorizeUser(req, res,next) {
    const JWT_SEERt =process.env.JWT_SECRET 
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    
    try {
        const verify = jwt.verify(token, JWT_SEERt)
        req.user = verify;
        if (verify) {
            next()
        }
       

    } catch (err) {
        res.status(404).json({ message: "error",err });
    
    }

    
}