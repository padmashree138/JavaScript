// await = makes an async function wait for a promise

async function loadFile() {
  let fileloaded = true;

  if (fileloaded) {
    return "File loaded";
  } else {
    throw "File NOT loaded";
  }
}
async function startProcess() {
  let message = await loadFile();
  console.log(message);
}
startProcess();
