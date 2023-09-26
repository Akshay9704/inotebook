const jwt = require("jsonwebtoken");
const JWT_SECRET = "akshay$04#23@97*";

const fetchUser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};

module.exports = fetchUser;
