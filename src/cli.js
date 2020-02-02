import sade from "sade";
import template from "./template-folder";

sade("template-folder [src] [dest]")
  .version("PKG.VERSION")
  .option("-f, --force", "force writing of existing files", false)
  .option(
    "-d, --data",
    "allows you to enter data to share with the json format template",
    "{}"
  )
  .example("template-folder ./a ./b")
  .example("template-folder ./a ./b -f")
  .example('template-folder ./a ./b -f -d "{"name":"ea"}"')
  .example("")
  .action(async (src, dest = "dist", { data, force }) => {
    await template(src, dest, { data: JSON.parse(data), force });
    console.log(`successful copy, check directory \`${dest}\``);
  })
  .parse(process.argv);
