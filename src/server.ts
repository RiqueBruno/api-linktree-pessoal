import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on("error", (err: Error) => {
    console.error("Failed to start server:", err.message);
});