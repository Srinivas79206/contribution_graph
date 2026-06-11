import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const date = moment().format();

jsonfile.writeFileSync(path, {
    date: date
});

const git = simpleGit();

await git.add(path);

await git.commit(date, {
    "--date": date
});

await git.push();

console.log("Commit Created Successfully");