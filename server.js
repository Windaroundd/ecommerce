import app from "./src/app.js";

const PORT = process.env.PORT || 3055;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed");
  });
});
