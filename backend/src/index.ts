import app from "./app";
import Environment from "@/config/env.config";

app.listen(Environment.get("PORT"), () => {
  console.log(
    `Server is running on http://localhost:${Environment.get("PORT")}`
  );
});
