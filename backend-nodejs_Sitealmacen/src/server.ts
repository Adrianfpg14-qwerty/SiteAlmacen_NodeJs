import { App } from "./config/index";

async function main() {
  const app = new App(3008);
  await app.listen();
}

main();
