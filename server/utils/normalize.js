function normalizeString(str) {
  if (!str || typeof str !== "string") return "";
  return str.trim().toLowerCase();
}

module.exports = normalizeString;
