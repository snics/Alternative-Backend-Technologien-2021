function log() {
  console.log(...arguments);
}

function info() {
  console.info(...arguments);
}

function warn() {
  console.warn(...arguments);
}

function error() {
  console.error(...arguments);
}


module.exports = {
  log,
  info,
  warn,
  error,
  err: error
};
